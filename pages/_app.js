import { useEffect, useMemo, useState } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { STARTUP_ASSETS } from '../lib/preload-assets';
import '../styles/globals.css';

const { htmlPathToRoute } = require('../lib/routes');

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function isInternalHtmlLink(anchor) {
  if (!anchor || !anchor.getAttribute) return false;
  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#')) return false;
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) return false;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;

  const url = new URL(href, window.location.origin);
  if (url.origin !== window.location.origin) return false;

  return url.pathname.endsWith('.html') || url.pathname === '/index.html';
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(true);
  const [bootLoading, setBootLoading] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(8);
  const isContactRoute = router.asPath === '/contact' || router.asPath.startsWith('/contact?');

  const preloaderText = useMemo(() => 'Loading Virtuosic 2K26', []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener('change', update);

    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const boot = async () => {
      const waitForWindowLoad =
        document.readyState === 'complete'
          ? Promise.resolve()
          : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

      const preloadAll = Promise.all(STARTUP_ASSETS.map(preloadImage));
      const minDelay = new Promise((resolve) => setTimeout(resolve, 1200));

      await Promise.all([waitForWindowLoad, preloadAll, minDelay]);
      if (cancelled) return;
      setLoadingProgress(100);
      setLoaderExiting(true);
      setTimeout(() => {
        if (cancelled) return;
        setBootLoading(false);
      }, 420);
    };

    boot();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!bootLoading || loaderExiting) return;
    const id = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 94) return prev;
        const step = prev < 55 ? 3 : 1;
        return Math.min(prev + step, 94);
      });
    }, 90);
    return () => clearInterval(id);
  }, [bootLoading, loaderExiting]);

  useEffect(() => {
    const navigate = (url) => {
      const target = htmlPathToRoute(url);
      if (target !== router.asPath) {
        router.push(target);
      }
    };

    window.__NEXT_NAVIGATE = navigate;

    const onClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest('a');
      if (!isInternalHtmlLink(anchor)) return;

      event.preventDefault();
      const href = anchor.getAttribute('href');
      navigate(href);
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      delete window.__NEXT_NAVIGATE;
    };
  }, [router]);

  useEffect(() => {
    if (bootLoading) return;

    let cancelled = false;
    let attempts = 0;

    const run = () => {
      if (cancelled) return;

      const initFn = isContactRoute ? window.__VIRTUOSIC_CONTACT_INIT : window.__VIRTUOSIC_INIT;
      if (typeof initFn === 'function') {
        initFn();
        return;
      }

      attempts += 1;
      if (attempts < 20) {
        window.requestAnimationFrame(run);
      }
    };

    window.requestAnimationFrame(run);

    return () => {
      cancelled = true;
      if (!isContactRoute && window.__VIRTUOSIC_COUNTDOWN_INTERVAL) {
        clearInterval(window.__VIRTUOSIC_COUNTDOWN_INTERVAL);
        window.__VIRTUOSIC_COUNTDOWN_INTERVAL = null;
      }
    };
  }, [router.asPath, bootLoading, isContactRoute]);

  if (!isMobile) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
        <p className="font-outfit text-lg leading-relaxed max-w-md">
          Please switch to a mobile device or enable mobile view for the best experience.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script id="tailwind-cdn" src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="beforeInteractive">{`
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                dark: {
                  900: '#000000',
                  800: '#0A0A0A',
                  700: '#111111',
                  600: '#1A1A1A'
                }
              }
            }
          }
        }
      `}</Script>
      <Script id="virtuosic-app-script" src="/app.js" strategy="afterInteractive" />
      <Script id="virtuosic-contact-script" src="/contact-page.js" strategy="afterInteractive" />

      {bootLoading ? (
        <div className={`vir-loader-overlay ${loaderExiting ? 'vir-loader-overlay-exit' : ''}`}>
          <div className="vir-loader-card">
            <img src="/profilephoto/logo.png" alt="Virtuosic" className="vir-loader-logo" />
            <div className="vir-loader-title">VIRTUOSIC 2K26</div>
            <p className="vir-loader-text">{preloaderText}</p>
            <div className="vir-loader-bar-shell">
              <div className="vir-loader-bar-fill" style={{ width: `${loadingProgress}%` }} />
            </div>
            <div className="vir-loader-percent">{loadingProgress}%</div>
          </div>
        </div>
      ) : null}

      <div style={{ visibility: bootLoading ? 'hidden' : 'visible' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

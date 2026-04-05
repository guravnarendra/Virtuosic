import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CardItem = {
  title: string;
  description: string;
};

const sampleCards: CardItem[] = [
  { title: 'Card 01', description: 'Pinned horizontal scroll with GSAP.' },
  { title: 'Card 02', description: 'Vertical wheel drives horizontal motion.' },
  { title: 'Card 03', description: 'Section stays pinned during animation.' },
  { title: 'Card 04', description: 'Distance is calculated from scrollWidth.' },
  { title: 'Card 05', description: 'Scrub keeps animation smooth and synced.' },
  { title: 'Card 06', description: 'ScrollTrigger is cleaned up on unmount.' },
];

export default function PinnedHorizontalScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden bg-zinc-950 text-white"
    >
      <div
        ref={trackRef}
        className="flex h-full w-max items-center gap-6 px-8"
      >
        {sampleCards.map((card) => (
          <article
            key={card.title}
            className="flex h-[70vh] w-[80vw] max-w-md shrink-0 flex-col justify-end rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-3 text-2xl font-bold">{card.title}</h3>
            <p className="text-sm text-zinc-300">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

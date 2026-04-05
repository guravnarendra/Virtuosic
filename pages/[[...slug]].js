import Head from 'next/head';
const { ROUTE_FILE_MAP } = require('../lib/routes');
const { loadHtmlPage } = require('../lib/html-loader');

function routeFromSlug(slug = []) {
  if (!slug || slug.length === 0) return '/';
  return `/${slug.join('/')}`;
}

export async function getStaticPaths() {
  const paths = Object.keys(ROUTE_FILE_MAP).map((route) => {
    if (route === '/') return { params: { slug: [] } };
    return { params: { slug: route.slice(1).split('/') } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const route = routeFromSlug(params?.slug || []);
  const fileName = ROUTE_FILE_MAP[route];

  if (!fileName) {
    return { notFound: true };
  }

  const page = loadHtmlPage(fileName);

  return {
    props: {
      ...page
    }
  };
}

export default function StaticHtmlPage({ title, description, bodyHtml, bodyClass }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className={bodyClass || ''} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}

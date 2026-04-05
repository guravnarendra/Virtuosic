const ROUTE_FILE_MAP = {
  '/': 'index.html',
  '/competition': 'competition.html',
  '/contact': 'contact.html',
  '/social': 'social.html',
  '/event': 'event.html',
  '/evolution': 'evolution.html',
  '/project-exhibition': 'project-exhibition.html',
  '/debate': 'debate.html',
  '/directo': 'directo.html',
  '/robotics': 'robotics.html',
  '/poster-presentation': 'poster-presentation.html',
  '/lan-gaming': 'lan-gaming.html',
  '/lan-gaming-freefire': 'lan-gaming-freefire.html',
  '/lan-gaming-bgmi': 'lan-gaming-bgmi.html',
  '/lan-gaming-minimilitia': 'lan-gaming-minimilitia.html',
  '/hacksprint': 'hacksprint.html',
  '/auto-expo': 'auto-expo.html'
};

function htmlPathToRoute(inputPath) {
  if (!inputPath) return '/';

  const [rawPath, rawQuery] = inputPath.split('?');
  const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  if (path === '/index.html') {
    return rawQuery ? `/?${rawQuery}` : '/';
  }

  if (path.endsWith('.html')) {
    const nextPath = path.replace(/\.html$/, '');
    return rawQuery ? `${nextPath}?${rawQuery}` : nextPath;
  }

  return inputPath;
}

module.exports = {
  ROUTE_FILE_MAP,
  htmlPathToRoute
};

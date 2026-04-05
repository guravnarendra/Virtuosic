/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/competition.html', destination: '/competition' },
      { source: '/contact.html', destination: '/contact' },
      { source: '/social.html', destination: '/social' },
      { source: '/event.html', destination: '/event' },
      { source: '/evolution.html', destination: '/evolution' },
      { source: '/project-exhibition.html', destination: '/project-exhibition' },
      { source: '/debate.html', destination: '/debate' },
      { source: '/directo.html', destination: '/directo' },
      { source: '/robotics.html', destination: '/robotics' },
      { source: '/poster-presentation.html', destination: '/poster-presentation' },
      { source: '/lan-gaming.html', destination: '/lan-gaming' },
      { source: '/lan-gaming-freefire.html', destination: '/lan-gaming-freefire' },
      { source: '/lan-gaming-bgmi.html', destination: '/lan-gaming-bgmi' },
      { source: '/lan-gaming-minimilitia.html', destination: '/lan-gaming-minimilitia' },
      { source: '/hacksprint.html', destination: '/hacksprint' },
      { source: '/auto-expo.html', destination: '/auto-expo' }
    ];
  }
};

module.exports = nextConfig;

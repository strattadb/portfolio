const args = process.env.CI ? ['--no-sandbox'] : [];

const server = {
  command: 'node e2e/ciServer.js',
  port: 3000,
};

module.exports = {
  launch: {
    ignoreHTTPSErrors: true,
    headless: process.env.PUPPETEER_HEADLESS,
    args,
  },
};
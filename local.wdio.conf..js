import wdioConfig from './wdio.conf.js';
const localConfig = { ...wdioConfig.config };
localConfig.capabilities = [{browserName: 'chrome', 'goog:chromeOptions': {args: []}}]
export const config = localConfig;
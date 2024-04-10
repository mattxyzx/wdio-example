import { deepmerge } from 'deepmerge-ts';
import wdioConfig = require('./wdio.conf.js');
export const config = deepmerge(wdioConfig.config, {
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless', '--disable-gpu',  '--remote-debugging-pipe']}
    }]
});
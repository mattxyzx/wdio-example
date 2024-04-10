import { deepmerge } from 'deepmerge-ts';
import wdioConfig from './wdio.conf.js';
export const config = deepmerge(wdioConfig.config, {
    capabilities: [{
        browserName: 'chrome',
    }]
});
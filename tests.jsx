import assert from 'assert';
import {name as appName} from './quitr.js';

describe('quitr', () => {
  it('should export its name', () => {
    assert.strictEqual(appName, 'quitr');
  });
});

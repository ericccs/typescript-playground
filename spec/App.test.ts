import * as assert from 'assert';
import { App } from '../app/App';

describe('App', function() {
  describe('hello()', function() {
    it('should made a call to number 1111', function() {
        let app: App = new App();
        app.hello(1111);
    });
  });
});

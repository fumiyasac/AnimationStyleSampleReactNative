import 'react-native';
import React from 'react';
import App from '../../src/App';

import renderer from 'react-test-renderer';

it('アプリケーションが正しく表示されること', () => {
  const tree = renderer.create(
    <App />
  );
});

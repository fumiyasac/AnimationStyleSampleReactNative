import 'react-native';
import React from 'react';

import AuthForm from '../../../../../../../src/components/contents/screen/auth/parts/AuthForm';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../../../../../../../src/redux/reducers';

import renderer from 'react-test-renderer';

it('AuthFormコンポーネントが正しく表示されること', () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
  const tree = renderer.create(
    <Provider store={store}>
      <AuthForm />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

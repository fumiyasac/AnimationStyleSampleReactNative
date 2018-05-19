import 'react-native';
import React from 'react';
import AuthHeader from '../../../../src/components/common/AuthHeader';

import renderer from 'react-test-renderer';

it('AuthHeaderコンポーネントが正しく表示されること', () => {

  let stubObject = { title: "登録・認証" };

  const tree = renderer.create(
    <AuthHeader title={stubObject.title} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
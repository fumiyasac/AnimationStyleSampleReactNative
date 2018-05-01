import 'react-native';
import React from 'react';
import PageHeader from '../../../../src/components/common/PageHeader';

import renderer from 'react-test-renderer';

it('PageHeaderコンポーネントが正しく表示されること', () => {

  let stubObject = { title: "設定やその他" };

  const onPressBackButtonMock = jest.fn();

  const tree = renderer.create(
    <PageHeader title={stubObject.title} onPressBackButton={onPressBackButtonMock} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
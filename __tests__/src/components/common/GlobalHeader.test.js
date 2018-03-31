import 'react-native';
import React from 'react';
import GlobalHeader from '../../../../src/components/common/GlobalHeader';

import renderer from 'react-test-renderer';

it('GlobalHeaderコンポーネントが正しく表示されること', () => {

  let stubObject = { title: "フィード" };

  const onPressMenuButtonMock = jest.fn();
  const onPressSettingButtonMock = jest.fn();

  const tree = renderer.create(
    <GlobalHeader 
      title={stubObject.title}
      onPressMenuButton={onPressMenuButtonMock()}
      onPressSettingButton={onPressSettingButtonMock()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
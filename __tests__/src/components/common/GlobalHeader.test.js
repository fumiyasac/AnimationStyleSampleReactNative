import 'react-native';
import React from 'react';
import GlobalHeader from '../../../../src/components/common/GlobalHeader';

import renderer from 'react-test-renderer';

it('GlobalHeaderコンポーネントが正しく表示されること', () => {

  // 表示対象のオブジェクト
  let stubObject = { title: "フィード" };

  // onPressのモック
  const onPressMenuButtonMock = jest.fn();
  const onPressSettingButtonMock = jest.fn();

  // スナップショットの書き出し
  const tree = renderer.create(
    <GlobalHeader 
      title={stubObject.title}
      onPressMenuButton={onPressMenuButtonMock()}
      onPressSettingButton={onPressSettingButtonMock()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
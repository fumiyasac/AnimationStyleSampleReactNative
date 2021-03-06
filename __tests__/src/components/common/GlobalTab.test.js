import 'react-native';
import React from 'react';
import GlobalTab from '../../../../src/components/common/GlobalTab';

import renderer from 'react-test-renderer';

it('GlobalTabコンポーネントが正しく表示されること', () => {

  let stubObject = { screen: "feed", title: "フィード", icon: "list" };

  const onPressMock = jest.fn();

  const tree = renderer.create(
    <GlobalTab 
      key={0}
      selected={true}
      title={stubObject.title}
      icon={stubObject.icon}
      onPress={onPressMock()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
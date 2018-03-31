import 'react-native';
import React from 'react';
import GlobalSideListItem from '../../../../src/components/common/GlobalSideListItem';

import renderer from 'react-test-renderer';

it('GlobalSideListItemコンポーネントが正しく表示されること', () => {

  let stubObject = { title: "フィード", selectedIndex: 0 };

  const onPressListItemMock = jest.fn();

  const tree = renderer.create(
    <GlobalSideListItem 
      key={0}
      title={stubObject.title}
      onPressListItem={onPressListItemMock()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
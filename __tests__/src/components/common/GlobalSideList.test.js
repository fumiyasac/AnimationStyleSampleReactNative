import 'react-native';
import React from 'react';
import GlobalSideList from '../../../../src/components/common/GlobalSideList';
import GlobalSideListItem from '../../../../src/components/common/GlobalSideListItem';

import renderer from 'react-test-renderer';

it('GlobalSideListコンポーネントが正しく表示されること', () => {

  let stubObject = {
    "headerTitle": "メニュー",
    "items": [
      { title: "フィード", selectedIndex: 0 },
      { title: "勉強日記", selectedIndex: 1 },
      { title: "達成記録", selectedIndex: 2 },
      { title: "お買い物", selectedIndex: 3 },
      { title: "お問い合わせ", selectedIndex: 4 }
    ]
  };

  const onPressListItemMock = jest.fn();

  const makeLists = () => { 
    return stubObject.items.map( (item, index) => {
      return (
        <GlobalSideListItem 
          key={index}
          title={item.title}
          onPressListItem={onPressListItemMock()} />
      );
    });
  };

  const tree = renderer.create(
    <GlobalSideList 
      headerTitle={stubObject.headerTitle}
      listItems={makeLists()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
  
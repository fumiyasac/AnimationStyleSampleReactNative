import 'react-native';
import React from 'react';
import SettingList from '../../../../../../../src/components/contents/screen/setting/parts/SettingList';

import renderer from 'react-test-renderer';

it('SettingListコンポーネントが正しく表示されること', () => {

  const onPressListItemMock = jest.fn();

	let stubObject = {
		"items": [
			{ title: "設定コンテンツその1", onPressListItem: onPressListItemMock() },
			{ title: "設定コンテンツその2", onPressListItem: onPressListItemMock() },
			{ title: "設定コンテンツその3", onPressListItem: onPressListItemMock() },
		]
	};

  const tree = renderer.create(
		<SettingList settingItems={stubObject} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
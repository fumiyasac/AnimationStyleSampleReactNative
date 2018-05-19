import 'react-native';
import React from 'react';
import SettingList from '../../../../../../../src/components/contents/screen/setting/parts/SettingList';

import renderer from 'react-test-renderer';

it('SettingListコンポーネントが正しく表示されること', () => {

  const onPressListItemMock = jest.fn();

	let stubObject = {
		"items": [
			{ title: "Twitter", onPressListItem: onPressListItemMock() },
			{ title: "Facebook", onPressListItem: onPressListItemMock() },
			{ title: "Github", onPressListItem: onPressListItemMock() },
			{ title: "Slideshare", onPressListItem: onPressListItemMock() },
			{ title: "Qiita", onPressListItem: onPressListItemMock() },
		]
	};

  const tree = renderer.create(
		<SettingList settingItems={stubObject} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
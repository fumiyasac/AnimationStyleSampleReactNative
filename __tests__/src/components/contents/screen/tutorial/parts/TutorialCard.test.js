import 'react-native';
import React from 'react';
import TutorialCard from '../../../../../../../src/components/contents/screen/tutorial/parts/TutorialCard';

import renderer from 'react-test-renderer';

it('TutorialCardコンポーネントが正しく表示されること', () => {

	let stubArray = [
		{
			key: 'tutorial1',
			title: '勉強記録をしっかり記録',
			titleStyle: {
				color: '#ffffff',
				fontWeight: 'bold'
			},
			image: require('../../../../../../../src/components/contents/screen/tutorial/assets/tutorial1.jpg'),
			imageStyle: {
				width: 260,
				height: 260,
				borderRadius: 130,
				borderWidth: 1.0,
				borderColor: '#dddddd',
			},
			backgroundColor: '#879fe7',
		},
		{
			key: 'tutorial2',
			title: '無理なく＆無駄なく',
			titleStyle: {
				color: '#ffffff',
				fontWeight: 'bold'
			},
			image: require('../../../../../../../src/components/contents/screen/tutorial/assets/tutorial2.jpg'),
			imageStyle: {
				width: 260,
				height: 260,
				borderRadius: 130,
				borderWidth: 1.0,
				borderColor: '#dddddd',
			},
			backgroundColor: '#879fe7',
		},
		{
			key: 'tutorial3',
			title: '書籍や参考書を活用',
			titleStyle: {
				color: '#ffffff',
				fontWeight: 'bold'
			},
			image: require('../../../../../../../src/components/contents/screen/tutorial/assets/tutorial3.jpg'),
			imageStyle: {
				width: 260,
				height: 260,
				borderRadius: 130,
				borderWidth: 1.0,
				borderColor: '#dddddd',
			},
			backgroundColor: '#879fe7',
		}
	];

  const tree = renderer.create(
		<TutorialCard tutorialContentsData={stubArray} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
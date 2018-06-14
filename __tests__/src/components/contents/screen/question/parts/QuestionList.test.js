import 'react-native';
import React from 'react';
import QuestionList from '../../../../../../../src/components/contents/screen/question/parts/QuestionList';

import renderer from 'react-test-renderer';

it('QuestionListコンポーネントが正しく表示されること', () => {

	let stubObject = {
		"items": [
			{ 
				title: "Q. このサンプルに改変や改良をしても大丈夫ですか？", 
				content: "A. ご自分でデザインやアカウントが必要な部分を改変した上でご活用頂けましたら、特に問題はないかと思います。もし自分の環境で動かなかった等があればGithubのissue等へ記載をしていただければ幸いです。しかしながら回答によってはご対応が出来かねます場合があることも了承頂ければと思います。"
			}
		]
	};

  const tree = renderer.create(
		<QuestionList questionItems={stubObject} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
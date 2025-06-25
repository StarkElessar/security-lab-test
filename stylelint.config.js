import propertyGroups from 'stylelint-config-recess-order/groups';

/**
 * @type {import('stylelint').Config}
 * */
export default {
	plugins: ['stylelint-prettier'],
	extends: ['stylelint-config-recess-order'],
	rules: {
		'prettier/prettier': [
			true,
			{
				singleQuote: false,
				tabWidth: 4,
				printWidth: 140,
				endOfLine: 'lf',
			},
		],
		'order/properties-order': propertyGroups.map((group) => {
			return {
				...group,
				emptyLineBefore: 'always',
				noEmptyLineBetween: true,
			};
		}),
	},
};

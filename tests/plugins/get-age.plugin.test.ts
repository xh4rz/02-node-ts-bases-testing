import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
	test('getAge() should return the age of a person', () => {
		const birthdate = '1998-06-13';
		const age = getAge(birthdate);

		expect(typeof age).toBe('number');
	});

	test('getAge should return current age', () => {
		const birthdate = '1998-06-13';
		const age = getAge(birthdate);

		const calculatedAge =
			new Date().getFullYear() - new Date(birthdate).getFullYear();

		expect(age).toBe(calculatedAge);
	});
});

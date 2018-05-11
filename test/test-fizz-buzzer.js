const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('Returns fizz-buzz', function() {

		const normalCases = [15, 30, 75];
		const expected = 'fizz-buzz';

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(expected);
		});
	});

	it('Returns buzz', function() {

		const normalCases = [5, 50, 80];
		const expected = 'buzz';

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(expected);
		});
	});

	it('Returns fizz', function() {

		const normalCases = [3, 18, 48];
		const expected = 'fizz';

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(expected);
		});
	});

	it('Returns number', function() {

		const normalCases = [1, 2, 7];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal(input);
		});
	});

	it('should raise an error if arg not number', function() {
		
		const badInputs = ['1', false, 'b'];

		badInputs.forEach(function(input) {
			expect(function(input) {		//can't put function into variable (const answer)?
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});		
});	
// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

/**
 *
 * 목표: 오래된 자바스크립트 스타일로 작성된 코드를 현대적인 자바스크립트 구문으로 리팩토링 한다
 *
 * 요구사항
 * 1. 변수: var -> let, const
 * 2. 인수: arguments -> ...
 * 3. for loop -> for of
 * 4. ex) '문자열' + 변수 -> 템플릿 리터럴
 * @param announce
 * @returns {number}
 */
function announceMachines(announce, ...machines) {
	let labelsCount = 0;

	for (const machine of machines) {
		let label;

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;

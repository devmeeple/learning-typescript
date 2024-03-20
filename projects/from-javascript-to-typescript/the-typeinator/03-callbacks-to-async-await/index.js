// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.
async function checkEmotion(knownEmotions, emotion) {
	// 데이터베이스 처리 시뮬레이션
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});

	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase) {
	if (!(await checkEmotion(knownEmotions, newEmotion, phrase))) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;

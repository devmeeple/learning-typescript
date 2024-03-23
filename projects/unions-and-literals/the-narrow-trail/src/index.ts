export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let nextSupply: "food" | "water" | undefined;
	let food = 5;
	let water = 5;

	for (let day = 1; day < 8; day += 1) {
		const dice = Math.floor(Math.random() * 6) + 1;
		let command: "food" | "water" | number;

		switch (dice) {
			case 1:
				command = "food";
				break;
			case 2:
				command = "water";
				break;

			default:
				command = dice;
				break;
		}

		if (typeof command === "number") {
			switch (nextSupply) {
				case "food":
					food += command;
					nextSupply = undefined;
					break;

				case "water":
					water += command;
					nextSupply = undefined;
					break;

				default:
					nextSupply = dice % 2 === 0 ? "food" : "water";
					break;
			}
		}

		switch (command) {
			case "food":
				nextSupply = "food";
				break;

			case "water":
				nextSupply = "water";
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
	}

	return true;
}

type ColorName = "red" | "yellow" | "purple";

(() => {
	function isRedFruit(fruitName: string): boolean {
		return ["manzana", "cereza", "ciruela"].includes(fruitName);
	}

	function getFruitsByColor(fruitColorName: ColorName): string[] {
		const fruitsByColor = {
			red: ["manzana", "fresa"],
			yellow: ["piña", "banana"],
			purple: ["moras", "uvas"],
		};
		const keys = Object.keys(fruitsByColor);
		if (!keys.includes(fruitColorName)) throw Error("the color must be: " + keys.join(", "));

		return fruitsByColor[fruitColorName];
	}

	let isFirstStepWorking = true;
	let isSecondStepWorking = true;
	let isThirdStepWorking = true;
	let isFourthStepWorking = false;

	function workingSteps() {
		if (!isFirstStepWorking) return "First step broken.";
		if (!isSecondStepWorking) return "Second step broken.";
		if (!isThirdStepWorking) return "Third step broken.";
		return !isFourthStepWorking ? "Four step broken." : "Working properly!";
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
	console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
	// console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();

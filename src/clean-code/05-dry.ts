type Size = "" | "S" | "M" | "L" | "XL";

class Product {
	//prettier-ignore
	constructor(
    public name: string = "", 
    public price: number = 0, 
    public size: Size = "",
  ) {}

	isProductReady(): boolean {
		for (const key in this) {
			switch (typeof this[key]) {
				case "string":
					// prettier-ignore
					if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
					break;
				case "number":
					// prettier-ignore
					if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is cero`);
					break;
				default:
					throw Error(`${typeof this[key]} is not supported`);
			}
		}
		return true;
	}

	toString() {
		if (!this.isProductReady) return;

		return `${this.name} (${this.price}), ${this.size}`;
	}
}

(() => {
	const bluePants = new Product("Blue Large Pants", 10, "S");
	console.log(bluePants.toString());
})();

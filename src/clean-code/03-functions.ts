interface Movie {
	cast: string[];
	description: string;
	rating: number;
	title: string;
}

(() => {
	function getMovieById(id: string) {
		console.log({ id });
	}

	function getCastByMovieId(movieId: string) {
		console.log({ movieId });
	}

	function getBioByActorId(ActorId: string) {
		console.log({ ActorId });
	}

	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast });
	}

	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === "fernando") return false;

		console.log("Crear actor", birthdate);
		return true;
	}

	// Continuar
	const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
		if (isDead) return 1500;

		if (isSeparated) return 2500;

		return isRetired ? 3000 : 4000;
	};
})();

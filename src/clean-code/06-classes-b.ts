(() => {
	// Aplicando el principio de responsabilidad única
	// Priorizar la composición frente a la herencia!

	type Gender = "M" | "F";

	interface PersonProps {
		name: string;
		gender: Gender;
		birthdate: Date;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public email: string;
		public role: string;
		public lastAccess: Date;

		constructor({ email, role }: UserProps) {
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		lastOpenFolder: string;
		workingDirectory: string;
	}

	class Settings {
		public lastOpenFolder: string;
		public workingDirectory: string;

		constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
			this.lastOpenFolder = lastOpenFolder;
			this.workingDirectory = workingDirectory;
		}
	}

	interface UserSettingsProps extends SettingsProps, UserProps, PersonProps {}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;

		constructor({ name, gender, birthdate, email, lastOpenFolder, role, workingDirectory }: UserSettingsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.settings = new Settings({ workingDirectory, lastOpenFolder });
		}
	}

	// prettier-ignore
	const userSettings = new UserSettings({ 
    workingDirectory: "/usr/home", 
    lastOpenFolder: "/home", 
    email: "fernando@google.com", 
    role: "admin", 
    name: "Fernando", 
    gender: "M", 
    birthdate: new Date("1985-10-21") 
  });

	console.log({ userSettings });
})();

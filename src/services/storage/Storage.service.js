class StorageService {
	#storage = window.localStorage;

	setLiteral(key, value) {
		this.#storage.setItem(key, value);
	}

	setObject(key, value) {
		const stringifiedObj = JSON.stringify(value);
		this.#storage.setItem(key, stringifiedObj);
	}

	getLiteral(key) {
		return this.#storage.getItem(key);
	}

	getObject(key) {
		const value = this.#storage.getItem(key);
		const parsedValue = value ? JSON.parse(value) : null;
		return parsedValue;
	}
}

export { StorageService as default };

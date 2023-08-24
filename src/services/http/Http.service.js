class HttpService {
	#errorHandler

	constructor(errorHandler) {
		this.#errorHandler = errorHandler
	}

	async get(
		url,
		opts = {
			ignoreDefaultErrorHandler: false,
		}
	) {
		try {
			const response = await fetch(url, {
				method: 'GET',
			})
			const json = await response.json()

			return Promise.resolve(json)
		} catch (err) {
			if (!opts.ignoreDefaultErrorHandler) this.#errorHandler.handle(err)
			return Promise.reject(err)
		}
	}

	async post(
		url,
		body,
		opts = {
			ignoreDefaultErrorHandler: false,
		}
	) {
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
			})
			const json = await response.json()

			return Promise.resolve(json)
		} catch (err) {
			if (!opts.ignoreDefaultErrorHandler) this.#errorHandler.handle(err)
			return Promise.reject(err)
		}
	}
}

export { HttpService as default }

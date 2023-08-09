class HttpErrorHandler {
	handle(err, customHandler = undefined) {
		if (customHandler) {
			customHandler(err)
		} else {
			// TODO: implement default error handler
			console.log('DEFAULT ERROR HANDLER: ', err)
		}
	}
}

export default HttpErrorHandler

import { serviceNames } from '../constants'
import getService from './getService'

const httpService = getService(serviceNames.http)
const httpErrorHandlerService = getService(serviceNames.httpErrorHandler)
const storageService = getService(serviceNames.storage)

// IMPORTANT: this is our Dependency Injection (DI) approach
function withServices(fn) {
	return fn({
		httpService,
		httpErrorHandlerService,
		storageService,
	})
}

export { withServices as default }

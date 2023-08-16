import { serviceNames } from '../constants'
import { HttpService, HttpErrorHandler, StorageService } from '../services'

const httpErrorHandler = new HttpErrorHandler()
const httpService = new HttpService()
const storageService = new StorageService()

// IMPORTANT: register service by adding in this object
const serviceMap = {
	[serviceNames.http]: httpService,
	[serviceNames.httpErrorHandler]: httpErrorHandler,
	[serviceNames.storage]: storageService,
}

export default function getService(serviceName) {
	const service = serviceMap[serviceName]

	if (!service)
		throw new Error(
			'Service not found. Make sure you passed the correct service name',
		)

	return service
}

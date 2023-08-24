import { serviceNames } from '../constants';
import getService from './getService';

const httpService = getService(serviceNames.http);
const httpErrorHandlerService = getService(serviceNames.httpErrorHandler);
const storageService = getService(serviceNames.storage);

// IMPORTANT: this is our Dependency Injection (DI) approach
// TODO: It's better to get the service names which developer wants to inject
function withServices(fn) {
	return fn({
		httpService,
		httpErrorHandlerService,
		storageService,
	});
}

export { withServices as default };

import { withServices } from '../../lib';

const feedApi = withServices(({ httpService }) => {
	return {
		useFeedQuery() {
			const queryFn = async () => {
				console.log('FN CALLED');
			};

			return {
				queryFn,
			};
		},
	};
});

export { feedApi as default };

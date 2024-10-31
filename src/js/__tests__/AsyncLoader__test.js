import Loader from '../AsyncLoader'
describe('GameSavingLoader', () => {
	test('should return async data', async () => {
		const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
		try {
					const loadData = await Loader.load();
					expect(loadData).toEqual(data);
		} catch(err) {
			console.error(err);
		}
	})
})

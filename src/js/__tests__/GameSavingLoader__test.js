import GameSavingLoader from '../GameSavingLoader/GameSavingLoader';

describe('GameSavingLoader', () => {
	const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  test('should load saving', () => {
    return GameSavingLoader.load()
     .then(loadedSave =>
        expect(loadedSave).toBe(data))
  });
})
import json from './GameSavingLoader/parser'
import read from './GameSavingLoader/reader'

export default class Loader{
	static async load(){
		try {
			const response = await read();
			return await json(response);  
		} catch {
			return 'error'
		};
	}
};

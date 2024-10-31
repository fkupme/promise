import json from './GameSavingLoader/parser'
import read from './GameSavingLoader/reader'

export default class Loader{
	static async load(){
		try {
			const response = await read();
			return await new Promise((res,rej)=>{
				const data = json(response); 
				if(data){
					res(data)
				} else{
					rej('Error parsing data')
				};
			}) 
		} catch {
			return 'error'
		};
	}
};

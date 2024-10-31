import read from './reader';
import json from './parser';

export default class GameSavingLoader{
	static load() {
	return	read()
			.then(data => json(data))
			.then(saving => 
				new Promise((res, rej) => {
					if(saving) {
						res(saving);
					} else {
						rej('Error: Could not load saving');
				};
			}))
			.catch(err => console.error(err));
	};
};
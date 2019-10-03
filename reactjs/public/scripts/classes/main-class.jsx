export class MainClass {
	constructor(){
		this.loading = true;
		this.menu = [
			{title: 'HOME',link:''},
			{title: 'INFORMATION',link:''},
			{title: 'WORK',link:''},
			{title: 'PHOTOGRAPHY',link:''},
		];
		this.work = [

		];
	}
	loadingFinish(callback){
		this.loading = false;
		callback();
	}
}
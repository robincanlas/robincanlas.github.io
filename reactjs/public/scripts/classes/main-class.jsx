class Main{
	constructor(){
		this.loading = true;
		this.menu = [
			{title: 'HOME',link:'',state: true},
			{title: 'INFORMATION',link:'',state: false},
			{title: 'WORK',link:'',state: false},
			{title: 'PHOTOGRAPHY',link:'',state: false},
		];
		this.work = [

		];
	}
	loadingFinish(callback){
		this.loading = false;
		callback();
	}
}

export default Main;
export class PhotoClass {
	constructor(data){
		this.photos = [];
		this.originalPhotos = [];
		this.photoLoading = true;
	}
	getList(){
		return this.photos;
	}
	updatePhotos(photos, callback){
		this.photos = [...this.photos, ...photos];
		callback();
	}
	updateOriginalPhotos(photos, callback){
		this.originalPhotos = [...this.originalPhotos, ...photos];
		callback();
	}
	openThisPhoto(index, callback){
		callback(this.originalPhotos[index]);
	}
	updatePhotoLoading(boolean, callback){
		this.photoLoading = boolean;
		callback();
	}
}
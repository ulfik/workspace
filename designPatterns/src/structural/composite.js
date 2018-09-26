class PhotoGallery {
  constructor(albums){
    this.albums = albums;
  }
  showAll(){
    return this.albums.map(album=>album.showAll());
  }
}

class Album {
  constructor(photos){
    this.photos = photos;
  }
  showAll(){
    return this.photos.map(photo=>photo.showAll());
  }
}

class Photo {
  constructor(name){
    this.name = name;
  }
  showAll(){
    return this.name;
  }
}

export default {PhotoGallery, Album, Photo};
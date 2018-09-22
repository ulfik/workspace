function iterator(array){
  var nextElement;
  array.reverse().forEach((element, index)=>{
    var currentElement = {
      value: element,
      next: nextElement
    }
    if(index === 0) {
      //ostatni element
      currentElement.hasNext = false;
    } else {
      // kolejne elementy,
      currentElement.hasNext = true;
    }
    nextElement = currentElement;
  })
}
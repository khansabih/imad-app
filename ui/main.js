console.log('Loaded!');
var element = getElementById('mainText');
element.innerHTML = "New Value";

// move the image

var imageElement = getElementById('buddy');
imageElement.onClick = function(){
  imageElement.style.marginLeft='100px';  
};


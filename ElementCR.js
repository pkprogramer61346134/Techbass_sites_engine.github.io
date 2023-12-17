function elementCreator(name, element, count, place, elementIds, classname,) {

        var newElement = document.createElement(element);
        newElement.id = name;
        newElement.classList.add(classname);

        if (place) {

            document.body.appendChild(newElement);
            
        } else {
            var parentElement = document.getElementById(elementIds);
            parentElement.appendChild(newElement);
          
        }
    
    return newElement;
}

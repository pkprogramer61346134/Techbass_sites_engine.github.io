function elementCreator(elementid, elementName,  elementPlace, PersionID, classname,) {

        var newElement = document.createElement(elementName);
        newElement.id = elementid;
        newElement.classList.add(classname);

        if (elementPlace) {

            document.body.appendChild(newElement);
            
        } else {
            var parentElement = document.getElementById(PersionID);
            parentElement.appendChild(newElement);
          
        }
    
    return newElement;
}

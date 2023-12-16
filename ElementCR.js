function elementCreator(name, element, count, place, elementIds, classname,) {
    for (let index = 0; index < count; index++) {
        var newElement = document.createElement(element);
        newElement.id = name + index;
        newElement.classList.add(classname);

        if (place) {

            document.body.appendChild(newElement);
        } else {
            var parentElement = document.getElementById(elementIds);
            parentElement.appendChild(newElement);
        }
    }
}

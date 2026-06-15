// ====================
// OPEN / CLOSE WINDOW
// ====================

var welcomeWindow = document.getElementById("window");

var welcomeOpen = document.getElementById("welcomeopen");

var welcomeClose = document.getElementById("welcomeclose");

welcomeOpen.onclick = function() {

    welcomeWindow.style.display = "block";

};

welcomeClose.onclick = function() {

    welcomeWindow.style.display = "none";

};


// ====================
// DRAG WINDOW
// ====================

var windowElement =
document.getElementById("window");

if(windowElement){

    dragElement(windowElement);

}

function dragElement(element) {

    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if (
        document.getElementById(
        element.id + "header"
        )
    ) {

        document.getElementById(
        element.id + "header"
        ).onmousedown = startDragging;

    } else {

        element.onmousedown =
        startDragging;

    }

    function startDragging(e) {

        e = e || window.event;

        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup =
        stopDragging;

        document.onmousemove =
        elementDrag;

    }

    function elementDrag(e) {

        e = e || window.event;

        e.preventDefault();

        currentX =
        initialX - e.clientX;

        currentY =
        initialY - e.clientY;

        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top =
        (element.offsetTop - currentY)
        + "px";

        element.style.left =
        (element.offsetLeft - currentX)
        + "px";

    }

    function stopDragging() {

        document.onmouseup =
        null;

        document.onmousemove =
        null;

    }

}
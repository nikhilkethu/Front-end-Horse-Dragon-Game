	// event handler function
    function handler(e) {
        var key = window.event ? e.keyCode : e.which;
        console.log(key, e.shiftKey, e.altKey, e.ctrlKey);
    }
    
    // attach handler to the keydown event of the document
    if (document.attachEvent) document.attachEvent('onkeydown', handler);
    else document.addEventListener('keydown', handler);


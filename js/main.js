
function dragDiv() {
    $('#scorewrapper').draggable();
}

$( document ).ready(function() {
    dragDiv();
});


var mymodule = (function () {
//Private

//Public
    return {
        $$: function (id) {
            'use strict';
            if (typeof id != 'undefined') {
                return document.getElementById(id);
            }
            else {
                return 'undefined'
            }
        },

        showDivs: function (arg) {
            document.getElementById(arg).style.visibility = 'visible';
        },

        hideDivs: function (arg) {
            document.getElementById(arg).style.visibility = 'hidden';
        }

    }
})();


//AddEventListener
mymodule.$$('myinput').addEventListener('focus',function () {

    mymodule.showDivs('scorewrapper');
    return false;
}, false);

mymodule.$$('myinput').addEventListener('blur',function () {

    mymodule.hideDivs('scorewrapper');
    return false;
}, false);
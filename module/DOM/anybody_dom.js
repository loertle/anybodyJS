// >> Module
/**
*   #NAME:  ANYBODY_DOM
*   #TYPE:  MODULE
*   #DESC:  Module for string functions
*   #VERS:  0.0.1       ( MAJOR.MINOR.PATCH )   
*   #UPDT:  2015-11-29  ( YYYY-MM-DD )
*   #AUTH:  Lothar Oertle | dev.lothar-oertle.de
*   #FCTS:  >>  getDomById()       returns dom of document as object
*   
**/
var ANYBODY_DOM = (function () {

    // Javascript strict mode
    "use strict";
    
    // >> Initialization
    var me = {};
    // << Initialization
    
    // >> Function
    /**
    *   #NAME:  getDomById
    *   #TYPE:  FUNCTION
    *   #RTYP:  OBJECT
    *   #DESC:  returns the elements of the document object model
    *   #EXAM:  str = ANYBODY_DOM.getDomById()
    *   #NOTE:  -
    *   #REAS:  there is no js function 
    *   #PARA:  -
    *   #DEPD:  -
    *   #RVAL:  on success      DOM Object
    **/
    me.getDomById = function () {
        
        // >> Initialization
        // Function return value
        var objFrv = "",
            // object of elements
            elObj = {},
            // array of elements
            elemId = [],
            // attribute id
            id = "id",
            // DOM
            dom = document.getElementsByTagName("*"),
            // loop counter
            i = 0;
        // << Initialization     
        
        // >> Execution
        for (i = 0; i < dom.length; i++) {
            if (dom[i].hasAttribute(id)) {
                elemId[i] = dom[i].getAttribute(id);
                if (elemId[i] !== "") {
                    elObj[elemId[i]] = dom[i];
                }
            }
        }
        
        objFrv = elObj;
        // << Execution 
        
        // Function return
        return objFrv;
        
    };

    //Module return
    return me;
    
}());
// << Module    
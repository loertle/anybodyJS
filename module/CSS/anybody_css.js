// >> Module
/**
*   #NAME:  ANYBODY_CSS
*   #TYPE:  MODULE
*   #DESC:  Module for string functions
*   #VERS:  0.0.1       ( MAJOR.MINOR.PATCH )   
*   #UPDT:  2015-11-29  ( YYYY-MM-DD )
*   #AUTH:  Lothar Oertle | dev.lothar-oertle.de
*   #FCTS:  >>  getCSSValue(obj, str)       returns css attribute value of an HTMLElement
*           >>  em2px(num)                  returns the given css property em value in px
*           >>  addCSSValues(str, str, str) returns addition of 2 css values
*           >>  subCSSValues(str, str, str) returns subtraction of 2 css values
*   
**/
var ANYBODY_CSS = (function () {
    
    // Javascript strict mode
    "use strict";
    
    // >> Initialization
    var me = {};
    // << Initialization
    
    // >> Function
    /**
    *   #NAME:  getCssValue
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING
    *   #DESC:  returns css attribute value of an HTMLElement
    *   #EXAM:  str = ANYBODY_CSS.getCssValue(DOMElement, CSSProperty);
    *   #NOTE:  if 1. parameter is not a HTMLElement then function returns: ""
    *   #REAS:  there is no such JS function
    *   #PARA:  fpobjDom        #DESC:  DOM Element
    *           fpstrCssProp    #DESC:  CSS Attribute 
    *   #DEPD:   -
    *   #RVAL:  on success      css attribute value
    *           on error        ""
    **/
    me.getCssValue = function (fpobjDom, fpstrCssProp) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
            
            // style attributes of HTMLElement
            strStyle = "",

            // Error check
            blnError = true;
        // << Initialization
        
        // >> Error Check
        // check data type string and string length > 0
        if (typeof fpstrCssProp === 'string' &&
                fpstrCssProp !== "") {
            
            // check data type object 
            if (typeof fpobjDom === 'object') {
                
                // check HTMLElement
                if (fpobjDom instanceof HTMLElement) {
                    
                    // check CSS attributes
                    if (fpobjDom.hasAttribute("style")) {
                
                        // set no error
                        blnError = false;
                        
                        // set style attributes
                        strStyle = fpobjDom.getAttribute("style");
                        
                        // check presence of css property
                        if (strStyle.indexOf(fpstrCssProp) >= 0) {
                            
                            // no error
                            blnError = false;
                            
                        }
                        
                    }
                    
                }
                
            }

        }
        // << Error Check
        
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // set function return value
            strFrv = getComputedStyle(fpobjDom).getPropertyValue(fpstrCssProp);
            
        }
        // << Execution       
        
        // Function return
        return strFrv;
        
    };
    
        // >> Function
    /**
    *   #NAME:  em2px
    *   #TYPE:  FUNCTION
    *   #RTYP:  NUMBER
    *   #DESC:  returns the given css property em value in px based on 
    *           font-size attribute of document.body
    *   #EXAM:  num = ANYBODY_CSS.addCSSValue(100);
    *   #NOTE:  Paramter must be type of number
    *   #REAS:  there is no such JS function
    *   #PARA:  fpnumEm         #DESC:  CSS property number in em
    *   #DEPD:   -
    *   #RVAL:  on success      CSS property number in px
    *           on error        ""
    **/
    me.em2px = function em2px(fpnumEm) {
        
        
        // >> Initialization
        // Function return value
        var numFrv = "",
            
            strFontSize = "",
            
            strPx = "",

            // Error check
            blnError = true;
        // << Initialization
        
        // >> Error Check
        // check data type number and number > 0
        if (typeof fpnumEm === 'number' &&
                fpnumEm > 0) {
            
            // no error
            blnError = false;
            
        }
        
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // get body Font size
            strFontSize  = getComputedStyle(document.body).getPropertyValue("font-size");
            
            // set Font size in px
            strPx = strFontSize.substr(0, strFontSize.length - 2);
            
            // set function return value
            numFrv = strPx * fpnumEm;
            
        }
        // << Execution       
        
        // Function return
        return numFrv;
        
    };
    
    // >> Function
    /**
    *   #NAME:  addCSSValues
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING
    *   #DESC:  returns addition of 2 css values
    *   #EXAM:  str = ANYBODY_STR.addCssValue("120px", "30px", "px");
    *   #NOTE:  The three parameter must be the same unit
    *   #REAS:  there is no such JS function
    *   #PARA:  fpstrCssProp1   #DESC:  CSS Attribute
    *           fpstrCssProp2   #DESC:  CSS Attribute
    *           fpStrUnit       #DESC:  CSS Unit
    *   #DEPD:   -
    *   #RVAL:  on success      sum of 2 css attributes
    *           on error        ""
    **/
    me.addCSSValues = function (fpstrCssProp1, fpstrCssProp2, fpStrUnit) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
            
            // length of 1. parameter
            numCssPropLength1 = 0,
            
            // length of 2. parameter
            numCssPropLength2 = 0,
            // style attributes of HTMLElement
            numUnitLength = 0,
            
            // number of 1. parameter
            numCssValue1 = 0,
            
            // number of 2. parameter
            numCssValue2 = 0,

            // Error check
            blnError = true;
        // << Initialization        
        
        // >> Error Check
        // check data type string and string length > 0
        if (typeof fpstrCssProp1 === 'string' && typeof fpstrCssProp2 === 'string' &&
                fpstrCssProp1 !== "" && fpstrCssProp2 !== "") {

            // check unit
            if (typeof fpStrUnit === 'string' && fpStrUnit !== "") {
                
                // get length of css property 1
                numCssPropLength1 = fpstrCssProp1.length;
                
                // get length of css property 2
                numCssPropLength2 = fpstrCssProp2.length;
                
                // get length of css unit
                numUnitLength = fpStrUnit.length;
                
                // check length of css properties
                if (numCssPropLength1 > numUnitLength &&
                        numCssPropLength2 > numUnitLength) {
                    
                    // check units
                    if (fpstrCssProp1.substr(numCssPropLength1 - numUnitLength) === fpStrUnit &&
                            fpstrCssProp2.substr(numCssPropLength2 - numUnitLength) === fpStrUnit) {
                        
                        // get number of css property 1
                        numCssValue1 = Number(fpstrCssProp1.substr(0, numCssPropLength1 - numUnitLength));
                        
                        // get number of css property 2
                        numCssValue2 = Number(fpstrCssProp2.substr(0, numCssPropLength2 - numUnitLength));
                        
                        // no error
                        blnError = false;
                        
                    }
                    
                }
                
            }
            
        }
        
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // set function return value
            strFrv = numCssValue1 + numCssValue2 + fpStrUnit;
            
        }
        // << Execution   
        
        // Function return
        return strFrv;
        
    };
    
   // >> Function
    /**
    *   #NAME:  subCSSValues
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING
    *   #DESC:  returns subtraction of 2 css values
    *   #EXAM:  str = ANYBODY_CSS.subCssValue("120px", "30px", "px");
    *   #NOTE:  The three parameter must be the same unit
    *   #REAS:  there is no such JS function
    *   #PARA:  fpstrCssProp1   #DESC:  CSS Attribute
    *           fpstrCssProp2   #DESC:  CSS Attribute
    *           fpStrUnit       #DESC:  CSS Unit
    *   #DEPD:   -
    *   #RVAL:  on success      sum of 2 css attributes
    *           on error        ""
    **/
    me.subCssValues = function (fpstrCssProp1, fpstrCssProp2, fpStrUnit) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
            
            // length of 1. parameter
            numCssPropLength1 = 0,
            
            // length of 2. parameter
            numCssPropLength2 = 0,
            // style attributes of HTMLElement
            numUnitLength = 0,
            
            // number of 1. parameter
            numCssValue1 = 0,
            
            // number of 2. parameter
            numCssValue2 = 0,

            // Error check
            blnError = true;
        // << Initialization        
        
        // >> Error Check
        // check data type string and string length > 0
        if (typeof fpstrCssProp1 === 'string' && typeof fpstrCssProp2 === 'string' &&
                fpstrCssProp1 !== "" && fpstrCssProp2 !== "") {

            // check unit
            if (typeof fpStrUnit === 'string' && fpStrUnit !== "") {
                
                // get length of css property 1
                numCssPropLength1 = fpstrCssProp1.length;
                
                // get length of css property 2
                numCssPropLength2 = fpstrCssProp2.length;
                
                // get length of css unit
                numUnitLength = fpStrUnit.length;
                
                // check length of css properties
                if (numCssPropLength1 > numUnitLength &&
                        numCssPropLength2 > numUnitLength) {
                    
                    // check units
                    if (fpstrCssProp1.substr(numCssPropLength1 - numUnitLength) === fpStrUnit &&
                            fpstrCssProp2.substr(numCssPropLength2 - numUnitLength) === fpStrUnit) {
                        
                        // get number of css property 1
                        numCssValue1 = Number(fpstrCssProp1.substr(0, numCssPropLength1 - numUnitLength));
                        
                        // get number of css property 2
                        numCssValue2 = Number(fpstrCssProp2.substr(0, numCssPropLength2 - numUnitLength));
                            
                        // no error
                        blnError = false;
                        
                    }
                    
                }
                
            }
            
        }
        
        // >> Execution
        // check existence of error
        if (blnError === false) {

            // set function return value
            strFrv = numCssValue1 - numCssValue2 + fpStrUnit;
            
        }
        // << Execution   
        
        // Function return
        return strFrv;
        
    };
        
    //Module return
    return me;
    
}());
// << Module    
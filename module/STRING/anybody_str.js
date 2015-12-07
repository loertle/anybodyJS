// >> Module
/**
*   #NAME:  ANYBODY_STR
*   #TYPE:  MODULE
*   #DESC:  Module for string functions
*   #VERS:  0.1.1       ( MAJOR.MINOR.PATCH )   
*   #UPDT:  2015-11-29  ( YYYY-MM-DD )
*   #AUTH:  Lothar Oertle | dev.lothar-oertle.de
*   #FCTS:  >>  leftLen( str, num )     returns left part substring due to length
*           >>  leftStr( str, str )     returns left part substring due to string
*           >>  rightLen( str, num )    returns right part substring due to length
*           >>  rightStr( str, str )    returns right part substring due to string
*           >>  lowercase( str )        returns lowercase string
*           >>  uppercase( str )        returns uppercase string
*   
**/
var ANYBODY_STR = (function () {
    
    // Javascript strict mode
    "use strict";
    
    // >> Initialization
    var me = {};
    // << Initialization
       
    // >> Function
    /**
    *   #NAME:  leftLen
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING
    *   #DESC:  returns left part of the string with given length
    *   #EXAM:  str = ANYBODY_STR.leftLen( string, length )
    *   #NOTE:  if 2. parameter is boolean or string then function returns: ""
    *           this is different to .substr()
    *   #REAS:  no js function which does exactly the same
    *   #PARA:  fpstrSource     #DESC:  source string
    *           fpnumLength     #DESC:  length of substring  
    *   #DEPD:   -
    *   #RVAL:  on success      Substring
    *           on error        ""
    **/
    me.leftLen = function (fpstrSource, fpnumLength) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
        
            // Error check
            blnError = true;
        // << Initialization
        
        // >> Error Check
        // check data type and presence of value for string
        if (typeof fpstrSource === 'string' &&
                fpstrSource !== "") {
            
            // check data type for length
            if (typeof fpnumLength !== 'boolean' &&
                    typeof fpnumLength !== 'string') {
    
                // check data type number
                if (!isNaN(fpnumLength)) {

                    // check integer and > 0
                    if (fpnumLength % 1 === 0 &&
                            fpnumLength > 0) {
                        
                        // no error
                        blnError = false;

                    }

                }

            }
            
        }
        // << Error Check
        
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // set function return value
            strFrv = fpstrSource.substr(0, fpnumLength);
            
        }
        // << Execution       
        
        // Function return
        return strFrv;
    
    };
    // << Function
    
    // >> Function
    /**
    *   #NAME:  leftStr
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING 
    *   #DESC:  returns left part of the string until to the substring 
    *   #EXAM:  str = ANYBODY_STR.leftStr( string, substring );
    *   #REAS:  Better readable then str.search( substr )
    *   #PARA:  fpstrSource    #DESC:  source string
    *           fpstrSub       #DESC:  string to be found     
    *   #DEPD:  me.leftLen
    *   #RVAL:  on success     Substring
    *           on error       ""
    **/
    me.leftStr = function (fpstrSource, fpstrSub) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
        
            // Substring position
            numPosition = 0,
        
            // Error check
            blnError = true;
        // << Initialization

        // >> Error Check
        // check data type and presence of value for string and substring        
        if (typeof fpstrSource === 'string' &&
                typeof fpstrSub === 'string' &&
                    fpstrSource !== "" &&
                        fpstrSub !== "") {
            
            // check length for string and substring
            if (fpstrSource.length >= fpstrSub.length) {
                
                
                // get position of substring 
                numPosition = fpstrSource.search(fpstrSub);
                
                // check existence of substring
                if (numPosition > 0) {
                    
                    // no error
                    blnError = false;

                }
                  
            }
        
        }
        // << Error Check
        
        // >> Execution
        // check existence of error 
        if (blnError === false) {
            
            // set function return value
            strFrv = me.leftLen(fpstrSource, numPosition);
            
        }
        // << Execution 
        
        // Function return
        return strFrv;
        
    };
    // << Function
    
    // >> Function
    /**
    *   #NAME:  rightLen
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING
    *   #DESC:  returns right part of the string with given length
    *   #EXAM:  str = ANYBODY_STR.rightLen( string, length );
    *   #NOTE:  if 2. parameter is boolean or string then function returns: ""
    *   #REAS:  there is no such JS function
    *   #PARA:  fpstrSource     #DESC:  source string
    *           fpnumLength     #DESC:  length of substring  
    *   #DEPD:   -
    *   #RVAL:  on success      Substring
    *           on error        ""
    **/
    me.rightLen = function (fpstrSource, fpnumLength) {
    
        // >> Initialization
        // Function return value
        var strFrv = "",

            // Error check
            blnError = true,
        
            // String length
            numStrLength = 0;
        // << Initialization
        
        // >> Error Check
        // check data type and presence of value for string
        if (typeof fpstrSource === 'string' &&
                fpstrSource !== "") {
        
            // check data type for length
            if (typeof fpnumLength !== 'boolean' &&
                    typeof fpnumLength !== 'string') {

                // check data type number
                if (!isNaN(fpnumLength)) {

                    // check data type and positive number
                    if (fpnumLength % 1 === 0 &&
                            fpnumLength > 0) {
                        
                        // get length of string
                        numStrLength = fpstrSource.length;
                        
                        // check lengths
                        if (numStrLength >= fpnumLength) {
                            
                            // set no error
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
            strFrv = fpstrSource.substr(numStrLength - fpnumLength, fpnumLength);
            
        }
        // << Execution       
        
        // Function return
        return strFrv;
        
    };
    // << Function
                   
    // >> Function
    /**
    *   #NAME:  rightStr
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING 
    *   #DESC:  returns right part of the string until to the substring 
    *   #EXAM:  str = ANYBODY_STR.rightStr( string, substring );
    *   #REAS:  there is no JS function
    *   #PARA:  fpstrString    #DESC:  source string
    *           fpstrSub       #DESC:  string to be found     
    *   #DEPD:  me.leftLen
    *   #RVAL:  on success     Substring
    *           on error       ""
    **/
    me.rightStr = function (fpstrString, fpstrSub) {
    
        // >> Initialization
        // Function return value
        var strFrv = "",
        
            // Substring length
            numPosition = 0,
        
            // Error check
            blnError = true;
        // << Initialization
    
        // >> Error Check
        // check data type string and presence of value for string and substring        
        if (typeof fpstrString === 'string' &&
                typeof fpstrSub === 'string' &&
                    fpstrString !== "" &&
                        fpstrSub !== "") {
            
            // check length for string and substring
            if (fpstrString.length >= fpstrSub.length) {
                
                // set no error
                blnError = false;
            
            }
            
        }
        // << Error Check
    
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // get position of substring 
            numPosition = fpstrString.search(fpstrSub);
            
            // set function return value
            strFrv = me.rightLen(fpstrString, fpstrString.length - fpstrSub.length - numPosition);
        
        }
        // << Execution 
        
        // Function return
        return strFrv;
    
    };
    // << Function
    
    // >> Function
    /**
    *   #NAME:  lowercase
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING 
    *   #EXAM:  str = ANYBODY_STR.lowercase( string );
    *   #REAS:  Better readable then str.tolowerCase( )
    *           Don't throws an JS error if parameter isn't a string
    *           Returns "" instead
    *   #PARA:  fpstrSource    #DESC:  source string   
    *   #DEPD:  -
    *   #RVAL:  on success     String
    *           on error       ""
    **/
    me.lowercase = function (fpstrSource) {
        
        // >> Initialization
        // Function return value
        var strFrv = "",
        
        // Error check
            blnError = true;
        // << Initialization
        
        // >> Error Check
        // check data type string and presence of value
        if (typeof fpstrSource === 'string' &&
                fpstrSource !== "") {
            
            // set no error
            blnError = false;
            
        }
        // << Error Check
        
        // >> Execution
        // check existence of error
        if (blnError === false) {
            
            // set function return value
            strFrv = fpstrSource.toLowerCase();
            
        }
        // << Execution 
        
        // Function return
        return strFrv;
        
    };
    // << Function
    
    // >> Function
    /**
    *   #NAME:  uppercase
    *   #TYPE:  FUNCTION
    *   #RTYP:  STRING 
    *   #REAS:  Better readable then str.toUpperCase( )
    *           Don't throws an JS error if parameter isn't a string
    *           Returns "" instead
    *   #PARA:  fpstrSource    #DESC:  source string   
    *   #DEPD:  -
    *   #RVAL:  on success     String
    *           on error       ""
    **/
    me.uppercase = function (fpstrSource) {

        // >> Initialization
        // Function return value
        var strFrv = "",

        // Error check
            blnError = true;
        // << Initialization

        // >> Error Check
        // check data type string and presence of value
        if (typeof fpstrSource === 'string' &&
                fpstrSource !== "") {
            
            // set no error
            blnError = false;

        }
        // << Error Check

        // >> Execution
        // check existence of error
        if (blnError === false) {

            // set function return value
            strFrv = fpstrSource.toUpperCase();
            
        }
        // << Execution 

        // Function return
        return strFrv;

    };
    // << Function
    
    //Module return
    return me;
    
}());
// << Module
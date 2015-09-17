# anybodyJS

With *anybodyJS* you can use functions with function names that understands anybody. 
* easy understandable code 
  * self explaining function names
  * clear structured code
  * well documented
* reduction of complexity
  * functions are encapsulated in javascript modules
  * those modules are autonomous and independent from each other
  * one *.js file per module
  * no dependency to other libraries like jquery
 
### Example
```js
// use anybodyJS module for String functions 
var modStr = ANYBODY_STR;

// use string function RightStr
// output: "script"
var str = modStr.RightStr( "javascript", "java");
```

## Modules
* Existing
  * String functions:  ANYBODY_STR | anybody_str.js
* Planned
  * Number functions:  ANYBODY_NUM | anybody_num.js
  * Boolean functions: ANYBODY_BLN | anybody_bln.js
  * Date and Time functions: ANYBODY_DAT | anybody_dat.js
  * other functions: ANYBODY_OTH | anybody_oth.js
  

## Structure
every module has the same structure
### module
```js
var MODULENAME = (function(){
  var me = {};
  me.anyfunction = function( fpstr, fpnum ){
    // function code
  };
  // more functions
  return me;
}());
```

### function
every function has the same structure
```js
  me.anyfunction = function( fpstr, fpnum ){
    // >> Initialization
      // init variables
      // set return value to error value ( e.g. boolean: false )
    // << Initialization
  
  // >> Parameter Check
    // if there are no errors, set error flag = false
  // << Parameter Check
  
  // >> Execution
    // execute code for return value
  // << Execution
  
  // >> Error Check
    // if error flag false
  // << Error Check
  
  // set return value
  return anyValue;
};
```

## Robust code
* every variable will be initialized with a dedicated value
* every parameter will be checked for its value
* every possible error will be checked and catched
* function returns a dedicated error value

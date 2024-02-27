//  ######################################## difference between Nodelist and Array:

        // When we use `document.querrySelectorAll('h1')` then we get NodeList.
        // we cannot use operations like map in Nodelist.
        // we cannot use styles properties directly like we can do in Array, In Nodelist we have
        // mention the postion of array:
                                // mylist[0].style.color = 'green';

        /*
        
                To use map or the functionality of Array in Nodelist, first we have to convert
                Nodelist into basic Array then we can use all operations.
                Else we can use forEach loop for performing operations on Nodelist
        
        */


//  ######################################## difference between Nodelist and HTMLCollection:

        /*
            -   When we use `document.getElementByClassName('.className')` then we get HTMLCollection.
            -   There is no looping or forEach operations.
            -   It can only used as object.
            -   To use all operations on HTMLCollection, convert it into Array by using Array.from(variable) method.                
        */


//  ######################################## How to convert Nodelist into HTMLCollection/Array:

        /*
            This can be done using "Array.from()" method.
                `Array.from(VariableName)`
        */


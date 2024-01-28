### How to get url of the current page
-   Use window.location.href to get the current URL address:
    -   Example
            document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + window.location.href;


# Codes learned from Brian yu, Hitesh

## let, cont and var :
###    **Hitesh**
-   Let:
    -   Used when the value needs to be change
-   Const:
    -   Used when value needs to be same or fixed always, not must not change even by mistake also.
-   Var:
    -   **Prefer not to use "var" Because of issue in block scope and functional scope**

-   **What is block Scope And functional scope**            *Rewrite*
    -   "{}" this is the block scope.


## DOM manipulation
-   **From Brian yu**
    -   To use function after the loading complete web page. Use the even listener **DOMContentLoaded**
        -   document.addEventListener('DOMContentLoaded', function() {
                // write your funtion here, which you want to run after loading the whole page.
        });

## Counter.html [file url](./counter.html)
-   **From Brian yu**    
    -       if we take the counter variable in an another variable it will start counting from zero. but if we use it directly then it starts from 1.

## Events: Different types of events
-   **From Brian yu**
    -   onclick, onmouseover, onkeydown, onkeyup, onload, onblur

## To use document.EventListener for:
-   **From Brian yu**
    -   Html, ID, Class
        -   document.EventListener('tag').innerHTML = This.value;
        -   document.EventListener('#id').value = This.value;
        -   document.EventListener('.class').value = This.value;

## Set Intervals
-   **From Brian yu**
    -   To apply interval
        -   setInterval(variable,1000);

## Local Storage

## Objects in Javascript

# API

## Json

## Window
-   **From Brian yu**
    -   ### window.innerWidth and window.innerHeight
        -   How wide is the window
    -   ### window.scrollY

# Brain yu projects    [file links](./projects/)

# Projects:         **rewrite**
-   ## Todo List [Link to todolist:](../javascript/projects/todolist/tasks.html) -
    - ### html
    -   In order to make to do list, we add an heading "Tasks"
    -   Make an unorder lists for the task with an ID
    -   Then add an form to add an input field
    -   add an input field for submit
    ### js

-   ## Currency Exchange [Link to Currency Exchange:](../javascript/projects/CurrencyExchange/currency.html) -
    -   ### 

-   ## Infinite scroll

-   ## Counter

-   ## Maths game

# Hitesh projects    [file links](./projects/)

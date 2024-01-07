$(document).ready(function () {
    // Your jQuery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like : $('selector').action()

    // clicks on all the p elements. This is an example of element selector
    $('p').click(); // click on p

    $("p").click(function () {
        console.log("You Clicked On P", this);
        // $('#id').hide(); 
        // $('.class').hide(); 
    }); // do this when we click on p

    // There are three main types of selectors in jQuery
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element Selector - This is an example of element selcetor which clicks on all p
    // $('p').click();

    // 2. Id Selector - this is an example of id selector
    // $('#second').click();

    // 3. Class Selector - this is an example of id selector
    // $('.odd').click();

    // Other Selectors
    // $('*').click() // Clicks on all elements
    // $('p.odd').click() // Clicks on all elements
    // $('p:first').click() // Clicks on all elements
})

$(document).ready(function () {
    // Your jQuery code here
    console.log('I am in a new file now');
    console.log("We are using jQuery");
    // jQuery Syntax looks like : 
    // $('selector').action()

    // clicks on all the p elements. This is an example of element selector
    // $('p').click(); // click on p

    // $('p').click(function () {
    //     console.log("you clicked on p", this);
    //     // $('#id').hide(); 
    //     // $('.class').hide(); 
    // }); // do this when we click on p

    // $('p').mouseenter(function () {
    //     console.log("you entered:", this);
    //     // $('#id').hide(); 
    //     // $('.class').hide(); 
    // }); // do this when we click on p

    // $('p').dblclick(function () {
    //     console.log("you double clicked on p", this);
    //     // $('#id').hide(); 
    //     // $('.class').hide(); 
    // }); // do this when we click on p

    // $('p').hover(function () {
    //     console.log("you hovered on:", this);
    //     // $('#id').hide(); 
    //     // $('.class').hide(); 
    // },
    //     function () {
    //         console.log('Thanks for coming');
    //     })

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

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // keyboardEvent = keypress, keydown, MediaKeyStatusMAp
    // form events = sumbit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // demoing the on method
    $('p').on(
        {
            click: function () {
                console.log('Thanks for coming', this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }
        })

    // $('#code').hide(2000, function() {
    //     console.log("hidden");
    // })

    // $('#code').show(2000, function() {
    //     console.log("shown");
    // })

    // $('#btn').click(function() {
    //     $('#code').toggle(1000);            
    // })

    // $('#btn').click(function() {
    //     $('#code').fadeOut(1000);            
    // })

    $('#btn').click(function () {
        $('#code').fadeToggle(1000);
    })

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed & callback parameters are optional
    // $('#code').slideDown(1000, function() {
    // console.log('done');
    // });
    // $('#code').slideUp(1000);
    // $('#code').slideToggle(1000);

    // Animate function in jQuery
    // $('#code').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px'
    // }, "fast")

    // $('#code').animate({opacity: 0.3}, 4000);
    // $('#code').animate({opacity: 0.9}, 1000);
    // $('#code').animate({width: '350px'}, 12000);

    // $('#code').stop();
    // $('#code').stop(function() {console.log('stopped');});
    // $('#code').text();

    // $('#ta').val('setting it to hello');
    // $('#ta').html('setting it to hello');
    // $('#ta').html('setting it to hello2');
    // $('#inp').html('setting it to hello2');
    // $('#inp').val('setting it to hello2');
    // $('#inp').empty();
    // $('#code').empty();
    // $('#code').text('you are good');
    // $('#code').remove();

    // $('#code').addClass('myClass')
    // $('#code').addClass('myClass2')
    // $('#code').removeClass('myClass2')
    // $('#code').css('background-color', 'red')
    // $('#code').css('background-color')

    // AJAX Using jQuery
    // $.get('', function(data, status) { alert(data); })

    // $.get('', function(data, status) { alert(status); })

    // $.post('',
    // { name: 'hello', channel: 'codingGx' },
    // function (data, status) {alert(status) });

});

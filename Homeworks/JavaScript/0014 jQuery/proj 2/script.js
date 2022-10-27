/* $('#start').click(function () {
    $('#message')
        .html('message')
        .css('background-color', 'green')
        .parent()
        .css("background-color", "yellow")
        .width(350)
        .height(80)
});

$('#reset').click(function () {
    location.reload();
   
}) */

///////////////////////////////////////////////////////////
//$("#content").css('color', 'red')
//$("h1").css("color", "green")
//$("article h2").css("color", "blue")
//$("h1 + p").css("color", 'red')
//$("#content").prev().css("color", 'red')
//$("#content").next().css("color", 'red')
//$("article").find("h2").css("color", 'red')
//$("*").css("color", 'red')
//$("article > h2").css("color", 'red')
//$(".content a.button");

//$("a.button", "content");
//$(".content").find("a.button"); //!

/* $(".content a.button");
$(".content h3.title");

var $content = $(".content")
$content.find("a.button");
$content.find("h3.title"); */

/* $(".content div input:disabled");
$(".content div").find("input:disabled"); */

//////////////////////////////////////////////////////////////
/* $(".box").css({
    "color": 'red',
    "font-size": "12px",
    "margin-left": "10px",
}) */
/* $(".box").css({
    color: 'red',
    fontSize: "12px",
    marginLeft: "10px",
}) */

/* $("#content").css("height", function(i, value) {
    return parseFloat(value)*1.2;
}) */

//$("#content").addClass("name") //adding class
//.hasClass("className")

/* .removeClass("class")
.addClass('class') */

//$("#content").toggle() //скрывает элемент немедленно, дисплэй нон

/* attr(attrName)
attr(attrName, attr Value)
removeattr(attrName)

var altText = $('img').attr("alt");
$('img').attr('src', '/img/default.jpg')

$("a#my").attr({
    'href':'/img/default.jpg',
    'title': "web dev blog"
}) */

//////////////////////////////////////////////////////////// events
/* $('a').click(function(event){
    alert('hello')
    //event.preventDefault();
    //event.stopPropagation()
    return false //то же самое что и выше
})
$('header').click(function(event){
    alert('hello21111')

}) */

/* $('#quantity').keyup(function(){
    let Value = $(this).val();
    $('#msg').text(Value);
}) */

/////////////////////////////////////////////////////////// animation
//$('.anim').hide('slow') //'fast' or '600' 800 200 ms
/* $('.anim').click(function() {
    $(this).hide('slow');
})*/

/* $('.anim').hide('slow', function(){
    alert('hello')
}) */

/* $('#stick').click(function(){
    $('#hide').slideDown('slow')
}) */

/* function changeClass() {
    $(this).prev().toggleClass('active')
}
$(function () {
    $('article h2').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })
}) */
/* 
$(".anim").click(function(){
    //$(this).fadeOut(1200);
    //$(this).fadeIn(1200); //.fadeToggle()
    //$(this).fadeTo('slow', 0.4)
}) */

/* $('.anim').animate({
    //'opacity': 0.5,
    //'height': '50px',
    //'width':'250px'
    'opacity':'-=0.3',
    'height': '-=50px',
    'width': '-=25px'
}) */

/* $(".anim").animate({ 'height': '+=50px' })
    .animate({ 'width': '-=25px' }, { quae: false }) //параллельный запуск анимации
 */

//jQuery.fx.off = true; //отключение анимации

////////////////////////////////////////////////////////////// DOM
//let $myDiv = $('<div id"my" class="page">Hello</div>').appendTo("#content");
//let $myDiv = $('<div>Hello</div>', {'id':'my', 'class': 'page'}).appendTo("#content");
//let $myDiv = $('<div>Hello</div>').attr({'id':'my', 'class':'page'}).appendTo("#content") //то же самое только бістрее работает

/* let $myDiv = document.createElement("div");
$myDiv.id = 'my';
$myDiv.className = 'page'; */

//$('p').after('<hr/>')
//$('<hr/>').insertAfter('p')
//$('<hr/>').insertBefore('p')

//$('<p>Hello</p>').appendTo("#content>")

/////////////
//$(".second").replaceWith("<h2>New text</h2>");
//$("<h2>New text 2</h2>").replaceAll('.inner')

//$('.inner').wrap("<div class='new'> TExt</div>")

//$('.inner').wrapInner("<div class='new'> TExt</div>")

//$(".first").clone().appendTo('.third')

/* let p;
$('.first').click(function(){
    if(p){
        p.appendTo('.first');
        p=null;
    } else {
        p = $(".second").detach();
    }
}) */ //появляется и уберается на том же месте

//.empty() - моментально дисплеит в нон
//.remove()

//////////////// позиционирование
/* $(".first").css("margin-left", "30px")
let p = $(".first");
let offset = p.offset();
p.html('left:' + offset.left + ", top:" + offset.top ) */

//$(".third").offset({ top: 10, left: 350 }); 

/* let p = $(".first").css("margin", '20px');
let position = p.position();
p.html('left:' + position.left + ", top:" + position.top ) */

/* function showHeight(element, height) {
    $("div").text("Height of the" + element + "is" + height);
}
$("#getp").click(function () {
    showHeight("paragraph", $("p").height());
});
$("#getd").click(function () {
    showHeight("document", $(document).height());
});
$("#getw").click(function () {
    showHeight('window', $(window).height());
}) */

/* let p = $("p:first");
$("p:last").text("innerHeight: " + p.innerHeight()) */
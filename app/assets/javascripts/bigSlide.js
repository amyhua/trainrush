/*! bigSlide - v0.4.3 - 2014-01-25
* http://ascott1.github.io/bigSlide.js/
* Copyright (c) 2014 Adam D. Scott; Licensed MIT */
!function(a){"use strict";a.fn.bigSlide=function(b){var c=a.extend({menu:"#menu",push:".push",side:"left",menuWidth:"15.625em",speed:"300"},b),d=this,e=a(c.menu),f=a(c.push),g=c.menuWidth,h={position:"fixed",top:"0",bottom:"0","settings.side":"-"+c.menuWidth,width:c.menuWidth,height:"100%"},i={"-webkit-transition":c.side+" "+c.speed+"ms ease","-moz-transition":c.side+" "+c.speed+"ms ease","-ms-transition":c.side+" "+c.speed+"ms ease","-o-transition":c.side+" "+c.speed+"ms ease",transition:c.side+" "+c.speed+"ms ease"};return e.css(h),f.css(c.side,"0"),e.css(i),f.css(i),e._state="closed",e.open=function(){e._state="open",e.css(c.side,"0"),f.css(c.side,g)},e.close=function(){e._state="closed",e.css(c.side,"-"+g),f.css(c.side,"0")},d.on("click.bigSlide",function(a){a.preventDefault(),"closed"===e._state?e.open():e.close()}),d.on("touchend",function(a){d.trigger("click.bigSlide"),a.preventDefault()}),e}}(jQuery);

/* initialize plugin */
$(document).ready(function() {
    $('.menu-link').bigSlide();
});
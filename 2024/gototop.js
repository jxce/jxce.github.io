!function(){var o;o=jQuery,Drupal,o(document).ready((function(){var t=o("#go-to-top");if(t.length>0){var n=t.data("options");o(window).scroll((function(){o(this).scrollTop()>100?t.css({bottom:n&&n.bottom||"60px"}):t.css({bottom:"-100px"})})),t.click((function(){return o("html, body").animate({scrollTop:"0px"},800),!1}))}}))}();
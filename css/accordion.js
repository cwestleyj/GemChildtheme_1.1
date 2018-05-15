
jQuery(document).ready(function($) {
var headers = $('.accordion');
var contentAreas = $('.accContent').hide();
var expandLink = $('.accordion-expand-all');

// add the accordion functionality
headers.click(function() {
  this.classList.toggle("active");
    var panel = $(this).next();
    var isOpen = panel.is(':visible');
  // open or close as neccessary
  panel[isOpen? 'slideUp': 'slideDown']()
  .trigger(isOpen? 'hide': 'show');
   return false;
});
// hook up expand/collapse all
expandLink.click(function(){
    var isAllOpen = $(this).data('isAllOpen');
    contentAreas[isAllOpen? 'hide': 'show']()
        .trigger(isAllOpen? 'hide': 'show')

});
contentAreas.on({
    // whenever we open a panel, check to see if they're all open
    // if all open, swap the button to collapser
    show: function(){
        var isAllOpen = !contentAreas.is(':hidden');
        if(isAllOpen){
            expandLink.text('Collapse All')
                .data('isAllOpen', true);
        }
    },
    // whenever we close a panel, check to see if they're all open
    // if not all open, swap the button to expander
    hide: function(){
        var isAllOpen = !contentAreas.is(':hidden');
        if(!isAllOpen){
            expandLink.text('Expand all')
            .data('isAllOpen', false);
        }
    }
});

});

// var acc = document.getElementsByClassName("accordion");

// // grab the class //
// var i;
// //instantiate i variable //
// for (i = 0; i < acc.length; i++) {
// //add up to accordion character length //
//   acc[i].addEventListener("click", function() {
//    //add event listener to i var//
//     this.classList.toggle("active");
//       //toggle the .active css class//
//       var panel=this.nextElementSibling;
//     console.log(panel)
//          //create var panel; set to height of nearest DOM element (ul) //
//     if (panel.style.maxHeight){
//             //if maxheight = 0 do nothing
//       panel.style.maxHeight = null;
//     } else {
//               //if maxheight < 0 then add approx scrollheight in px to maxHeight style//
//       panel.style.maxHeight = "100px";
//         // panel.scrollHeight = "100px";
//       // panel.style.scrollHeight="100px";

//     }
//   });
// }

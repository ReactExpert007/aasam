/**
 * Theme:
 * Author:
 * Form Repeater
 */

$(document).ready(function () {
  'use strict';
	initEmpty: true
  $('.repeater-default').repeater({ initEmpty: true });

  $('.repeater-custom-show-hide').repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (remove) {
      if (confirm('Are you sure you want to remove this item?')) {
        $(this).slideUp(remove);
      }
    }
  });
});
// VALIDATION SETTINGS FOR JSHINT.COM
// This file
/*jshint browser:true, jquery:true, strict:true, devel:false */

function ct_drupal_autoupload_apply($container) {

    "use strict";

    $container
        .on( 'focus', 'input[type="file"]', function(e) {
            $(e.target).parent().addClass('focus'); // .managed_file-input
        })
        .on( 'blur', 'input[type="file"]', function(e) {
            $(e.target).parent().removeClass('focus'); // .managed_file-input
        });
}
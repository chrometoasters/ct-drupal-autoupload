# ct-drupal-autoupload

A fancy file picker, which adds a skin and keyboard accessibility to the https://www.drupal.org/project/autoupload module.

Tested using Drupal 7.28, 2014-05-08 with the Open Framework theme (MW 2014).

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

    cd /PATH/TO/PROJECT-THEME-FOLDER
    bower install https://github.com/chrometoasters/ct-drupal-autoupload.git#v1.0.0 --save

Note: by default Bower installs packages to `bower_components`. If you wish to customise this location please add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/PACKAGES"
        }

## Description:

### When JavaScript is enabled

The Drupal module:

* adds a style block to the header, which hides the Upload button
* changes the 2-step pick-then-upload behaviour to 1 step, so that picking a file also triggers an upload of that file via Ajax

We:

* we restyle the UI to match the design (IE9+)
* we add keyboard focus support

### When JavaScript is disabled

* the standard Upload button is shown
* we do not restyle the UI as we cannot add the keyboard focus support

## Configuration:

### Install the Drupal module

    cd /PATH/TO/PROJECT-THEME-FOLDER/PATH/TO/MODULES
    git clone git://git.drupal.org/project/autoupload.git

### Configure the Drupal module

1. Log in to Drupal > Modules > AutoUpload > Enable > Save Configuration
1. Log in to Drupal > Modules > AutoUpload > Configure
    * Name: Autoupload for images (change if desired)
    * Context: .image-widget-data
    * File Input Selector: .form-file
    * File Event: change
    * Submit Input Selector: input.upload
    * Submit Event: click
    * Error Element Selector: input.error
    * Error removal handling: Remove the class

Notes:

* Note that the git URL is available @ https://www.drupal.org/project/autoupload > Repository viewer
* Autoupload settings are based on `autoupload/README.txt`

### Add our skin

    // _your-project-base.scss
    @import "/path/to/theme/bower_components/ct-drupal-autoupload/dev/ct-drupal-autoupload";

    // your-stylesheet.scss
    @import your-project-base;

    .managed_file-input {
        @extend %ct-drupal-autoupload;
    }

#### Notes

* if you wish to use your own styling please duplicate `_ct-drupal-autoupload.scss` and host it with your other stylesheets.

### Add our keyboard support

    // your-project-scripts.js
    $(document).ready( function() {

        $.getScript('/path/to/theme/bower_components/ct-drupal-autoupload/dev/_ct-drupal-autoupload.js', function() {
            var $container_element = $('.field-widget-image-image');
            ct_drupal_autoupload_apply( $container_element );
        });

    });

#### Notes

* this script is not dependent on any DOM manipulation from the `autoupload` module
* if the script is not working please ensure that `$container_element` is far enough up the DOM that it is not affected by the file picker `Remove` button

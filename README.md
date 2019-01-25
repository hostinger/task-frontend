# Frontend Developer Task

working demo: http://marius-lastauskas.000webhostapp.com

DISCLAIMER:
I have done task, using provided design image, without taking in account the original hostinger.com webpage.
My work was focused on code quality, website responsivenes, browser support and equivalence to provided image. 
Because of this site breakpoints and mobile screen dropdown does not look exacly like in original site.
Since task required to use CSS preprocessor and javascript task-runner .less and Grunt.js files are also included in pull request, 
which would othervise excluded with .gitignore

TOOLS USED:
.less used as CSS preprocessor and Grunt.js as task-runner, AngularJS used to build timer.

FILE STRUCTURE:
AngularJS libraries at lib folder.
JavaScript code at src/js folder.
Landing view at src/view folder.
.less files are at src/style/less folder and css file at src/style/css folder.
There are two css files, one main file, and one specifically for IE9.
There are 5 .less files, for mixins, variables, main style, style for IE9 and __extend.less file for compiling them all togeather.
Grunt.js is set up to compile main.css file from __extend.less, and ie8.css from ie8.less file.

BROWSER SUPPORT:
Browser support is great. 
Checked and works with Chrome, Opera, Mozila, Edge, IE11, IE10, IE9.

## Few simple steps

1. Fork this repo
2. Prepare pull request and let us know that you are done

## Few simple requirements

- Design should be recreated as closely as possible.
- Design must be responsive. Because we live in our smartphones and we will check with them for sure.
- Use CSS preprocessor (SCSS preferred).
- Browser support must be great. All modern browsers plus IE9 and above.
- Use a Javascript task-runner. Webpack, Grunt or Gulp - it doesn't matter.
- Do not commit the build, because we are building things on deployment.
- VueJS, AngularJS or ReactJS would be an advantage

## Few tips

- Structure!
- Have fun!
- Hosted DEMO would give some extra points

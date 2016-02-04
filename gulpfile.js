var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 var babelify = null;
 elixir.config.js.browserify.transformers.forEach(function (transformer) {
   if (transformer.name == "babelify") {
     babelify = transformer;
   }
 });
 if (babelify !== null) {
   if (!babelify.options.hasOwnProperty("plugins")) {
     babelify.options.plugins = [];
   }
   babelify.options.plugins.push("syntax-object-rest-spread");
   babelify.options.plugins.push("transform-object-rest-spread");
 }
 else {
   console.error("Could not find the babelify browserify transformer");
   return;
 }

elixir(function(mix) {
    mix.sass('app.scss');
    mix.copy('./node_modules/fixed-data-table/dist/fixed-data-table.css', 'public/css');
    
    mix.browserify([
      'index.js',
      'helpers.js',
      'config.js',
      'app/components/DataTable/DateCell.jsx',
      'app/components/DataTable/ImageCell.jsx',
      'app/components/DataTable/LinkCell.jsx',
      'app/components/DataTable/TextCell.jsx',
      'app/components/Dimensions/DimensionChooser.jsx',
      'app/components/Modal/ImageResizerModal.jsx',
      'app/components/Roster/Roster.jsx',
      'app/components/Roster/RosterPhoto.jsx',
      'app/data/credentials.js'
    ], 'public/js/app.js');
    
    mix.livereload();
});

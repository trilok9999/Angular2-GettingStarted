/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
    'angular2-ladda': 'node_modules/angular2-ladda/module',
    'ladda':          'node_modules/ladda/js',
    'spin':           'node_modules/ladda/js/spin.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':    { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':   { defaultExtension: 'js' },
    'ng2-bs3-modal' : {
      main : './ng2-bs3-modal.js'
    },
    'angular2-ladda': { main: 'module.js', defaultExtension: 'js' },
    'ladda': { main: 'ladda.js', defaultExtension: 'js' }
    
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
  ];

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  
  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
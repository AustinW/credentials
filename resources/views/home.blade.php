<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Credential</title>
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="/css/fixed-data-table.css">
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="/css/app.css">
    
    <style>
    body {
      padding-top: 50px;
    }
    .starter-template {
      padding: 40px 15px;
      text-align: center;
    }
    </style>
    
  </head>
  <body>
    
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Credential</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">

      <div class="row">
        <!--Nav Bar -->
        <nav class="col-xs-3 bs-sidebar">
          <ul id="sidebar" class="nav nav-stacked fixed">
            <li>
              <a href="#step-1">1: Dimensions</a>
              <ul class="nav nav-stacked">
                <li><a href="#step-1-sub1">Sub-Group 1</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#step-2">2: People</a>
              <ul class="nav nav-stacked">
                <li><a href="#step-2-sub1">Sub-Group 1</a></li>
                <li><a href="#step-2-sub2">Sub-Group 2</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#step-3">3: Event Information</a>
              <ul class="nav nav-stacked">
                <li><a href="#step-3-sub1">Sub-Group 1</a></li>
                <li><a href="#step-3-sub2">Sub-Group 2</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#step-4">4: Zones</a>
              <ul class="nav nav-stacked">
                <li><a href="#step-4-sub1">Sub-Group 1</a></li>
                <li><a href="#step-4-sub2">Sub-Group 2</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#step-5">5: Customize</a>
              <ul class="nav nav-stacked">
                <li><a href="#step-5-sub1">Sub-Group 1</a></li>
                <li><a href="#step-5-sub2">Sub-Group 2</a></li>
              </ul>
            </li>
            
          </ul>
        </nav>
        
        <!--Main Content -->
        <div class="col-xs-9">
          <h1>Credential Maker</h1>
          
          <section id="step-1" class="group">
            <h3>Dimensions</h3>
            <div id="step-1-sub1" class="subgroup">
              <h4>Choose size:</h4>
              <div class="row">
                <div class="col-md-12" id="dimension-chooser">
                  
                </div>
              </div>
            </div>
          </section>
          
          <section id="step-2" class="group">
            <h3>Roster</h3>
            <div id="step-2-sub1" class="subgroup">
              <h4>Upload your roster</h4>
              <div id="credentials-app-roster-upload"></div>
              <div id="credentials-app-roster"></div>
            </div>
          </section>
          
          <section id="step-3" class="group">
            <h3>Group C</h3>
            <div id="step-3-sub1" class="subgroup">
              <h4>Group C Sub 1</h4>
            </div>
            <div id="step-3-sub2" class="subgroup">
              <h4>Group C Sub 2</h4>
            </div>
          </section>
          
              
          <section id="step-4" class="group">
            <h3>Group D</h3>
            <div id="step-4-sub1" class="subgroup">
              <h4>Group D Sub 1</h4>
            </div>
            <div id="step-4-sub2" class="subgroup">
              <h4>Group D Sub 2</h4>
            </div>
          </section>
          
              
          <section id="step-5" class="group">
            <h3>Group E</h3>
            <div id="step-5-sub1" class="subgroup">
              <h4>Group E Sub 1</h4>
            </div>
            <div id="step-5-sub2" class="subgroup">
              <h4>Group E Sub 2</h4>
            </div>
          </section>
          
              
        </div>
      </div>

    </div><!-- /.container -->
    
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    <script src="/js/app.js"></script>
    
    <script>
    $('body').scrollspy({
      target: '.bs-sidebar',
      offset: 40
    });
    
    
    </script>
    
    @if ( Config::get('app.debug') )
      <script type="text/javascript">
        document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
      </script> 
    @endif
  </body>
</html>

<html>  
  <head>
    <title>Test</title> 
  </head>  
  <body>  
    <?php
      $html = file_get_contents('http://www.google.com/trends/explore?hl=en-US#q=html5,jquery');
      echo ($html);
    ?>

    <!-- JS Galore -->
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="js/min/awesome-min.js"></script>
  </body>  
</html> 
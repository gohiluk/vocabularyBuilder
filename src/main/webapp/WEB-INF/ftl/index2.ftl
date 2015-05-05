<#import "spring.ftl" as spring />
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Starter Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <!-- Custom styles for this template -->
    <link rel="stylesheet" type="text/css" href="<@spring.url '/resources/css/starter-template.css' />">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<div style="background-image: url(<@spring.url '/resources/img/kindle1.png' />)"></div>

<div>
    <img src="<@spring.url '/resources/img/kindle1.png' />" />
</div>

<div>
    <img src="<@spring.url '/resources/img/kindle2.png' />" />
</div>

<div>
    <img src="<@spring.url '/resources/img/kindle3.png' />" />
</div>

<textarea id="textarea2"style="margin: 0px; width: 300px; height: 300px; float:left">
    You will see here translation
</textarea>

<textarea id="textarea" style="margin: 0px; width: 659px; height: 670px; float:left">
    Double click on word which you want to translate
</textarea>


</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<script src="<@spring.url '/resources/js/vocabulary.js' />"></script>

</html>
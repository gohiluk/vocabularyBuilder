<#import "spring.ftl" as spring />
<#assign security=JspTaglibs["http://www.springframework.org/security/tags"] />
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Read easily</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <!-- Custom styles for this template -->
    <link rel="stylesheet" type="text/css" href="<@spring.url '/resources/css/starter-template.css' />">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <@security.csrfMetaTags/>
</head>
<body>


<div style="width:100%; height:46px; color:white">
     <a href="<@spring.url '/'/>"> <img src="<@spring.url '/resources/img/owl2.jpg'/>" style="width:35px; height:38px; margin-left:140px; margin-top:0px" /></a>
     <img src="<@spring.url '/resources/img/logo.png'/>" style="width:262px; height:40px; margin-left:30px; margin-top:3px" />
    <button id="showmenu" class="btn btn-success" style="height:46px; float:right; margin-top:0px; width:100px">Menu
    </button>
</div>

<div id="textarea" spellcheck="false" contentEditable>
Double click on word which you want to translate
</div>

<div class = "navbar navbar-default navbar-fixed-bottom color:#593F23">
<div class = "container">
<p class="navbar-text pull-left">About</p>
<a href="<@spring.url '/'/>" class ="navbar-text pull-left">Contact</a>
</div>
</div>

<@security.authorize access="hasRole('ROLE_USER')">
<div class="jjenglish"></div>
</@security.authorize>

<div class="menu">
    <ul class="navigator">
        <li><a href="<@spring.url '/login'/>">Zaloguj</a></li>
        <li><a>Zglos blad</a></li>
    </ul>
</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<script src="<@spring.url '/resources/js/vocabulary.js' />"></script>
<script src="<@spring.url '/resources/js/jjenglish.js' />"></script>



<div id="modaljjenglish" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">This feature allows you to create groups in jjenglish</h4>
            </div>
            <div class="modal-body">
                <h1>How many groups you want to create?</h1>
                <button id="btnOne" class="btn btn-success" disabled>1</button>
                <button id="btnTwo" class="btn btn-warning" disabled>2</button>
                <button id="btnThree" class="btn btn-danger" disabled>3</button>
            </div>

            <div class="tablesdiv"></div>
            <h3>Send words to jjenglish</h3>
        </div>
    </div>
</div>


</html>
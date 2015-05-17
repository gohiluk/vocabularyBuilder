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

    <title>Starter Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <!-- Custom styles for this template -->
    <link rel="stylesheet" type="text/css" href="<@spring.url '/resources/css/starter-template.css' />">
    <link rel="stylesheet" type="text/css" href="<@spring.url '/resources/css/signin.css' />">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>


<div style="width:100%; height:46px; color:white">
    <img src="<@spring.url '/resources/img/owl2.jpg'/>" style="width:35px; height:38px; margin-left:140px; margin-top:3px" />
    <button id="showmenu" class="btn btn-success" style="height:46px; float:right; margin-top:0px; width:100px">Menu
    </button>
</div>


<div class="logindiv">

    <form class="form-signin" action="<@spring.url '/j_spring_security_check' />" method="POST">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="text"  name="j_username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password"  name="j_password" id="inputPassword" class="form-control" placeholder="Password" required>
        <input type="hidden"
               name="${_csrf.parameterName}"
               value="${_csrf.token}"/>
        <div class="checkbox">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>

</div> <!-- /container -->



<div class="menu">
    <ul class="navigator">
        <li><a>Zaloguj</a></li>
        <li><a>Zglos blad</a></li>
    </ul>
</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<script src="<@spring.url '/resources/js/vocabulary.js' />"></script>
<script src="<@spring.url '/resources/js/jjenglish.js' />"></script>


</html>
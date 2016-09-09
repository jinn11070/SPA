<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Welcome to BASS</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
	<asset:stylesheet src="application.css"/>
	<asset:stylesheet src="auth.css"/>
</head>
<body>

  <div class="grails-logo-container">
    <asset:image src="logo_login.png" class="grails-logo"/>
  </div>

  <div id="login">
    <div class="inner">
      <div class="fheader">login 하라냐</div>
      <form action="/" method="POST" id="loginForm" class="cssform" autocomplete="off">
        <p>
          <label for="username">Username:</label>
          <input type="text" class="text_" name="username" id="username"/>
        </p>

        <p>
          <label for="password">Password:</label>
          <input type="password" class="text_" name="password" id="password"/>
        </p>

        <p id="remember_me_holder">
          <input type="checkbox" class="chk" name="remember-me" id="remember_me" />
          <label for="remember_me">Remember me</label>
        </p>

        <p>
          <input type="submit" id="submit" value="Login"/>
        </p>
      </form>
    </div>
  </div>

	<div class="footer" role="contentinfo"></div>
</body>
</html>

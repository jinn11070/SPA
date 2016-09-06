<!doctype html>
<html lang="en" class="no-js">
<head>
  %{--<meta name="layout" content="main"/>--}%
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>Welcome to BASS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

  <asset:stylesheet src="bootstrap.css?compile=false" />
  <asset:stylesheet src="grails.css?compile=false" />
  <asset:stylesheet src="application.css?compile=false" />

  <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>

  <div class="grails-logo-container">
    <asset:image src="logo_login.png" class="grails-logo"/>
  </div>

  <div id="login">
    <div class="inner">
      <div class="fheader">login 하라냐</div>
      <form action="/secure/main" method="POST" id="loginForm" class="cssform" autocomplete="off">
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
  <script type="text/javascript" src="/assets/jquery-2.2.0.min.js?compile=false" ></script>
  <script type="text/javascript" src="/assets/bootstrap.js?compile=false" ></script>
  <script type="text/javascript" src="/assets/application.js?compile=false" ></script>
</body>
</html>

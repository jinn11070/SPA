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
	<asset:stylesheet src="login.css"/>
</head>
<body>
    <div>
      <div id="login">
        <asset:image src="logo_login.png" class="grails-logo"/>
        <div class="inner">
          <h3>Big data Archiving and Searching System</h3>
          <h5 class="fheader">Always find the better value of your data</h5>
          <form action='${postUrl}' method="POST" id="loginForm" class="cssform" autocomplete="off">
            <ul class="align-row">
                <li>
                    <p class="form-group">
                        <input type="text" class="form-control text_" name="username" id="username" value="${username}" placeholder="ID" required="" />

                    </p>

                    <p class="form-group">
                        <input type="password" class="form-control text_" name="password" id="password" placeholder="Password" />
                    </p>

                    <p id="remember_me_holder" class="checkbox">
                        <label for="remember_me">
                            Remember<input type="checkbox" class="chk" name="remember-me" id="remember_me" <g:if test='${hasCookie}'>checked='checked'</g:if>/>
                        </label>
                    </p>
                </li>
                <li>
                    <p>
                        <input type="submit" id="submit" value="Sign In"/>
                    </p>
                </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
	<div class="footer" role="contentinfo">
        <div id="footerMenu">
            <label id="footerMenuLanguage">Language&nbsp;&nbsp;</label>
            <select id="selectLanguage"><option selected>English</option></select>
        </div>

        <div id="copyright">
            <ul>
                <li id="copyrightText">Copyright(C) 1999-2015 <a href="http://www.Datastreams.co.kr" target="_blank">www.Datastreams.co.kr</a> All Rights Reserved.&nbsp;&nbsp;
                    <span id="contactDS">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact with</span></li>
                <li id="copyrightLogo"></li>
            </ul>
        </div>
    </div>
</body>
</html>

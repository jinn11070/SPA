<!doctype html>
<html lang="en" class="no-js">
<head>
    %{--<meta name="layout" content="main"/>--}%
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <asset:stylesheet src="bootstrap.css?compile=false" />
    <asset:stylesheet src="grails.css?compile=false" />
    <asset:stylesheet src="main.css?compile=false" />
    <asset:stylesheet src="mobile.css?compile=false" />
    <asset:stylesheet src="application.css?compile=false" />

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>
    <content tag="nav">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Application Status <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#">Environment: ${grails.util.Environment.current.name}</a></li>
                <li><a href="#">App profile: ${grailsApplication.config.grails?.profile}</a></li>
                <li><a href="#">App version:
                    <g:meta name="info.app.version"/></a>
                </li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Grails version:
                    <g:meta name="info.app.grailsVersion"/></a>
                </li>
                <li><a href="#">Groovy version: ${GroovySystem.getVersion()}</a></li>
                <li><a href="#">JVM version: ${System.getProperty('java.version')}</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Reloading active: ${grails.util.Environment.reloadingAgentEnabled}</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Artefacts <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#">Controllers: ${grailsApplication.controllerClasses.size()}</a></li>
                <li><a href="#">Domains: ${grailsApplication.domainClasses.size()}</a></li>
                <li><a href="#">Services: ${grailsApplication.serviceClasses.size()}</a></li>
                <li><a href="#">Tag Libraries: ${grailsApplication.tagLibClasses.size()}</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Installed Plugins <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <g:each var="plugin" in="${applicationContext.getBean('pluginManager').allPlugins}">
                    <li><a href="#">${plugin.name} - ${plugin.version}</a></li>
                </g:each>
            </ul>
        </li>
    </content>

    <div class="svg" role="presentation">
        <div class="grails-logo-container">
            <asset:image src="grails-cupsonly-logo-white.svg" class="grails-logo"/>
        </div>
    </div>

    <div id="login">
        <div class="inner">
            <div class="header">login 하라냐</div>
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

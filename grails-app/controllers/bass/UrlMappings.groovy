package bass

class UrlMappings {

    static mappings = {
		"/$controller/$action?/$id?(.$format)?" {
			constraints {
				// apply constraints here
			}
		}

        "/"(controller:"management")
        "/management/userManagement"(controller:"management")
        "/management/groupManagement"(controller:"management")
        "/dataAnalysis/queryEditor"(controller:"management")
        "/dataAnalysis/dashboard"(controller:"management")

        //"/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}

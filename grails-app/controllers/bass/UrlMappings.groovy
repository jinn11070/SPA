package bass

class UrlMappings {

    static mappings = {
		"/$controller/$action?/$id?(.$format)?" {
			constraints {
				// apply constraints here
			}
		}

//        "/"(view:"/index")
        "/"(controller:"management")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}

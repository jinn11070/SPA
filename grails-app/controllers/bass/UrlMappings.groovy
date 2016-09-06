package bass

class UrlMappings {

    static mappings = {
        /*"/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }*/

        "/index"(view:"/index")
        "/"(view:"/login/auth")
        "/secure/main"(view:"/secure/main")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}

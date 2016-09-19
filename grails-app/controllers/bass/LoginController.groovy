package bass

import grails.plugin.springsecurity.SpringSecurityUtils

class LoginController {
	def authAjax() {
		def message = ""

		response.setHeader 'Location', SpringSecurityUtils.securityConfig.auth.ajaxLoginFormUrl
		render status: 401, contentType: "application/json", {
			message = "You are not authorized for this page"
		}
	}
}

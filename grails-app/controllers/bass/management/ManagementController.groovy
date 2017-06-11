package bass.management

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class ManagementController {
	def springSecurityService

	def index() {
		println "class ManagementController {"
		println springSecurityService.currentUser.username
	}
}

package bass.user

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import grails.transaction.Transactional

@Secured(['ROLE_ADMIN'])
class UserController {
	def list() {

		def userList = User.list()

        render(text: userList as JSON, contentType: "application/json")
        return
	}

	@Transactional
	def create() {


		render(text: userList as JSON, contentType: "application/json")
		return
	}
}

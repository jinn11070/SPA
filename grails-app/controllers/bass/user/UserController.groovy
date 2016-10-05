package bass.user

import grails.converters.JSON
import grails.transaction.Transactional

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

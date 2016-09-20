package bass.user

import grails.converters.JSON
import grails.transaction.Transactional

class UserController {
	def list() {

		def userList = User.list()

		if (userList == null) {
			render 'null'
			return
		}

		/*def jsonUserList = userList as JSON

		userList = new JsonSlurper().parseText(jsonUserList.toString())

		for (user in userList) {
			user.contents = user.contents.sort { a, b -> a.name <=> b.name }
		}*/

		println userList as JSON
		render(text: userList as JSON, contentType: "application/json")
		return
	}

	@Transactional
	def create() {


		render(text: userList as JSON, contentType: "application/json")
		return
	}
}

package bass.user

import grails.converters.JSON

class UserController {
	def getList() {

		println "eeee"
		def userList = User.list()

		if (userList == null) {
			render 'null'
			return
		}

		println userList as JSON
		render(text: userList as JSON, contentType: "application/json")
		return
	}
}

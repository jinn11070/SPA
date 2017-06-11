package bass

import bass.user.User
import jdk.nashorn.internal.parser.JSONParser

/**
 * Created by Jung Soo-jin on 2016-09-06.
 */
class BassController {
	def main() {
	}
	def list() {
		println "22@@@@@@@"
		def userList = User.list()

		println userList as JSONParser

		render userList
		return
	}
}

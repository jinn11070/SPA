import bass.user.Authority
import bass.user.User
import bass.user.UserAuthority

class BootStrap {

    def init = { servletContext ->

		def startup = User.findByUserId("admin")

		if (startup == null) {
			def adminAuthority = new Authority(authority: 'ROLE_ADMIN').save()
			def normalAuthority = new Authority(authority: 'ROLE_NORMAL').save()
			def inactiveAuthority = new Authority(authority: 'ROLE_INACTIVE').save()

			def admin = new User(
					userId: 'admin',
					password: 'adminme',
					username: 'Admin',
					mail: 'admin@datastreams.co.kr',
					phone: '010-151-1313',
					theme: 'white',
					registeredDate: new Date(),
					lastLoginDate: new Date()
			).save()

			UserAuthority.create admin, adminAuthority

			UserAuthority.withSession {
				it.flush()
				it.clear()
			}

			assert User.count() == 1
			assert Authority.count() == 3
			assert UserAuthority.count() == 1
		}
    }
    def destroy = {
    }
}

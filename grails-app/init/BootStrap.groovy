import bass.user.Authority
import bass.user.User
import bass.user.UserAuthority

class BootStrap {

    def init = {

        def adminAuthority = new Authority(authority: 'ROLE_ADMIN').save()
        def normalAuthority = new Authority(authority: 'ROLE_NORMAL').save()
        def inactiveAuthority = new Authority(authority: 'ROLE_INACTIVE').save()

        def admin = new User(username: 'admin', password: 'admin00').save()

        UserAuthority.create admin, adminAuthority

        UserAuthority.withSession {
            it.flush()
            it.clear()
        }

        assert User.count() == 1
        assert Authority.count() == 3
        assert UserAuthority.count() == 1
//        servletContext ->
    }
    def destroy = {
    }
}

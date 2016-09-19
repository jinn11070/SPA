package bass.user

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='userId')
@ToString(includes='userId', includeNames=true, includePackage=false)
class User implements Serializable {

	private static final long serialVersionUID = 1

	transient springSecurityService

	String userId
	String password
	String username
	String mail
	String phone
	String theme
	Date registeredDate
	Date lastLoginDate

	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	Set<Authority> getAuthorities() {
		UserAuthority.findAllByUser(this)*.authority
	}

	def beforeInsert() {
		encodePassword()
	}

	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

	static transients = ['springSecurityService']

	static constraints = {
		userId blank: false, size: 4..50, unique: true
		password blank: false, password: true
		username blank: false
		mail blank: false, email: true
		phone blank: false
		theme blank: false
		registeredDate nullable: true
		lastLoginDate nullable: true
	}

	static mapping = {
		password column: '`password`'
	}
}

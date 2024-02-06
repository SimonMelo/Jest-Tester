function passwordStrong(password) {
    if (password.length < 8) return false

    const hasUpperCase = /[A-Z]/.test(password)

    const hasLowerCase = /[a-z]/.test(password)

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)

    const hasNumber = /\d/.test(password)

    return hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber
}

module.exports = passwordStrong
const passwordStrong = require('../js/password-strong')

test('The password is strong enough', () => {
    expect(passwordStrong("Bananinha@123")).toBe(true)
})
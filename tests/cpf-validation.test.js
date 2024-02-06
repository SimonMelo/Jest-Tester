const validationCpf = require('../js/cpf-validation')

test('Cpf is valid', () => {
    expect(validationCpf('30030030030')).toBe(true)
})

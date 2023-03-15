import { emailEmpty } from './validatorsform.js';

describe('validators utils', () => {
  it('should return if email is empty', () => {
    expect(emailEmpty()).toBe('*Este campo é obrigatório');
  })
  it('should return an error with invalid parameter', () => {
    expect(emailEmpty('brunaemail')).toBe('*Este campo precisa ser um e-mail valido')
  })
  it('should return true when a parameter is passed correctly', () => {
    expect(emailEmpty('bruna@gmail.com')).toBe(true)
  })
});


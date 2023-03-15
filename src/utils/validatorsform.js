export function validateName (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }
  const regex = /^[a-zA-Z\s]*$/;
  if (!regex.test(value)) {
    return 'Este campo precisa conter apenas letras e espaços';
  }
  return true
}

export function emailEmpty (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)
  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }
  return true
}
export function phoneNumber(value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }
  const regex = /^\([1-9]{2}\) [2-9][0-9]{3,4}\[0-9]{4}$/
  if (!regex.test(value)) {
    return 'Por favor, insira um número de telefone válido em formato (99) 9999-9999'
  }
  return true
}

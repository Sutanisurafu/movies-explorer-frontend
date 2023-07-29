import { nameRegex, emailRegex } from "./constants"


export const nameValidate = (name) => {
  return nameRegex.test(name)
}

export const emailValidate = (email) => {
  return emailRegex.test(email)
}
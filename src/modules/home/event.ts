import {
  messageShow,
  changePasswordShow,
  personalInfoShow
} from '.'
export const message = () => {
  messageShow.value = true
}
export const changePassword = () => {
  changePasswordShow.value = true
}
export const personalInfo = () => {
  personalInfoShow.value = true
}
export const quit = () => {
  sessionStorage.clear()
  localStorage.clear()
}

export default {
  message,
  changePassword,
  personalInfo,
  quit
} as {
  [s: string]: ()=>void
}
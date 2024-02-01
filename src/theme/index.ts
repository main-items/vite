
const serveFiles: any = import.meta.glob('./../theme/**/*.theme.ts', { eager: true })
const Interface: any = {}
Object.keys(serveFiles).forEach((key) => {
  const urlArr = key.split('/')
  const apiKey= urlArr[urlArr.length-1].split('.')[0]
  Interface[apiKey] = serveFiles[key].default
})

export default Interface

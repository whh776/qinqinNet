export const getStorage = name => {
  return localStorage.getItem(name) && JSON.parse(localStorage.getItem(name)) || []
}

export const setStorage = (name,data) => {
  localStorage.setItem(name,JSON.stringify(data))
} 
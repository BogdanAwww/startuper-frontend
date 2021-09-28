export const cookie = {
  set: (name, value) => {
    document.cookie = `${name}=${value} ; samesite=strict`
  },
  get: (name) => {
    if (typeof window !== 'undefined') {
      const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      ))
      return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined
    }
  },
  delete: (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00`
  }
}

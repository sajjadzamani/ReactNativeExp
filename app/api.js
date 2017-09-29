const rootUrl = 'https://api.imgur.com/3/gallery/t/'
const apiKey = '8755634e94b4594'

module.exports = {
  get (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then((response) => {
      return response.json()
    })
  }
}

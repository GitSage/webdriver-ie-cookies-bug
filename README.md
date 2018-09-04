# Reproduction: Webdriver deleteAllCookies() hangs in IE

1. `npm install`
2. `npm run serve`
3. `npm run test`

### Verbal description of the problem:

1. In Internet Explorer 11,
2. Go to a website,
3. Open a popup,
4. Switch to the popup,
5. Try to delete cookies,
6. Webdriver hangs indefinitely.
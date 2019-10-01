
## Animation movies database

> Website that allows users to search animated movies and get details from the TMDb movies database.

> Right now support only polish language.

> This is my Learn to Code project.

![Screencast](demo.gif)

## Demo

**[Online](https://baza-bajek.herokuapp.com/)**

## Installation
1. Create account on: https://www.themoviedb.org
2. Get your TMDB API KEY: https://developers.themoviedb.org/3/getting-started/introduction
3. Clone or download the repo.
4. Create folder `config`
5. Create file `data.js` inside `config` folder.
6. Open file `data.js` and add the following code:
```
module.exports = {
  key: 'YOUR_TMDB_API_KEY',
}
```
7. Assuming that you have at least [Node 10 LTS](https://nodejs.org/en/) installed, use npm to install:
`npm install`
8. Once the installation is done, you can run the project:
`npm start`
9. Open http://localhost:3000 to view in the browser/

## TODO List

- [x] bookmark searches in browser
- [ ] popular movies in search bar appears
- [x] top movies
  - [ ] add more results and pagination
- [x] make website responsive
- [ ] create login system
- [ ] create user DB
- [ ] user should be able to create accounts
- [ ] create favourites movies function
  - allow user to store their fav movies in their acc
- [ ] add additional languages to site


## Technologies and tools used

* TMDb API
* HTML5
* CSS3
* BEM
* JSON
* EJS
* JavaScript
* Node.js
* Express

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**



# Recipe Organizer

<div>
<img src='https://img.shields.io/github/license/kcushing1/Recipe-Organizer'>  
<img src='https://img.shields.io/github/repo-size/kcushing1/Recipe-Organizer'>  
<img src='https://img.shields.io/github/languages/top/kcushing1/Recipe-Organizer'>
<img src='https://img.shields.io/github/last-commit/kcushing1/Recipe-Organizer'>
</div>

### All the recipes you've been dying to try - All of your favorites - All in one convenient place.
<br>

## Table of Contents  
* [Features](#Features)  
* [Installation](#Installation)  
* [Usage](#Usage)  
* [Technologies](#Technologies-Used)
* [Contributing](#Contributing)  
* [Reflection](#Reflection)
* [Future Scope](#Future-Scope)  
* [Questions](#Questions)

## Features
- Secure Login using Passport.js
- User/recipe info stored in database using Sequelize
- Recipe images retrieved automatically via Unsplash API

## Installation
1. Install npm packages:
    ```
    npm i express sequelize passport
    ```
2. Be sure to update `config.json` with your development database credentials
3. Create (empty) database `recipeEZ_db` in your preferred database tool  using provided `schema.sql`
4. Run `node server` in terminal and open `localhost:8080` (or your configured server port) in your browser

## Usage
<!-- Currently deployed with [Heroku](https://recipeez.herokuapp.com) -->

1. Login with username & password, or sign up for a free account
2. Click `Add Recipe` button to enter a new recipe reference
3. Fill out form with details/notes/rating and save to your collection
4. Search your collection for a specific source or meal category
5. Easily update or delete any recipe with `Edit`/`Delete` buttons in recipe view.

<!-- ![Demo](./assets/images/demo.gif) -->

## Technologies Used
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Passport.js](http://www.passportjs.org/)
- [Unsplash Image API](https://unsplash.com/developers)

## Contributing
Contributions welcome!

1. Fork this repository  
2. Create a new branch  
3. Commit/push your changes  
4. Create a new pull request  

## Reflection
- 

## Future Scope
- Add option for user to upload custom images for their recipes
- Update database to store recipe ingredients/instructions

## Questions  
If you have any questions, feel free to create an [Issue](https://github.com/kcushing1/Recipe-Organizer/issues)

## License
This project is [MIT](https://github.com/kcushing1/Recipe-Organizer/blob/main/LICENSE) licensed.  

---

<div align="center" style="display:flex; align-items:center">

## Kasey Cushing &nbsp;&nbsp; <br> [![github](./public/images/github.svg)](https://www.github.com/kcushing1) [![linkedin](./public/images/linkedin.svg)](https://www.linkedin.com/in/kasey-cushing-053bbab1)
## Michael Hernandez &nbsp;&nbsp; <br> [![github](./public/images/github.svg)](https://www.github.com/MH4454) [![linkedin](./public/images/linkedin.svg)](https://www.linkedin.com/in/michael-hernandez-303a8ba3)
## Seth Kalback &nbsp;&nbsp; <br> [![github](./public/images/github.svg)](https://www.github.com/skalback) [![linkedin](./public/images/linkedin.svg)](https://www.linkedin.com/in/seth-kalback-a067b091)
## Joel Dore &nbsp;&nbsp; <br> [![github](./public/images/github.svg)](https://www.github.com/JoelDore) [![linkedin](./public/images/linkedin.svg)](https://www.linkedin.com/in/joeldore)
## Jacob Krueger &nbsp;&nbsp; <br> [![github](./public/images/github.svg)](https://www.github.com/GeminiTrinity) [![linkedin](./public/images/linkedin.svg)](https://www.linkedin.com/in/jacobmkrueger)

</div>
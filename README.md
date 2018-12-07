[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Front End Repo
https://github.com/LightCloud36/marvel-comics

# Tech

* CSS
* JSX
* HTML5
* Axios
* Express
* MARVEL API


# The Application
A MARVEL comics encyclopedia created with React and Express Mong DB that lets you add characters to your favorites list where you can learn everything about the charcaters from their orgins to what comics they appear in using MARVEL COMIC's api.

# The Process


## API Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users.signUp`    |
| POST   | `/sign-in`             | `users.signIn`    |
| DELETE | `/sign-out`            | `users.signOut`   |
| PATCH  | `/change-password`     | `users.changePw`  |
| GET    | `/`                    | `characters.index`|
| POST   | `/favorites`           | `favorites.create`|
| GET    | `/favorites`           | `favorites.index` |
| DELETE | `/favorites/:id`       | `favorites.delete`|
| GET    | `/marvel-api`          | `axios.index`     |

# Unsolved Issues
Styling: I want to use reactstrap to create character layout cards where the infomation being returned from MARVEL's api will live. Still need to style the site itself to look mor inline from something you would see if you want to MARVEL.com.


Version 2: I want to have character cards that flip to show more  info about the character with links that dig into even more info about the character.

# Entity Relationship Diagram
![Imgur](https://imgur.com/FKd6HU1.jpg)

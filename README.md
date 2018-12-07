[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Front End Repo
https://github.com/LightCloud36/marvel-comics

# Tech

* CSS
* JSX
* HTML5
* Axios
* Express
* ReactStrap
* MARVEL API


# The Application
During this project I spent alot of time trying to figure out what I actually wanted to do. So while I was falling a sleep on my phone in bed I stumbled across the MARVEL API! I was always a huge fan of their comics and charcaters in genral that I jumped at the chance to make an application realted to something I love. After spending time with MARVEL's great API docs I was able to get an idea of what the project was going to be and thus the encyclopedia was born.


I wanted the user to be able to see MARVEL characters as soon as they visit the home page. I didn't want to limit the user's interaction with the application before signing in, so I went with the try before you buy method that allowed user's to use 95% of the application before ever creating an account and signing in. I did this by calling MARVEL's API character index as soon as the homepage booted up, this allowed user's to visually see the charcaters they could have access too once they sign in.


I wanted to keep user functionality simple for version 1.0 of the application by only letting user's add characters to their favorites table. I accomplished this by having an add to favorites button that stores the MARVEL characters comic ID in an array and then when the user wants to view their characters, the characters ID's are passed to marvels api that then renders the characters info into the favorite characters list.

Heading into Version 2.0 I want to style the application more in line with MARVEL's own site, as well as add more functioinality that allows user's to get even more info about the characters.

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

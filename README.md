# GameTradr-Client

* A site where users can post public listings for games they want to trade.
* Users indicate what game they are looking to trade and what they will accept in
return.
* Users can make offers based on existing listings, and the owner of the listing
can choose to accept or decline their offer
  * Accepting an offer will cause all other offers on the same listing to be declined.
* Users can check on the status of their offers at any time by going to the offers
section of the site.
* Users can delete pending listings and offers. They cannot delete listings or
offers that have been completed.

The site uses the following services to interact with the API:
* Listing service
* Auth service
* Offer service
* Game service

In addition, the site uses an Auth guard to prevent users from accessing portions
of the site that require authentication.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## URLS
API:
-Deployed: https://sleepy-dawn-70018.herokuapp.com/
-Repo: https://github.com/buffalo0707/GameTradr-API

Client:
-Deployed: https://buffalo0707.github.io/GameTradr-Client/home
-Repo: https://github.com/buffalo0707/GameTradr-Client

## User Stories

Game Trading Platform


* [x] Authentication Epic
    * [x] As a new user, I want to be able to sign up to use the site so that I can login
    * [x] As a registered user, I want to be able to login to site so that I can interact with Monsters
    * [x] As a user, I want to be able to change my password so that I can keep my account secure
    * [x] As a user, I want to be able to sign out so that I am no longer signed in
    * [x] As a user, I want the sign out and change password buttons to be hidden until I have logged in so that I am not confused
    * [x] As a user, I want the sign-in and sign-up buttons to be hidden after I login successfully so that I am not confused
    * [x] As a user, I want to see an error message fire if I was unable to sign-in so Iknow to try again
    * [x] As a user, I want to see an error message fire if I was unable to sign-up so Iknow to try again
    * [x] As a user, I want to see a message indicating that my sign-up request was successful so I know that I can now sign-up
    * [x] As a user, I want to see an error message fire if I was unable to change my password so I know to try again
    * [x] As a user, I want to see a message indicating that my password change was successful so I know what happened
* [ ] Game Trading Epic
    * [x] As a user, I want to be able to add a game that I am willing to trade
    * [x] As a user, I want to add a list of games that I would accept in exchange for a game that I am willing to trade
    * [x] As a user, I want to be able to browse the games that other users are willing to trade
    * [x] As a user, I want to be able to see what games other users want in exchange for the games they are willing to trade
    * [ ] As a user, I want to be able to see information about games that are available for trade
    * [ ] As a user, I want to see the address where I should send my game after accepting a trade
    * [ ] As a user, I want to be able to search active listings
    * [ ] As a user, I want to see the status of my offers
    * [x] As a user, I want to be able to offer a trade to another user
* [ ] Automatic Matching Epic
    * [ ] As a user, I want to be automatically matched with another user when I post a game that I want to trade and the other user wants to trade a game that matches one that I am willing to accept
    * [ ] As a user, I want to be able to accept or decline the automatic match
* [ ] User Review Epic
    * [ ] As a user, I want to be able to rate other users after completing a game exchange
    * [ ] As a user, I want to be able to see other users’ ratings

## Wireframe

Rough draft of wireframe:
https://goo.gl/photos/mebK75VDvfWHM6Ax6

## Development Process

### What went well
The goal for this project was to challenge myself by using a third party api
as well as Angular 2. I enjoyed working with Angular and hope to use it again in
the future. I found that the components, services and guards in Angular 2 helped
with separation of concerns and to keep code more modular.

### What didn't go so well
-Scope: I bit off more than I could chew for this project. The UX from was very
complicated and required many different scenarios to be accounted for. As a result,
I did not complete all desired functionality. What was produced, however, is high
quality andf is functioning very well
-Keeping code DRY: In an effort to finish on time, I did not reuse code as I should
have and ended up repeating code.

# Project Name
SoundBirds

## Description

Digital platform that matches people according to their taste in music.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Landing** - As a user I want to be able to access the landing page so that I see what the app is about and be able to login or signup
-  **Signup:** As a user I want to sign up on the webpage so that I can fill my profile and find matches according to my music taste
-  **Login:** As a user I want to log in on the webpage so that I can see my dashboard, check incoming messages and find new matches according to my music taste
- **/:user/dashboard** - As a user I want to see my selected playlist, add songs to my playlist, check incoming messages and find new matches according to my music taste
- **/:user/dashboard/music-search** - As a user I want to be able to find my favourite artists and songs and add them to my selected playlist.
- **/:user/dashboard/songbird-search**  - As a user I want to be able to see all people with similar music taste I have matched and saved into
- **/:user/dashboard/songbird-squad**  - As a user I want to be able to find people with matching music taste.
- **/:user/dashboard/:songbirdId**  - As a user I want to be able to see a playlist and a profile of a person with matching music taste
- **/:user/mailbox**  - As a user I want to be able to see all people I have messaged or have messaged me.
- **/:user/:messageId**  - As a user I want to be able to see conversation with one user and be able to send her/him a message.
- **edit profile** - As a user I want to be able to edit mz profile to find new matches
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Loading** As a user I can want to be enterntained while waiting


## Backlog

- Introducing authetification with Spotify Account
- Two users, logged in with their Spotofy accounts being able to make collaborative playlist in iFrame
  
# Client

## Routes

- /Landing
- /auth/signup - Signup form
- /auth/login - Login form
- /:user/dashboard - dashboard
- /:user/edit - Edit profile
- /:user/dashboard/music-search - Look for music you like
- /:user/dashboard/songbird-search - Look for people that match your playlist
- /:user/dashboard/:songbirdId - Look at individual profile's and playlist of people that match your music taste
- /:user/mailbox - See all messages you have received
- /:user/messageId - See all messages you have received from one user
- 404

## Pages

- Landing Page (public)
- Sign in Page (private)
- Log in Page (private)
- Edit Profile (private)
- Dashboard (private)
- Music Search (private)
- Songbird Search (private)
- Songbird Profile (private)
- Mailbox (private)
- Invidividual Mailbox (private)
- 404 Page (public)

## Components

- Nav
- Sign in form
- Sign out form
- Dashboard
- Profile card
- Playlist component
- Music Track component
- Mailbox list
- Mailbox individual

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Find music
  - artist.search()
  - song.search()
  - song.addFavorite(id)
  - song.removeFavorite(id) 
- Find match
  - songbird.search()
  - songbird.detail(id)
  - songbird.addFavorite(id)
  - songbird.removeFavorite(id) 
- Messaging
  - mailbox.all()
  - message.detail(id)
  - message.create(data)
  - message.delete(id)
  - songbird.addFavorite(id)
  

# Server

## Models

user model

```
username - String // required
email - String // required & unique
password - String // required
image - String // required
lifemoto - String // max 140 characters
mymusic - [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'music'}]
},

```
music model

```
artist - String // required
track - String
genre - String

```

message model

```
body: String
 receiver: {type: mongoose.Schema.Types.ObjectId
 ref: 'user'}
 sender: {type: mongoose.Schema.Types.ObjectId
 ref: 'user'}
```

## API Endpoints/Backend Routes

- POST /auth/signup
  - body:
    - username
    - email
    - password
    - imageUrl
    - lifemoto
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /:userId/edit
    - username
    - email
    - password
    - imageUrl
    - lifemoto
- POST /:userId/music/edit
    - mymusic
- GET/:userId/music-search
- GET/:userId/songbird-search
- GET/:userId/songbirdId-profile 
    - username
    - imageUrl
    - lifemoto
    - mymusic
- GET/:userId/mymessages
- GET/:userId/:messageId
- POST/:userId/:messageId
- DELETE /:userId/mymusic
  - body: (empty)


  

## Links


### Wireframe

https://www.figma.com/file/zMGVMB4YxT6jQuzI442w88/SoundBirds

### Trello/Kanban

https://trello.com/b/rOWAkfpp/soundbirds /// tbd

### Git

https://github.com/alekstana/soundbirds-client/tree/master
https://github.com/alekstana/soundbirds-server/tree/master

[Deploy Link](http://heroku.com) ///tbd

### Slides

The url to your presentation slides

https://trello.com/b/rOWAkfpp/soundbirds
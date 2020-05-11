- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Rippertoire** is the web app that every guitarist needs to make sure they've got the material ready for upcoming gigs. It's not easy keeping hours of music and lyrics properly inventoried in your noggin, so I've developed this app to keep track of the data._

### Core Features

The most challening part about memorizing hours worth of music is the thousands of words that go along with it. On Rippertoire, musicians can maintain lists 

  - Past - for songs that are an active part of your repertoire, and need no brushing up on.
  - Present - for works in progress,
  - Future - for songs that you'd like to learn,

Musicians can store the lyrics to the songs that they're learning OR writing in any of the given lists.
For each song, a user should be able to input the Artist and title.

Future future features please refer to the [Post-MVP](#Post-MVP) section .

### Goals

- _Users should be able to tag each song as:_
  - _an 'original' or a 'cover'_
  - Past, Present, or Future

### Team

Created, designed, and developed by [JP Meyers](https://github.com/johnpmeyers20) for the General Assembly Software Engineering Immersive (February '20 cohort) Unit 4 Project.

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Digital assets stored  on [Imgur](). All other material that surfaces throughout the course of the project will be cited accordingly.

<br>

## MVP

### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API** built on a **Ruby on Rails** server which contains at least 1 user, and 2 other tables. 
  - It must feature 2 pairs of associated tables (1:m _or_ m:m). 
  - Models must be defined for database interaction. 
- The site must feature full-CRUD (`index`, `show`, `create`, `update`, `delete`) between the 2 non-user tables AND partial-CRUD (`create`, at least) for the user table.
- Authentication is necessary, utilizing a **JWT**.

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.

_^ Unless it makes sense for that information to be restricted to particular users._

### Styling <!-- omit in toc -->

- Styled with CSS using grid and flexbox.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.

### Procedural <!-- omit in toc -->

- Initialize a **git repo on Github**, with a link to your hosted project.
- Have **frequent commits**, making a _robust_ commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](https://i.imgur.com/UQPRqK0.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Edit.jsx
      |__ Header.jsx
      |__ HeroArtistList.jsx
      |__ Login.jsx
      |__ Main.jsx
      |__ Register.jsx
      |__ Section.jsx
      |__ SectionSongList.jsx
      |__ Song.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|     Component     |    Type    | state | props | Description                                                      |
| :---------------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Edit              | functional |   n   |   p   | _The header will contain the navigation and logo._               |
| Header            | functional |   n   |   p   | _The navigation will provide a link to each of the pages._       |
| HeroArtistList    |   class    |   n   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Login             | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Main              | functional |   n   |   y   | _The footer will show info about me and a link to my portfolio._ |
| Register          | functional |   y   |   n   | _The footer will show info about me and a link to my portfolio._ |
| Section           | functional |   n   |   y   | _The footer will show info about me and a link to my portfolio._ |
| SectionSongList   | functional |   n   |   y   | _The footer will show info about me and a link to my portfolio._ |
| Song              | functional |   y   |   y   | _The footer will show info about me and a link to my portfolio._ |

<!-- #### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br> -->

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.
![Dummy Link](https://i.imgur.com/UItGvxI.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

#### Data Heirarchy

> Use this section to display the expected endpoints from your API.

<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br> 

***

> This section is not necessary for your pitch!

## Post-MVP

- _After MVP is met:_
  - _Users should be able to add the key to songs_
  - _Users should be able to add chord progressions_
  - _Users should be able to link to YouTube videos for reference_
  - _Users should be able to track current bpm speeds of play for leads_
  - _Users should be able to input goals for playing_
  - _Users should be able to select from a list of instruments to indicate what they are learning the song on_


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

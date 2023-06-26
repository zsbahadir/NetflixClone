# React Native Netflix Clone (iOS)

This is a Netflix clone built with React Native, focused on the iOS platform.

•	For API integration, React Query, 
•	React Hook Form for login validation, 
•	React Native Navigation for navigation, 
•	React Native Vector Icons for icons,
•	React Native Video along with for video playback 
•	React Native Linear Gradient, 
•	Babel-plugin-module-resolver

 were used.

No external CSS library was used. The styling was implemented from scratch.

The APIs used in this project are obtained from TMDB (https://developer.themoviedb.org/).

The current version of the application is only for the iOS platform.

Under the `src` directory, you will find the `basic`, `screens`, and `store` folders.

The `basic` folder contains the components, constants, images, and the header section within the `sections` directory.

The `screens` folder contains the Login Screen, Who is Watching? Screen, Home Screen, and the Info-Screen-Modal page that displays information about a movie or TV series (implemented as a modal). Each screen has its own sections, which are located within the own `sections` directory.

The `store` folder contains the API calls and hooks.

Additionally, there are `Router` and `Provider` files.

The application starts with the Login Page validation.

Email: Zeynep@gmail.com
Password: 123

After successful login, the user is redirected to the "Who is Watching" screen.
Once a profile is selected, the user is redirected to the Home Screen. The name and image of the selected profile are displayed on the Home Screen.

On the Home Screen, the image and genres displayed in the Big Card change randomly. The icon in the "My List" button changes when pressed.

In the "Continue Watching" Section, the Movie API is used. Tapping on the "i" icon in the bottom left corner opens the information modal for the movie.

The "Top Rated TV Series" section uses the TopRated TV API. A Top 10 Red Card is displayed for the Top 10 TV series with a popularity of over 150,000. Tapping on the card opens the information modal for the TV series.

The Information Screen consists of six sections. The first section displays the trailer video of the selected movie or TV series (currently inactive). The second section contains the title and buttons, including the title of the film/TV series, year, duration for movies or number of seasons for TV series, and play/download buttons. The third section includes the description and icons related to the film or TV series. Tapping on the "My List" icon changes its appearance. The bottom section titled "Episodes" and "Similar" is currently under development.

The development process is still ongoing.
![image](https://github.com/zsbahadir/NetflixClone/assets/105489063/9af6c731-fb5a-47e9-b7fc-8c0a4327b43f)

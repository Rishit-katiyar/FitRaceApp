# FitRaceApp 🏃‍♂️🏃‍♀️

FitRaceApp is a fitness and racing competition app that allows users to create, join, and participate in races while tracking their progress in real-time. Whether you're running solo or competing with friends, FitRaceApp provides a fun and engaging platform to stay motivated and achieve your fitness goals.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Backend](#backend)
    - [Clone Repository](#clone-repository)
    - [Install Dependencies](#install-dependencies)
    - [Start Backend Server](#start-backend-server)
  - [Frontend](#frontend)
    - [Install Expo CLI](#install-expo-cli)
    - [Clone Repository](#clone-repository-1)
    - [Install Dependencies](#install-dependencies-1)
    - [Start Expo Server](#start-expo-server)
    - [Initialize React Native Project](#initialize-react-native-project)
- [Usage](#usage)
- [Backend Structure](#backend-structure)
- [Frontend Structure](#frontend-structure)
- [Troubleshooting](#troubleshooting)
  - [Backend Troubleshooting](#backend-troubleshooting)
  - [Frontend Troubleshooting](#frontend-troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

FitRaceApp is designed to make fitness more interactive and enjoyable by turning your regular workouts into exciting races with friends. Whether you're jogging in your neighborhood or cycling through the countryside, FitRaceApp allows you to create custom routes, invite friends to join your race, and track your progress in real-time. With features like live GPS tracking, leaderboards, and personalized challenges, FitRaceApp keeps you motivated and engaged every step of the way.

## Features

- **Create Races**: Design your own race routes using GPS and set custom start/end points.
- **Join Races**: Browse and join races created by friends or the FitRaceApp community.
- **Real-Time Tracking**: Track your progress in real-time using GPS, with live updates on distance, pace, and time.
- **Leaderboards**: Compete against friends and other users on global leaderboards.
- **Challenges**: Set personal fitness goals and receive challenges tailored to your fitness level.
- **Social Integration**: Share your race achievements on social media and connect with other users.
- **Customization**: Personalize your race experience with customizable avatars, race themes, and music playlists.

## Installation

### Backend

#### Clone Repository

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rishit-katiyar/FitRaceApp.git
   ```

#### Install Dependencies

2. **Navigate to the backend directory**:
   ```bash
   cd FitRaceApp/backend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

#### Start Backend Server

4. **Start the backend server**:
   ```bash
   npm start
   ```

### Frontend

#### Install Expo CLI

1. **Install Expo CLI globally**:
   ```bash
   npm install -g expo-cli
   ```

#### Clone Repository

2. **Navigate to the directory where you want to clone the repository**:
   ```bash
   cd <desired-directory>
   ```

3. **Clone the repository**:
   ```bash
   git clone https://github.com/Rishit-katiyar/FitRaceApp.git
   ```

#### Install Dependencies

4. **Navigate to the frontend directory**:
   ```bash
   cd FitRaceApp/frontend
   ```

5. **Install dependencies**:
   ```bash
   npm install
   ```

#### Start Expo Server

6. **Start the Expo server**:
   ```bash
   npm start
   ```

#### Initialize React Native Project

7. **Create a new React Native project**:
   ```bash
   npx react-native init RacingApp
   cd RacingApp
   ```

8. **Install required dependencies**:
   ```bash
   npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens @react-native-community/masked-view
   npm install axios
   ```

## Usage

1. **Register/Login**: Create a new account or login with your existing credentials.
2. **Create Race**: Design your race route, set start/end points, and invite friends to join.
3. **Join Race**: Browse available races and join one that suits your interests.
4. **Track Progress**: Start the race and track your progress in real-time using GPS.
5. **Compete**:

 Compete against other participants and climb the leaderboard to claim victory.
6. **Share**: Share your race achievements and personal bests on social media.

## Backend Structure

The backend of FitRaceApp follows a modular structure for better organization and scalability. Here's a breakdown of the directory structure:

```
FitRaceApp/
└── backend/
    ├── package.json
    ├── server.js
    ├── models/
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   ├── race.js
    │   └── user.js
    ├── controllers/
    │   ├── authController.js
    │   ├── raceController.js
    │   └── userController.js
    ├── middleware/
    │   └── authMiddleware.js
    └── config/
        └── index.js
```

### Explanation:

- **`package.json`**: Contains metadata about the backend and lists dependencies.
- **`server.js`**: Entry point of the backend application. Initializes the Express server and sets up routes and middleware.
- **`models/`**: Directory for database models. Defines the schema and methods for interacting with the database.
- **`routes/`**: Contains route definitions for different endpoints of the API.
- **`controllers/`**: Handles request/response logic for each route.
- **`middleware/`**: Contains custom middleware functions to intercept and modify requests/responses.
- **`config/`**: Configuration files, such as database connection settings and environment variables.

## Frontend Structure

The frontend of FitRaceApp is built using React Native and organized into screens, navigation, and reusable components. Here's a breakdown of the directory structure:

```
FitRaceApp/
└── frontend/
    ├── App.js
    ├── package.json
    ├── screens/
    │   ├── Auth/
    │   │   ├── LoginScreen.js
    │   │   └── RegisterScreen.js
    │   ├── Race/
    │   │   ├── CreateRaceScreen.js
    │   │   ├── JoinRaceScreen.js
    │   │   └── RaceProgressScreen.js
    │   └── Profile/
    │       └── UserProfileScreen.js
    ├── navigation/
    │   ├── AppNavigator.js
    │   ├── AuthNavigator.js
    │   └── MainNavigator.js
    └── components/
        ├── FormInput.js
        ├── Button.js
        ├── MapComponent.js
        └── RaceCard.js
```

### Explanation:

- **`App.js`**: Entry point of the frontend application. Initializes navigation and sets up the root component.
- **`screens/`**: Contains screen components for different parts of the app, organized into subdirectories based on functionality.
- **`navigation/`**: Handles navigation between screens using React Navigation.
- **`components/`**: Reusable UI components used across multiple screens.

## Troubleshooting

### Backend Troubleshooting

- **Port already in use**: If the backend server fails to start due to the port being already in use, try running on a different port:
  ```bash
  PORT=3001 npm start
  ```

### Frontend Troubleshooting

- **Expo CLI not found**: If you encounter an error stating "expo: command not found", reinstall Expo globally:
  ```bash
  npm install -g expo-cli
  ```

- **Dependencies not installed**: If dependencies fail to install, delete `node_modules` directory and `package-lock.json`, then reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

- **Expo server not starting**: If the Expo server fails to start, check if there are any conflicting processes running on port 19000 and kill them:
  ```bash
  sudo lsof -i :19000
  kill -9 <PID>
  npm start
  ```

## Contributing

Contributions are welcome! Whether it's bug fixes, new features, or improvements to documentation, your contributions help make FitRaceApp better for everyone. Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting your pull requests.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

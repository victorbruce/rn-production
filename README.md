# rnProduction

### About
This is a project based on a blog series I'm writing on medium on how to:

1. Prepare a React Native app for **release/production**
2. How to distribute your app to **Firebase App Distribution**
3. How to **automate** the build and distribution of your app using Fastlane
4. Build a CI/CD pipeline using **Fastlane**, **Github Actions**, and **Firebase App Distribution**

### Branches:

<ul>
  <li>
    🗂 <strong>master:</strong>
    <ul>
      <li>holds the latest changes</li>
    </ul>
  </li>
  <li>
  🗂 <strong>v1.0.0:</strong> 
    <ul>
    <li>Built a production ready react-native app with a signed APK ready to be published to Firebase App Distribution</li>
    </ul>
  </li>
  <li>
    🗂 firebase-console-release: 
    <ul>
      <li>Register the app with Firebase</li>
      <li>Upload signed APK to Firebase App Distribution</li>
    </ul>
  </li>
  <li> 
    🗂 <strong>fastlane</strong>
    <ul>
      <li>Install and setup fastlane</li>
      <li>Define an android lane to build and distribute app</li>
      <li>Install Firebase App Distribution plugin</li>
      <li>Authenticate with Firebase</li>
      <li>Run the command to build and distribute app with fastlane</li>
    </ul>
  </li>
</ul>

### How to run the App
*Pre-requisite*:

- A react-native environment setup

*Install the App*:
- Clone the project from Github onto your local machine
- Open the project in your IDE or text editor of your choice
- Install the npm dependencies by running  `npm install` inside your terminal
- **cd** into ios/ directory and run `pod install`

*Running the App*:
- Inside your terminal, run the command `npx react-native start` to start the development server.
- Run the command in a new terminal window `npx react-native run-ios` to install and run the app on iOS  simulator.
- Or run the command in a new terminal window `npx react-native run-ios` to install and run the app on an Android emulator.

### How To Contribute
- Submit an issue on the repo

### License
- MIT
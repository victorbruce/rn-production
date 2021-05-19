<img src="./screenshots/rnProduction.png" />

### About

A project based on a blog series on how to prepare a react-native app for production, automate the buid process using
fastlane and build a CI/CD pipeline using Github Actions with fastlane to deploy code automatically based on a Github
Event Type.

Below are <strong>links</strong> to the blog articles on medium:

1. <a href="https://victorbruce82.medium.com/series-preparing-your-react-native-app-for-production-android-part-1-e7eae578235b">Preparing Your React Native App for Production(Android) — Part 1</a>
2. <a href="https://victorbruce82.medium.com/series-publish-your-production-ready-react-native-application-to-firebase-app-14651017d443">Publish your Production-ready React Native Application to Firebase App Distribution(Android) — Part 2</a>
3. <a href="https://victorbruce82.medium.com/series-publish-a-production-ready-react-native-app-to-firebase-app-distribution-using-fastlane-c68f39eb3d93">Publish a Production-ready React Native App To Firebase App Distribution Using Fastlane. — Part 3</a>
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

  <li>
    🗂 <strong>ci-cd</strong>
    <ul>
      <li>Setup Github Actions and define a CD workflfow file using YAML syntax.</li>
      <li>Add a lane in FastFile to bump android and ios version numbers using Js version number as the <strong>source of truth</strong></li>
      <li>Add a script run bump javascript, android, and ios version numbers(patch/minor/major)</li>
      <li>Encrypt keys and keystore files using <strong>gpg tool</strong></li>
      <li>Add a script file to decrypt keys and keystore files when running in Github VM</li>
      <li>Add a job runner to the cd workflow file to tag each release with the lastest version number</li>
    </ul>
  </li>
</ul>

### How to run the App

_Pre-requisite_:

- A react-native environment setup

_Install the App_:

- Clone the project from Github onto your local machine
- Open the project in your IDE or text editor of your choice
- Install the npm dependencies by running `npm install` inside your terminal
- **cd** into ios/ directory and run `pod install`

_Running the App_:

- Inside your terminal, run the command `npx react-native start` to start the development server.
- Run the command in a new terminal window `npx react-native run-ios` to install and run the app on iOS simulator.
- Or run the command in a new terminal window `npx react-native run-ios` to install and run the app on an Android emulator.

### Screenshot
<br />
<img src="./screenshots/android-ios.png" />
<br /><br />

### How To Contribute

- Submit an issue on the repo

### License

- MIT

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

##### The below documents and instruction is for this project I made and used in this project, please do follow step by step:

## Warning Or must do step for future:

- "Hey, you have native folders, so be careful! If you change settings like icon, orientation, etc. in app.json, you must run npx expo prebuild again to update your native code."
  If you forget to do that, your app might behave weirdly.

## Some Important Steps to Follow to use particular components:

-- To use our own logo in a splashscreen and also show the logo the app after making changes in app.json file you must run this command so effects can be implemented - [npx-expo-prebuild] then re run the android and ios command separetly.

- [Commands-to-follow]:

- bunx expo start -c
- bun expo start --dev-client
- bun add package name
- I have used bun command to create a project( bun create expo app-name).
- Used this [bunx expo prebuild --clean] command to build the preBuild for ios and android.
- bun run ios, bun run android, bun run start or bunx expo run:android, bunx expo run:ios.
- I have put these ios and android in gitIgnore [./android, ./ios]
- To install any Expo library, you can use bun expo install:

- [To-Remove-Packages-Command]:

- bun remove package name
- npm uninstall package name

-- [To-use-Satoshi-Fonts-in-expo-react-native-project],
-- installed from FontShare website,
-- it comes in a single file inside the variable folder with the extension of .ttf,
-- after installing the family font click on the satoshi-variable.ttf and install all the fonts(like: regular, medium and so on..) and same for the italic ones.
-- now after installing all the fonts type, click on i button and see the name of the Full Family Name if that name isn't matching file name then copy the Full Family Name and change to the file name as well.
-- next run this npx expo install expo-asset command to link the fonts to our project and easily can be run on android and ios
-- create a helper function for all custom fonts like I did inside Utils folder fonts.ts
-- need to make changes in tailwind.confiq.js file as well.

#### [Packages-Using-In-This-Project]:

- [brew-update-command]:
- brew update
- brew upgrade

- [prebuild-for-ios-and-android]:
- bun expo prebuild --clean -p ios
- bun expo prebuild --clean -p android

- [Expo-vector-icon]
- using for the icons which is already inbuilt icons.

- [Expo-Eas-CLI]
- npm install -g eas-cli

- [Expo-Dev-Client]
- used this command bun expo install expo-dev-client
<!-- - npx expo install expo-dev-client -->

- [Expo-Drawer-Package]
- used this command bun expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
<!-- - npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated -->

- [Expo-React-Native-Reanimated-Package-For-Tailwind-Use]:
- bun expo install react-native-reanimated

- [Expo-Router-Package]:
- bun expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
<!-- - npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar -->

- [Dotenv-Package]:
- npm install dotenv --save

- [NativeWind-Package]:
- bun expo install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
- npx tailwindcss init = [To-Generate-Tailwind.Config-file]
- bun expo customize metro.config.js = [To-Generate-Metro-Config-File]
- And rest of the steps should follow from Documentation = https://www.nativewind.dev/getting-started/installation
- And also create Typescript for additional setting to use nativewind with our typescript.

- [Local-Storage-Package]:
- bun expo install expo-secure-store

- [Responsive-Screen-Packages]:
- npm i react-native-size-matters
- npm i react-native-device-info
- npm i react-native-responsive-dimensions (For percentage making responsive)

- [Frontend-Backend-connectivity-Package]:
- npm i axios
<!-- - npm i axios-instances -->

- [Expo-Fonts-Package]:
- bun expo install expo-font
<!-- - npx expo install expo-font -->
- Using Satoshi-Variable

-[Expo-Google-Poppins_font]:

- bun expo install @expo-google-fonts/poppins

- [Expo-Assets-Package]:
  // To Link the Custom Fonts to our project
- bun expo install expo-asset
<!-- - npx expo install expo-asset -->

- [Expo-Linear-Gradient]:
- bunx expo install expo-linear-gradient

- [Expo-Status-Bar]:
- bunx expo install expo-status-bar

- [React-Native-chart-kit]:
- bun add react-native-chart-kit react-native-svg

- [React-Native-gifted-charts]:
- bun add react-native-gifted-charts react-native-svg

- [React-Native-Doctor]:
- npx expo-doctor@latest
- npx expo install --check

- [React-Native-Victory-Chart]:
- bun add react-native-gesture-handler @shopify/react-native-skia
- bun add victory-native

- [Multiline/Autogrow-Text-Input]:
- npm install react-native-autogrow-textinput-ts

- [Toggle-Switch-Package]:
- npm i react-native-switch-toggle

- [Tailwind-clsx-package]:
- npm i clsx (/-PackageInstalled to arrange the order of tailwind class all things are taken care from background itself-/)

- [Tailwind-twd-merge-package]:
- npm i tailwind-merge (It purpose to merge the confilicting property overides in merging.)

- [Range-Slider]:
- npm i rn-range-slider
- npm i @react-native-community/slider

- [CheckBox]:
- npx expo install expo-checkbox

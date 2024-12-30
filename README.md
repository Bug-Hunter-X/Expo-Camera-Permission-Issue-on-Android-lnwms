# Expo Camera Permission Issue on Android

This repository demonstrates a common issue encountered when using the Expo Camera API on Android.  The app crashes after requesting camera permissions, even if permission is granted.  The bug and its solution are provided in separate JavaScript files.

## Bug Description

The `bug.js` file contains code that attempts to access the device camera using the Expo Camera API.  On Android, this code consistently crashes the app, regardless of whether camera permission is granted or denied.

## Solution

The `bugSolution.js` file provides a corrected implementation that addresses the crashing behavior. The solution involves proper error handling and a more robust permission request process.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `expo start` to start the Expo development server.
4. Observe the app's behavior on an Android device or emulator.

## Note

This issue may be related to specific versions of Expo or Android. Refer to Expo's documentation for the most up-to-date best practices for camera permission handling on Android.
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    //this is how we will connect to firebase
    apiKey: "AIzaSyCQwqf7Tvp20jOfSOAIF1r7ZsnH7VJGdrQ",
    //for logging user into the app
    authDomain: "masterproject-e8352.firebaseapp.com",
    //stores the id of the project
    projectId: "masterproject-e8352",
    //describe the location where files are stored
    storageBucket: "masterproject-e8352.appspot.com",
    //for pushing notif between applications
    messagingSenderId: "433381681894",
    //for connecting multiple apps in a project
    appId: "1:433381681894:web:8c00a7f59d565e276e6927"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCbdmDmk5CGP-l0jA4AVGD4k-ggL3XfkTo",
    authDomain: "lowsalt-73e0c.firebaseapp.com",
    projectId: "lowsalt-73e0c",
    storageBucket: "lowsalt-73e0c.appspot.com",
    messagingSenderId: "31705639984",
    appId: "1:31705639984:web:bc9445520288907b67d1f5",
    measurementId: "G-RFKKQTKCXK"
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

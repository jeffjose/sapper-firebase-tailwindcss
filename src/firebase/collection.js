import { collectionData } from "rxfire/firestore";
import { publicStore, privilagedStore } from "../stores/collection";
import { of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";

import { authState } from "rxfire/auth";

export const collectionListener = (firebaseApp) => {
  collectionData(
    firebaseApp.firestore().collection("publiclist"),
    "uid"
  ).subscribe(async (data) => {
    publicStore.set(data);
    localStorage.setItem("publiclist", data);
  });

  authState(firebaseApp.auth())
    .pipe(
      switchMap((user) => {
        if (user) {
          return collectionData(
            firebaseApp
              .firestore()
              .collection("privilagedlist")
              .where("user", "==", user.uid),
            "uid"
          );
        } else {
          return of([]);
        }
      })
    )
    .pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    )
    .subscribe(async (data) => {
      privilagedStore.set(data);
      localStorage.setItem("privilagedlist", data);
    });
};

export const addItemToCollection = (firebaseApp) => (collectionName) => {
  firebaseApp.subscribe(async (app) => {
    let user = app.auth().currentUser;
    let string = `${collectionName} item ${(Math.random() * 101) | 0}`;
    let collection = app.firestore().collection(collectionName);
    if (collectionName == "privilagedlist") {
      user &&
        collection.add({
          name: string,
          user: user.uid,
        });
    } else {
      collection.add({
        name: string,
        user: (user == null ? undefined : user.uid) || "anon",
      });
    }
  });
};

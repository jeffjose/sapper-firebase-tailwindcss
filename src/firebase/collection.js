import { collectionData } from "rxfire/firestore";
import { collectionStore } from "../stores/collection";

export const collectionListener = (firebaseApp) => {
  collectionData(firebaseApp.firestore().collection("list"), "uid").subscribe(
    async (data) => {
      collectionStore.set(data);
      localStorage.setItem("collection", data);
    }
  );
};

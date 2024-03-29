import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "../firebase/firebase";
import { firebaseDbMovie } from "../Api";

export const useFavouriteShows = (userId: string | null | undefined) => {
  const [favouriteShows, setFavourite] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(database, "users/" + userId + "/favShows");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setFavourite(data);
        // update on refresh and not immediately
        off(userShow);
      });
    } else return;
  }, [userId]);

  return favouriteShows;
};

export const useWatchingShows = (userId: string | null | undefined) => {
  const [watchingShows, setwatching] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(database, "users/" + userId + "/watching");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setwatching(data);
      });
    } else return;
  }, [userId]);

  return watchingShows;
};

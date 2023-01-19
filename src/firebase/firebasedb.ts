import { User } from "firebase/auth";
import { ref, remove, set, update } from "firebase/database";
import { database } from "./firebase";
import { onValue } from "firebase/database";
import { searchMovieBool } from "../Api";

type UserType = User | null | undefined;

export const addToFavourites = async (
  show: searchMovieBool,
  user: UserType
) => {
  await update(ref(database, "users/" + user?.uid + "/favShows"), {
    [show.id]: show,
  });
  await update(ref(database, "users/" + user?.uid + "/favShowsId"), {
    [show.id]: show.id,
  });
};

export const removeFromFavourites = async (
  show: searchMovieBool,
  user: UserType
) => {
  await remove(ref(database, "users/" + user?.uid + "/favShows/" + show.id));
  await remove(ref(database, "users/" + user?.uid + "/favShowsId/" + show.id));
};

export const addToWatching = (showId: number, user: UserType) => {
  set(ref(database, `users/${user?.uid}/watching`), {
    showId,
  });
};

export const removeFromWatching = (user: UserType) => {
  remove(ref(database, `users/${user?.uid}/watching`));
};

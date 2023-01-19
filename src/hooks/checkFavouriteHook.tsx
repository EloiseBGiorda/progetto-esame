import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { UserContext } from "../pages/login/AuthContext";
import { database } from "../firebase/firebase";

const useIsFavourite = (id?: string | number) => {
  const { currentUser } = UserContext();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unsubscribe = onValue(
      ref(database, `users/${currentUser.uid}/favShows/${id}`),
      (snapshot) => {
        const data = snapshot.val();
        setIsFavourite(!!data);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return isFavourite;
};

export default useIsFavourite;

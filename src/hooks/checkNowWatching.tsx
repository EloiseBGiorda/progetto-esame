import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { UserContext } from "../pages/login/AuthContext";
import { database } from "../firebase/firebase";

const useIsWatching = (id?: string | number) => {
  const { currentUser } = UserContext();
  const [isWatching, setIsWatching] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unsubscribe = onValue(
      ref(database, `users/${currentUser.uid}/watching/${id}`),
      (snapshot) => {
        const data = snapshot.val();
        const idNum = parseInt(id as string);

        if (!data) {
          setIsWatching(false);
          return;
        }

        setIsWatching(!!data);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return isWatching;
};

export default useIsWatching;

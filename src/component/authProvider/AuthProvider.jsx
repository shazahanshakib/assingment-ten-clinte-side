import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, pasword) => {
    return createUserWithEmailAndPassword(auth, email, pasword);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = async(updateData) => {
    // return updateProfile(auth.currentUser, updateData);
    if (!auth.currentUser) return; 
    await updateProfile(auth.currentUser, updateData);
    await auth.currentUser.reload(); 
    setUser({ ...auth.currentUser });
  };


  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser)
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };
  
  const authInfo = {
    name: "shakib",
    createUser,
    singIn,
    updateUserProfile,
    signOutUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

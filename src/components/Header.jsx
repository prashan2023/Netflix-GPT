import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) =>store.user);
  useEffect(() =>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL:photoURL  }));
            navigate("/browser");
        } else {
            dispatch(removeUser());
            navigate("/");
         }
        });

        return () => unsubscribed();
    },[]);
  const handleSignOut =()=>{
     signOut(auth).then(() => {
     }).catch((error) => {
         navigate("/error");
    });
  };

  return (
    <div className="absolute p-5 w-full bg-gradient-to-b from-black z-1 flex justify-between">
        <img className="w-44 " src={LOGO}
         alt='logo'/>

        {user  && (
          <div className="flex items-center ">
          <img className="w-15 h-15 rounded-full" src={user?.photoURL} alt="Signout logo"/>
          <div onClick={handleSignOut}>
            <button className="font-bold text-red-800 cursor-pointer pl-2">(Sign Out)</button>
          </div>
          </div>
        )}
           
        
    </div>
  )
}

export default Header;



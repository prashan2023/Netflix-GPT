import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { LOGO } from "../utils/constant";
import { getToggleBoolean } from '../utils/gptSlice';
import ChangeLanguage from './ChangeLanguage';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) =>store.user);
  const gptValue = useSelector((store) => store.gpt.gptToggleBoolean);
  useEffect(() =>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL:photoURL  }));
            navigate("/browser");
        } else {
            dispatch(removeUser());
            navigate("/");
            // dispatch(getToggleBoolean(! gptValue));
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
  const handleToggleGpt =()=>{
       dispatch(getToggleBoolean(! gptValue));
  };

  return (
    <div className="absolute p-5 w-full bg-gradient-to-b from-black z-1 flex items-center justify-between">
        <img className="w-44 " src={LOGO}
         alt='logo'/>
        
        

        {user  && (
          <div className="flex  items-center">
          
          <div className="flex">
          {!gptValue && (
            <ChangeLanguage/>
          )}
          
          <button 
           onClick={handleToggleGpt}
           className="py-2 px-5 text-sm bg-purple-700 text-white mr-5 font-bold rounded-lg"
          >
           {gptValue?"GPT Search":"Home Page"} 
          </button>
          </div>
          <img className="w-15 h-15 rounded-full border-2 border-white opacity-80" src={user?.photoURL} alt="Signout logo"/>
          <div onClick={handleSignOut}>
            <button className="font-bold text-sm text-white cursor-pointer pl-2">(Sign Out)</button>
          </div>
          </div>
        )}
           
        
    </div>
  )
}

export default Header;



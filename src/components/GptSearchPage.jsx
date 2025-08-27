import React from 'react';
import GptSearchBar from './GptSearchBar';
import SearchMoviesContainer from './SearchMoviesContainer';

const GptSearchPage = () => {
  return (
    <div className="">
        <div className="absolute -z-10">
                <img className="fixed w-screen h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/LK-en-20250721-TRIFECTA-perspective_0f9c2293-736d-4443-83ff-90ae2fbf1a7d_large.jpg"
                 alt="image"/>
        </div>
        <GptSearchBar/>
        <SearchMoviesContainer/>
    </div>
  )
}

export default GptSearchPage
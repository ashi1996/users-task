import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import ItemFavorites from './itemFavorites';
import '../App.css';


function Favorites() {
  const state = useSelector((state: RootState) => state.weather);
  let [allLikes, setAllLikes] = useState<Array<any>>([]);
  useEffect(()=>{
    setAllLikes(state.likes);
  },[])

  return (
    <div className="col-lg-9 mx-auto mt-5 shadow viewBox p-3 text-center">
      {allLikes.length > 0 ? 
        <>
          <div className=''>Click For More Details</div>
          <div className='row p-3 mt-4 justify-content-center '>
            {allLikes?.map(aL => {
              return(
                <ItemFavorites item={aL} />
                )
              } )}
          </div>
        </>
      : <h3 className='text-danger'>No Favorite.</h3>}
    </div>
  );
}

export default Favorites;

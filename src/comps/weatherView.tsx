import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../state/reducers';
import { WeatherIcons } from '../common/consts/strings';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import ViewItemDayWeather from './viewItemDayWeather';
import { IDailyForecasts, likes_currentPlace } from '../common/consts/model';
import '../App.css';

function WeatherView() {

  const dispatch = useDispatch();
  const { saveLikesToLocal, addAnimationFavoriteLink} = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: RootState) => state.weather);
  let [allLikes, setAllLikes] = useState<Array<likes_currentPlace>>([]);
  let [isLike , setIsLike] = useState(false);

  useEffect(()=>{
    setAllLikes(state.likes);
    if(allLikes.find(Al => Al.code === state.currentPlace.code)){
      setIsLike(true);
    }else{
      setIsLike(false);
    }
  },[state.currentPlace, allLikes]);

  const onClickLike = () => {
    if(allLikes.find(Al => Al.code === state.currentPlace.code)){
      allLikes.splice(allLikes.findIndex( Al=> Al.code === state.currentPlace.code),1);
      setIsLike(false);
    }else{
      allLikes.push(state.currentPlace);
      setIsLike(true);
      addAnimationFavoriteLink()
    }
    saveLikesToLocal(allLikes);
  }

  return (
    <div className="col-lg-8 mx-auto mt-4 shadow viewBox p-3">
      <div className='d-flex justify-content-between col-11 mx-auto'>
        <div>
          <div>{state.currentPlace.name}</div>
          <div>{state?.currentConditions?.Temperature?.Metric?.Value} {state?.currentConditions?.Temperature?.Metric?.Unit}</div>
        </div>
        <div onClick={onClickLike} title={'add/remove to Favorites'} className={'like '+ (isLike ? 'text-danger' : "")}>{heartIcon()}</div>
      </div>
      <div className='text-center p-3 mt-3'>
        <h2>{state.currentConditions.WeatherText}</h2>
        <img width='30px' src={WeatherIcons[state?.currentConditions?.WeatherIcon]}/>
      </div>
      {/*  */}
      <div className='row justify-content-between p-3 animate__animated animate__zoomIn'>
        {state?.nextFiveDays?.DailyForecasts?.map((day:IDailyForecasts , i:number)=>{
          return(
            <ViewItemDayWeather key={i} day={day}/>
          )
        })}
      </div>
    </div>
  );
}

export default WeatherView;

const heartIcon = () =>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
  )
}
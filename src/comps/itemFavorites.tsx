import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ERROR_API, WeatherIcons } from '../common/consts/strings';
import { FETCH_CURRENT_CONDITIONS } from '../common/services/api';
import { actionCreators } from '../state';
import { IApiResponseModel, ICurrentConditionsResponse, likes_currentPlace } from '../common/consts/model';
import '../App.css';

interface Props {
  item:likes_currentPlace
}

const ItemFavorites : React.FC<Props> = ({item}) =>{
  const dispatch = useDispatch();
  const { getCurrentConditions,updateCurrentPlace } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();
  const [favoriteItemWeather, setFavoriteItemWeather] = useState<any>()

  useEffect(()=>{
    doApi()
  },[])


  const doApi = async() =>{
    try{
      const data:IApiResponseModel<ICurrentConditionsResponse[]> = await FETCH_CURRENT_CONDITIONS(item.code);
      if(data){
        setFavoriteItemWeather(data[0]);
      }
    }catch(err){
      console.log(err);
      alert(ERROR_API);
    }
  }

  const onClickFavorite = () => {
    getCurrentConditions(item.code);
    updateCurrentPlace(item.name, item.code);
    navigate('/');
  }

  return (
    <div className="p-2 col-lg-2 col-md-3 border shadow text-center mb-3 m-2 favoriteItem animate__animated animate__zoomIn" onClick={onClickFavorite}>
      <div>{item.name}</div>
      <img width='30px' src={WeatherIcons[favoriteItemWeather?.WeatherIcon]}/>
      <div>{favoriteItemWeather?.Temperature?.Metric?.Value} {favoriteItemWeather?.Temperature?.Metric?.Unit}</div>
    </div>
  );
}

export default ItemFavorites;
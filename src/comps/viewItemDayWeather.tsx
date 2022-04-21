import React from 'react';
import { WeatherIcons } from '../common/consts/strings';
import '../App.css';
import { IDailyForecasts } from '../common/consts/model';

interface Props {
  day:IDailyForecasts
}

const ViewItemDayWeather : React.FC<Props> = ({day}) =>{
  return (
    <div className="p-2 col-md-2 border shadow text-center mb-3">
      <div className='fw-bolder'>{parseDate(day.Date)}</div>
      <img width='30px' src={WeatherIcons[day.Day.Icon]}/>
      <div>{day.Temperature.Minimum.Value} - {day.Temperature.Maximum.Value} {day.Temperature.Minimum.Unit}</div>
    </div>
  );
}

export default ViewItemDayWeather;


const parseDate = (date: string) => {
  return date ? new Date(date).toDateString()?.split(' ')[0] : ""; 
}
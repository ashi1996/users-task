import React from 'react';
import WeatherView from './weatherView';
import SearchCountry from './searchCountry';
import '../App.css';


function HomePage() {
  return (
    <div className="p-3">
      <SearchCountry/>
      <WeatherView/>
    </div>
  );
}

export default HomePage;

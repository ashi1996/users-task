const base_url = 'http://dataservice.accuweather.com';

const createUrl = (url: string): string => `${base_url}/${url}`;

const GET_AUTO_COMPLETE = createUrl('locations/v1/cities/autocomplete');
const GET_CURRENT_CONDITIONS = createUrl('currentconditions/v1');
const GET_NEXT_FIVE_DAYS = createUrl('forecasts/v1/daily/5day');

export {base_url, 
        GET_AUTO_COMPLETE,
        GET_CURRENT_CONDITIONS,
        GET_NEXT_FIVE_DAYS 
};
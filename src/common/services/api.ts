import { IApiResponseModel, IAutoCompleteResponse, ICurrentConditionsResponse, INextFiveDaysResponse} from "../consts/model";
import { ACCUWEATHER_API_KEY } from "../consts/strings";
import * as API_ROUTES from '../../common/consts/api_routes';

const FETCH_API = async <T>(_url: string,  singleParam :boolean = true): Promise<IApiResponseModel<T>> => {
       _url +=   ((singleParam) ? '?' : '&') + `apikey=${ACCUWEATHER_API_KEY}`;  
      const resp = await fetch(_url);
      return await resp.json();
  }
  
  const FETCH_AUTO_COMPLETE = async (text: string): Promise<IApiResponseModel<IAutoCompleteResponse[]>> => FETCH_API(`${API_ROUTES.GET_AUTO_COMPLETE}?q=${text}`, false);
  const FETCH_CURRENT_CONDITIONS = async (UniqueId: string): Promise<IApiResponseModel<ICurrentConditionsResponse[]>> => FETCH_API(`${API_ROUTES.GET_CURRENT_CONDITIONS}/${UniqueId}`);
  const FETCH_NEXT_FIVE_DAYS = async (UniqueId: string): Promise<IApiResponseModel<INextFiveDaysResponse>> => FETCH_API(`${API_ROUTES.GET_NEXT_FIVE_DAYS}/${UniqueId}?metric=true`,false);

  export {FETCH_AUTO_COMPLETE,
    FETCH_CURRENT_CONDITIONS,
    FETCH_NEXT_FIVE_DAYS
  };
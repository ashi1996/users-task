import { IApiResponseModel, IUser} from "../consts/model";
import * as API_ROUTES from '../../common/consts/api_routes';

const FETCH_API = async <T>(_url: string): Promise<IApiResponseModel<T>> => { 
  try{
    const resp = await fetch(_url);
    return await resp.json();
  }catch(err:any){
    console.log(err)
    return err;
  } 
}
  
  const FETCH_ALL_USERS = async (numberResults: string ): Promise<IApiResponseModel<IUser[]>> => FETCH_API(`${API_ROUTES.GET_All_USERS}${numberResults}`);

  export {
    FETCH_ALL_USERS
  };
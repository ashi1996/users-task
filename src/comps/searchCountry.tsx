import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { bindActionCreators} from 'redux';
import { actionCreators, store} from '../state';
import '../App.css';
import { IAutoCompleteResponse } from '../common/consts/model';

function SearchCountry() {

  useEffect(()=>{
    resetAutocomplete()
    let storeSubscribe = store.subscribe(()=>{
      setSearchComplete(store.getState().weather.autoComplete); 
    })
  },[])
 
  const dispatch = useDispatch();
  const { getAutocomplete , getCurrentConditions, updateCurrentPlace, resetAutocomplete } = bindActionCreators(actionCreators, dispatch)
  let [searchText , setSearchText] =  useState<string>('')
  let [searchComplete , setSearchComplete] = useState([])
  let [blockInput , setblockInput] = useState(false)
  

  const onSearch = (text:string) => {
    if(blockInput) return;
    if(text.length > 0){
      getAutocomplete(text);
    }else{
      setSearchComplete([]);
    }
    setSearchText(text);
  }

  const onSubmitSearch = (placeName:string, UniqueId:string) => {
    getCurrentConditions(UniqueId);
    updateCurrentPlace(placeName, UniqueId);
    setSearchText(placeName);
    resetAutocomplete();
  }


const checkIfInputInEnglish = (event:React.KeyboardEvent<HTMLInputElement>) => {
  let englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
  var key = String.fromCharCode(event.which);
  if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) { 
    setblockInput(false);
  }
  else {
    alert("Only English is allowed");
    setblockInput(true);
  }
}

  return (
    <div className="p-3">
      <div className='col-lg-6 mx-auto mt-3' style={{position:'relative'}}>
        <input value={searchText} onKeyPress={(e)=> checkIfInputInEnglish(e)}  onChange={(e)=>onSearch(e.target.value)} placeholder='Search here...' type='text' className='form-control'/>
        <div style={{position:'absolute', maxHeight:"150px" , overflowY:'auto'}} className='form-control p-0 m-0'>
         {searchComplete.map((item:IAutoCompleteResponse)=>{
           return(
             <div key={item.Key} onClick={()=>onSubmitSearch(item?.LocalizedName, item.Key)}  style={{borderBottom:'1px solid black', cursor:'pointer'}} className='p-2 autoCompleteItem'>{item?.LocalizedName}</div>
           )
         })}
        </div>
      </div>
    </div>
  );
}

export default SearchCountry;
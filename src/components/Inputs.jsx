import React from 'react'
import {searchOutline, locationOutline} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

function Inputs() {
  return(
  <div className='flex flex-row justify-center my-6'>
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input 
        type="text" 
        placeholder='Search for a city...'
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <IonIcon icon={searchOutline} className="text-white cursor-pointer transition ease-out hover:scale-125" />
        <IonIcon icon={locationOutline} className="text-white cursor-pointer transition ease-out hover:scale-125" />
    </div>
    <div className="flex flex-row w-1/4 items-center justify-center">
        <button 
        name="metric" 
        className="text-xl text-white font-light ">°C</button>
        <p className='text-xl text-white mx-1'>|</p>
        <button 
        name="emperial" 
        className="text-xl text-white font-light ">°F</button>
    </div>
  </div>
  );
}

export default Inputs;
import React from 'react'
import  {useState } from "react"

function useLocalStorage(key, initialvalue) {
    const[storedvalue, setStoredvalue]=useState(()=>{
        if(typeof window ==="undefined"){
            return initialvalue;

        } try{
            const item =window.localStorage.getItem(key);
            return item ? JSON.parse(item): initialvalue

        }catch(error){
            console.log(error);
            return initialvalue;
        }
    });
const setValue =(value)=>{
    try{
        setStoredValue(value);
        if(typeof window !== "undefined")
        window.localStorage.setItem(key, JSON.stringify(value));
    }catch(error){
        console.log(error);
    }
    };   

  return 
    [useLocalStorage, setValue]
  
}

export default useLocalStorage

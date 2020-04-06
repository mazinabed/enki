import ProfileHome from '../components/ProfileHome/index'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PictureSlider from '../components/PictureSlider'
import Router from 'next/router';



export default  function ProfilePage(){
   


 const [data, setData] = useState()

 useEffect(()=> {
     if(!localStorage.getItem('token')){
         Router.push('/')
     }
 })
  useEffect(()=>{
axios
.get('/api/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
})
.then(response => {
    console.log(response.data)
    setData(response.data)
})
}, [])


    return(
<>
    
         <ProfileHome/>
    
</>


    );
}
export async function getSeverSideProps(context){
    return{
        props:{
            authenticated: true
        }
    }
}
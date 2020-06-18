import ProfileHome from '../components/ProfileHome/index'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PictureSlider from '../components/PictureSlider'
import Router from 'next/router';



export default  function ProfilePage(user){
   


 const [data, setData] = useState()

 useEffect(()=> {
     if(!localStorage.getItem('token')){
         Router.push('/')
     }
 })
  useEffect(()=>{
      
axios.get('/api/profile', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
})
.then(response => {
    
    setData(response.data)
    console.log(response.data)
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
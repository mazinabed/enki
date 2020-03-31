import ProfileHome from '../components/ProfileHome/index'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PictureSlider from '../components/PictureSlider'


export default  function ProfilePage(){

 const [data, setData] = useState()
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
    <div>
        <ProfileHome/>
    </div>
</>


    );
}

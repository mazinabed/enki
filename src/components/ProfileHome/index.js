import React from 'react'
import NavProfileHome from '../NavProfileHome/index'
import MemberSectionOnMHP from '../MemberSectionOnMHP.js'
import ProfileCard from '../../components/profileCard/ProfileCard'

export default function ProfileHome(props){




    return(

        <>
        <NavProfileHome/>
        <div className="container">
        <div className="row">
        <div className="col-4">
        <ProfileCard/>
        </div>
        <div className="col-8">

        </div>

        </div>
        </div>
  </>
    )
}
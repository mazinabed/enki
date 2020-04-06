import React, { useState } from "react";
import Link from 'next/link'
import Router from 'next/router';
import Datepicker from "../components/DatePicker/Datepick";
import axios from 'axios'

export default function Signup() {

  //const [username, setUsername] = useState();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  // const [male, setMale] = useState();
  // const [female, setFemale] = useState();
  const [gender, setGender] = useState('Male');

  

  const handleSubmit = e => {
    e.preventDefault();

   return axios
    .post('/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
        email,
        firstname,
        lastname,
    })
    .then((r) => {
        
      return r.data;
    })
    .then((data) => {
      if (data && data.error) {
        setLoginError(data.message);
      }
        else  {
           //set LocalStorage
          //  localStorage.setItem("token", data.token)
          window.location=('/Signin');
        }
      });
    
    
  };

  return (

    <div className="row">
      <div className="col-6 offset-1">
        <h5>It’s quick and easy.</h5>
      </div>
      <div className="container offset-1">
        <form onSubmit={handleSubmit}>


          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={firstname}
                type="text"
                placeholder="FirstName"
                name="firstname"
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={lastname}
                type="text"
                placeholder="LastName"
                name="lastname"
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>



          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={email}
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-12">
              <input
                className="form-control"
                value={password}
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>


          <div className="col-12">
            <h6>Birthday</h6>
            <Datepicker />
          </div>
          <br />
          <div className="col-6">
            <h6>Gender</h6>
          </div>
          <div className="row">

            <div className="col-3 offset-1">
              <div className="form-group form-check">

                <input type="checkbox" checked={gender === 'Male'}  className="form-check-input" id="" onChange={() => setGender('Male')} />
                <label className="form-check-label" name="male">Male</label>

              </div>
            </div>
            <div className="form-group form-check">
              <div className="col-3">

                <input type="checkbox" checked={gender === 'Female'}  className="form-check-input" id="" onChange={() => setGender('Female')} />
                <label className="form-check-label" name="female">Female</label>

              </div>
            </div>
          </div>
          <div className="col-6">
            <button className="btn btn-success" value="Submit" type="submit">
              Submit
          </button>
          </div>

        </form>
      </div>
    </div>
  );
}



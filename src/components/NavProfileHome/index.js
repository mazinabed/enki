import React from "react";


export default function NavProfileHome() {


  return (
    <div>
    <nav className="nav justify-content-center">

<h1 className="white">Enki</h1>
</nav>
< >
  <button
            onClick={() => {
              localStorage.clear('token');
              window.location=('/');
            }}>
            Logout
          </button>
   </>
</div>

 
  );
}


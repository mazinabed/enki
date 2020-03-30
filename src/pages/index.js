import SigninCard from '../components/SigninCard/index';
import SignupCard from '../components/SignupCard/SignupCard'
import Nav from '../components/Nav/index';
import Profile from './profile'



function Index() {
  return [
    <>
    <Nav />
    <div className="container">
<div className="row">
<div className="col-6">
<SigninCard/>
 </div>
 <div className="col-6">
<SignupCard/>
</div>
</div>

</div>
</>
  ];
}

export default Index;
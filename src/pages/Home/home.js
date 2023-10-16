import React from "react";
import Navbar from "../Navi"
import Footer from '../Footer'
import employee from '../../components/images/empl.png'
import parcel from '../../components/images/pack.jpg'
import emplo from '../../components/images/white.jpg'
import 'aos/dist/aos.css';
import './home.css'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-white md:w-auto md:h-auto">
    <div>
      <Navbar/>
    </div>
    <div>
    <div className="box w-full">
        <div className="container " >
        <ul className="con menu menu-vertical lg:menu-horizontal  rounded-box  text-white  text-2xl translate-x-24 mt-8">
        <Link to='/login'>
          <li className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4 translate-y-2">Track</li>
        </Link>
          <li><a  href="www.google.com"  className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Quote</a></li>
          <Link to='/login'>
            <li className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4 translate-y-2">Ship</li>
          </Link>
          <li><a  href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4" >Billing</a></li>
          
        </ul>
        </div>
        <div></div>
        <div className="inp relative mt-8 flex -translate-y-60">
          <input
            type="text"
            placeholder=" "
            className="rounded-sm text-grey-500 border-grey-200 pl-8 pr-4 py-2 bg-white ml-15 w-1/3"
            id="trackNumberInput"
          />
  <label
    htmlFor="trackNumberInput"
    className="absolute top-2 left-2 text-grey-500 transition-all duration-300 ml-15 align items-center"
  >
    Tracking number
  </label>
  <Link to='/login'>
  <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24 ml-4 text-black font-semibold">Track</button>
  </Link>
  
</div>
  <img src={employee} alt="employee" className="ep float-right -translate-y-60 -mt-10 w-10 h-10"/>
        {/* <div className="content">
        
        </div> */}
    </div>
      
    </div>
    <div className="hero  bg-white mt-8 data-aos='fade-up'">
  <div className="hero-content flex-col lg:flex-row text-left -mt-10">
    <img src={parcel} alt="pic" className="par w-1/2 h-sm -ml-40 rounded-lg shadow-2xl" />
    <div className="ml-72 text-left">
      <h1 className="text-4xl  font-semibold text-black">Let's Start Shipping</h1>
      <p className="py-6 text-xl text-black font-normal">You’ve got parcels. We’ll take care of them.</p>
      <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24  text-black font-semibold float-left ">Ship now</button>
    </div>
  </div>
</div>
<div className="hero  bg-white mt-8">
  <div className="hero-content flex-col lg:flex-row text-left">
    <div className="text-left ml-8">
      <h1 className=" head text-4xl  font-semibold text-black">Total Visibility and Control</h1>
      <p className=" mt-2 text-xl text-black font-normal">Track your sent and incoming parcels, set delivery instructions and get alerts with UPS My Choice®.</p>
      <Link to='/login'>
        <button className="bg-amber-400 hover:bg-amber-300 rounded-full h-11 w-24  text-black font-semibold float-left mt-2">Log In</button>
      </Link>
      <Link to='/Signup'>
        <button className="border-blue-500 border-2 hover:bg-amber-300 rounded-full h-11 w-24  text-blue-500 font-semibold float-left ml-5 mt-2">Sign Up</button>
      </Link>
    </div>
    <img src={emplo} alt="pic" className="em w-1/2 ml-96 h-sm rounded-lg shadow-2xl" />
  </div>
</div>
    
        <div>
          <Footer/>
        </div>
    
    </div>
    
  );
}

export default Home
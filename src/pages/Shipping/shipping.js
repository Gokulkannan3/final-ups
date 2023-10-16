import React, { useState, useEffect } from 'react';
import './ProgressBar.css';
import Navbar from '../Nav';
/* import Footer from '../Footer'; */
import { Link, useParams, useLocation } from 'react-router-dom';
import employee from '../../components/images/empl.png'
import './ship.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step } from 'react-step-progress-bar';

const Progress = () => {
  const [apiData, setApiData] = useState({ status: '' });
  const { awbNumber } = useParams();
  const location = useLocation();

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      /* window.location.reload(); */
    console.log("Received Data:", location.state);
    fetch(`http://172.22.81.182:8080/rfid/getstat/${awbNumber}`)
      .then((response) => response.text())
      .then((data) => {
        setApiData({ status: data.trim() });
      })
      .catch((err) => {
        console.log(err);
      });
    }, 1000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(refreshInterval);
    };
  }, [awbNumber, location.state]);

  const labels = ['REGISTERED','CHENNAI HUB', 'ATLANTA HUB', 'OUT FOR DELIVERY'];
  const labelsSt = ['REGISTERED','CHENNAI', 'ATLANTA', 'OUT FOR DELIVERY'];
  let st=labels[0];
  if(apiData.status==="REGISTERED")st=labels[0];
  else if(apiData.status==="DISPATCHED_1")st=labels[1];
  else if(apiData.status==="DISPATCHED_2")st=labels[2];
  else if(apiData.status==="OUT FOR DELIVERY")st=labels[3];
  

  return (
    <html>
      <body>
      <div className='min-h-screen md:w-auto md:h-auto'>
    
    <Navbar />
    <div className="box w-full ">
    <div className="container ">
        <ul className="menu menu-vertical lg:menu-horizontal  rounded-box  text-white  text-5xl translate-x-96 mt-32 ">
          {/* <li><a href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Track</a></li> */}
          <li><a  href="www.google.com"  className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Quote</a></li>
          {/* <li><a  href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4">Ship</a></li> */}
          <li><a  href="www.google.com" className="mr-5 hover:underline decoration-yellow-500 hover:bg-transparent hover:text-white hover:underline-offset-4" >Billing</a></li>
          
        </ul>
        </div>
        <div></div>
<img src={employee} alt="employee" className="i float-right -translate-y-60 -mt-10 w-10 h-10"/>

               
    </div>

      <div className='pro -translate-y-10 md:w-2/4 ms:w-24 ml-96 mt-52 translate-x-96 max-lg:-translate-y-72 '>
      <ProgressBar
        percent={labels.indexOf(st) * 35} // Assumes each step corresponds to 25% progress
        filledBackground="linear-gradient(to right, #5e1b08, #351c15)"
      >
        {labels.map((label, index) => (
          <Step transition="scale">
            {({ accomplished }) => (
              <button
                style={{
                  filter: accomplished ? 'none' : 'grayscale(60%)',
                }}
                
                key={label}
                className={`progress-label ${label === st ? 'active' : ''} text-3xl w-80 h-24 rounded-full`}
                width="90"
                heigth="30"
              >
              {labelsSt[index]}
              </button>
            )}
      
    </Step>
  ))}

</ProgressBar>
{apiData.status === 'OUT FOR DELIVERY' && (
        <Link to='/map'>
          <button className="track bg-amber-400 hover:bg-amber-300 text-4xl ml-96 translate-x-96 h-20 w-40 rounded-full h-11 w-24 text-black font-semibold mt-80 -translate-y-24">
            Track
          </button>
          
        </Link>
      )}

      </div>
      {/* <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols w-1/2 flex justify-center ml-96 translate-x-44">
    <thead>
      <tr className='bg-yellow-400 text-3xl text-black font-semibold '>
      <td>Location</td> 
        <td>Reached</td> 
        <td>Time</td> 
        
        <td className='border1'>Date</td> 
      </tr>
    </thead> 
    <tbody>
      <tr>
      
      <td className='text-xl'>C</td> 
        <td className='text-xl'>Reached Hub 1</td> 
        <td className='text-xl'>11:00</td> 
        <td className='text-xl'>06/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Mumbai</td> 
        <td className='text-xl'>Intransit</td> 
        <td className='text-xl'>13:00</td> 
        
        <td className='text-xl'>07/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Banglore</td>
        <td className='text-xl'>Reached Hub 2</td> 
        <td className='text-xl'>17:00</td> 
         
        <td className='text-xl'>08/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Banglore</td>
        <td className='text-xl'>Intransit</td> 
        <td className='text-xl'>21:00</td> 
         
        <td className='text-xl'>08/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Chennai</td>
        <td className='text-xl'>Reached Hub 3</td> 
        <td className='text-xl'>23:00</td> 
         
        <td className='text-xl'>09/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Chennai</td>
        <td className='text-xl'>Intransit</td> 
        <td className='text-xl'>24:00</td> 
         
        <td className='text-xl'>09/10/2023</td> 
      </tr>
      <tr>
      <td className='text-xl'>Madurai</td>
        <td className='text-xl'>Out For Delivery</td> 
        <td className='text-xl'>1:00</td> 
         
        <td className='text-xl'>10/10/2023</td> 
      </tr>
    </tbody> 
  </table>
</div> */}

      {/* <div className='mt-12 min-h-screen'>
        <Footer />
      </div> */}
    </div>
    </body>
    </html>
  );
};

export default Progress;

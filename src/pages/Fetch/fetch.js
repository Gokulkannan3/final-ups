import React, { useEffect, useState } from "react";
import Navbar from '../Nav'
import './fetch.css'
import { Link } from "react-router-dom";

// Define a separate component for the content you want to refresh
function Content({ data }) {
  return (
    <body>
      <div className="tab overflow-x-auto mt-8 shadow-black  md:w-auto md:h-auto">
      <table className="table table-zebra mx-auto w-1/2 text-2xl">
        <thead className="bg-yellow-400 text-black text-2xl">
          <tr>
            <th className="text-center w-1/4">AWB</th>
            <th className="text-center w-1/4">Sender</th>
            <th className="text-center w-1/4">Origin</th>
            <th className="text-center w-1/4">Destination</th>
            <th className="text-center w-1/4">Tracking</th>
          </tr>
        </thead>
        <tbody className='tboby'>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td className="text-center align-middle w-1/4">{item.awb}</td>
              <td className="text-center align-middle w-1/4">{item.sender_data}</td> 
              <td className="text-center align-middle w-1/4">{item.origin_data}</td>
              <td className="text-center align-middle w-1/4">{item.destination_data}</td>
              <td>
                {/* Link to Shipping component with data */}
                <Link
                  to={{
                    pathname: `/shipping/${item.awb}`,
                    state: {
                      awb: item.awb,
                      sender_data: item.sender_data,
                      origin_data: item.origin_data,
                      destination_data: item.destination_data,
                    },
                  }}
                >
                  <button className="btn hover:bg-yellow-400 hover:text-black">
                    Track
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </body>
  );
}

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://172.22.81.182:8080/rfid/getall");
        const actualData = await response.json();
        setData(actualData);
      } catch (err) {
        console.log(err.message);
      }
    };

    // Fetch data initially
    fetchData();

    // Refresh the data every 30 seconds (adjust as needed)
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div>
      <Navbar /> {/* Navbar outside of the refreshing part */}
      <Content data={data} /> {/* Content part that will be refreshed */}
       {/* Footer outside of the refreshing part */}
    </div>
  );
}

export default Fetch;

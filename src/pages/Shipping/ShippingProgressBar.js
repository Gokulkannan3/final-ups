import React, { useState } from 'react';


function ShippingProgressBar() {
  const [apiData, setApiData] = useState({ label: 'Dispatched', match: true });

  // Simulate fetching data from an API and updating the state
  const fetchDataFromApi = () => {
    // Replace this with your actual API call
    setTimeout(() => {
      setApiData({ label: 'OUTFORDEL', match: false });
    }, 1000);
  };

  return (
    <div className="App md:w-auto md:h-auto">
      <button onClick={fetchDataFromApi}>Fetch Data</button>
      <ShippingProgressBar apiData={apiData} />
    </div>
  );
}

export default ShippingProgressBar;
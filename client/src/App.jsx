import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])
  
  // Use effect is used to fetch data from the /members route
  useEffect(() => {
    fetch("http://127.0.0.1/home")
    .then(
      // Capture the response that the /members route sends back (the return function)
      // Put it into JSON format
      res => res.json()
    ).then(
      //Whatever data is inside the JSON, set it equal to data using setData function
      data => {
        setData(data)
        // To make sure that the data is being fetched, log it to the console
        console.log(data)
      }
    )
  }, []) // The empty array is used to make sure that the data is only fetched once
  
  return (
    <div>
      {/* While array is undefined(api is being fetched), it will display loading */}
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        // Else, it will map every element to a p tag to display it
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';

const Motivation = () => {
//   const [watchList, setWatchList] = useState([]);
//   const [timeCategories, setTimeCategories] = useState([]);

//   useEffect(() => {
//     fetchWatchList();
//     fetchTimeCategories();
//   }, []);

//   const fetchWatchList = async () => {
//     const response = await fetch('http://localhost:3000/watch_lists');
//     const data = await response.json();
//     setWatchList(data);
//   };

//   const fetchTimeCategories = async () => {
//     const response = await fetch('/time_categories?user_id=1');
//     const data = await response.json();
//     setTimeCategories(data);
//   };

  return (
    <div>
      <h2>Motivation</h2>
      <h1>Coming soon</h1>
      
      {/* <div>
        <h3>Watch List</h3>
        <ul>
          {watchList.map(person => (
            <li key={person.id}>{person.person_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Time Categories</h3>
        <ul>
          {timeCategories.map(category => (
            <li key={category.id}>{category.category}: {category.time_spent} mins</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Motivation;

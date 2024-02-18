/* Component for displaying a sublist of items inside another component; and can be used for sublists like people in a film, or films on a planet*/
import React from 'react';
import { Link } from "react-router-dom";


function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;
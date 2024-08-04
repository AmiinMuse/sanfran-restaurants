// src/components/Types.js
import React from 'react';
import { Link } from 'react-router-dom';

function Types() {
  return (
    <main>
      <section className="about">
        <div className="types">
          <h3>Types of Restaurants</h3>
          <ol>
            <li><Link to="/type_fastfood">Fast Food</Link></li>
            <li><Link to="#">Food Trucks</Link></li>
            <li><Link to="#">Café</Link></li>
          </ol>
        </div>
        <div className="restaurant-list">
          <h4>Click a type to see a list of restaurants</h4>
        </div>
      </section>
    </main>
  );
}

export default Types;

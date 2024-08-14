// src/components/HitList.js
import React from 'react';

function Hit() {
  return (
    <main>
      <section className="about">
        <div className="types">
          <h3>Types of Restaurants</h3>
          <ol>
            <li onClick={() => console.log('Filtering fast food')}>Fast Food</li>
            <li onClick={() => console.log('Filtering food trucks')}>Food Trucks</li>
            <li onClick={() => console.log('Filtering cafes')}>Café</li>
          </ol>
        </div>
        <div className="restaurant-list">
          <div className="restaurant-item fast-food">
            <img src="https://studiokda.com/wp-content/uploads/2014/11/Lazy-Bear-Logo-1300x521.jpg" alt="Lazy Bear restaurant logo" />

            <h3>Lazy Bear</h3>
            <a href="https://www.lazybearsf.com/">Visit</a>
          </div>
          <div className="restaurant-item food-trucks">
            <img src="https://vrconcierge.com/wp-content/uploads/2020/10/kokkari-estiatorio-san-francisco-ca-logo-1-1.jpg" alt="Kokkari" />
            <h3>Kokkari Restaurant</h3>
            <a href="https://kokkari.com/">Visit</a>
          </div>
          <div className="restaurant-item cafe">
            <img src="https://toast-local-nyc3-production.nyc3.cdn.digitaloceanspaces.com/restaurants/1c9420d3-83a8-4036-8d5e-880eb06b4f21/state-bird-provisions-bg-187325-803.webp" alt="State Bird" />
            <h3>State Bird</h3>
            <a href="https://example.com">Visit</a>
          </div>
          <div className="restaurant-item cafe">
            <img src="https://images.getbento.com/sK5vnQDNSmKFuy5QbKQV_richtable_logo_FINAL_lores.png?w=600&fit=max&auto=compress,format&h=600" alt="Rich Table" />
            <h3>Rich Table</h3>
            <a href="https://example.com">Visit</a>
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hit;

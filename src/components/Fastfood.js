// src/components/FastFood.js
import React from 'react';

function FastFood() {
  return (
    <main>
      <section className="restaurant">
        <div className="restaurant-list">
          <h1>Fast Food Restaurants</h1>
          <div className="restaurant-item">
            <img src="https://cdn.vox-cdn.com/thumbor/WD8sKGxDiEKM6okAaazCz-VulIk=/0x0:1000x375/1200x800/filters:focal(420x108:580x268)/cdn.vox-cdn.com/uploads/chorus_image/image/56468879/Lazy_Dog_Restaurant___Bar.0.jpg" alt="Hazy Dog" />
            <h3>Hazy Dog</h3>
            <a href="/restaurant">Learn More</a>
          </div>
          {/* Add more restaurants here as needed */}
        </div>
      </section>
    </main>
  );
}

export default FastFood;

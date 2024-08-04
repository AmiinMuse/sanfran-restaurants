// src/components/Restaurant.js
import React from 'react';

function Restaurant() {
  return (
    <main>
      <section className="restaurant">
        <div className="restaurant-info">
          <div className="restaurant-text">
            <h1>Hazy Dog</h1>
            <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/cc876ee7-c57d-4610-81e4-8bcc4394dfd3.png" alt="Restaurant" />
            <p>Location: 123 Main St, San Francisco, CA</p>
            <a href="https://www.hayzdogsf.com/">Website (external link)</a>
          </div>
        </div>
        <h1>Restaurant Images</h1>
        <div className="menu-images">
          <div className="menu-item">
            <img src="https://lazydog-assets.s3.amazonaws.com/uploads/nuggets/65a957168fba279df0c7e6bb/POPUP_BannerArtboard_2.jpg" alt="Food Image 1" />
          </div>
          <div className="menu-item">
            <img src="https://www.eatdrinkoc.com/wp-content/uploads/2013/07/lazydog3.jpg" alt="Food Image 2" />
          </div>
          <div className="menu-item">
            <img src="https://res.cloudinary.com/the-infatuation/image/upload/f_auto/q_auto/v1709582984/images/Hayz_Dog_Tramp_1_SF_ERIN_NG_jfsgwn.jpg" alt="Food Image 3" />
          </div>
          <div className="menu-item">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/XwLBJTNtsDCLY00HdYKC9g/348s.jpg" alt="Food Image 4" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Restaurant;

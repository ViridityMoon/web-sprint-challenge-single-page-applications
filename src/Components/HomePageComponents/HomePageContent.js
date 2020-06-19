import React from 'react';

const HomePageContent = () => {
  return (
    <div>
      <h6>Food Delivery in Gotham City</h6>
        <div>
          <img alt='food' src='https://picsum.photos/300/200'></img>
          <h8>McDonald's</h8>
          <p>$ - American - Fast Food - Burgers</p>
          <button>20-30 Min</button>
          <button>$5.99 Delivery Fee</button>
        </div>
        <div>
        <img alt='food' src='https://picsum.photos/300/200'></img>
          <h8>sweetgreen</h8>
          <p>$ - Healthy - Salads</p>
          <button>30-45 Min</button>
          <button>$4.99 Delivery Fee</button>
        </div>
        <div>
        <img alt='food' src='https://picsum.photos/300/200'></img>
          <h8>Starbucks</h8>
          <p>$ - Cafe - Coffee and Tea - Breakfast and Brunch</p>
          <button>10-20 Min</button>
          <button>$3.99 Delivery Fee</button>
        </div>
    </div>
  );
};
export default HomePageContent;

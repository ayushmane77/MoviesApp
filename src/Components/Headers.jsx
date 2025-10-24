import React from 'react';

const Headers = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='bgImage' style={{ marginBottom: '0px' }}>
      <img className='heroImage' src="/hero-img.png" alt="" />
      <h3 className='mainFont' style={{ color: 'white' }}>
        Find <span className='gradient-text'>movies</span> You'll love without the hassle
      </h3>
      <div className='inputField'>
        <img src="search-img.jpg" height={"25px"} width={"25px"} alt="" />
        <input
          type="text"
          placeholder="search through 300+ movies online"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Headers;

import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SliderComponent = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (value) => {
    // Optional: Handle any additional logic when a radio button changes
    setCounter(value);
  };

  return (
    <div className="page1">
      
      <section className="section">
        <div className="slider">
          <div className="slide">
            <input
              type="radio"
              name="radio-btn"
              id="radio-btn1"
              checked={counter === 1}
              onChange={() => handleRadioChange(1)}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio-btn2"
              checked={counter === 2}
              onChange={() => handleRadioChange(2)}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio-btn3"
              checked={counter === 3}
              onChange={() => handleRadioChange(3)}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio-btn4"
              checked={counter === 4}
              onChange={() => handleRadioChange(4)}
            />

            <div className={`st st${counter}`}>
              <img
                className={`nav-banner${counter}`}
                src={`./banner${counter}.png`}
                alt=""
              />
            </div>

            <div className={`st1 st${counter}`}>
              <img
                className={`nav-banner${counter}`}
                src={`./banner2{counter}.png`}
                alt=""
              />
            </div>
            <div className="st">
              <img className="nav-banner3" src="./banner3.png" alt="" />
            </div>
            <div className="st">
              <img className="nav-banner4" src="./banner4.png" alt="" />
            </div>

            <div className="nav-auto">
              <div className="a-b1"></div>
              <div className="a-b2"></div>
              <div className="a-b3"></div>
              <div className="a-b4"></div>
            </div>
            <div className="nav-m">
              <label htmlFor="radio" className="btn0"></label>
              <label htmlFor="radio" className="btn0"></label>
              <label htmlFor="radio" className="btn0"></label>
              <label htmlFor="radio" className="btn0"></label>
            </div>
          </div>
        </div>
      </section>

      <div className="title-head-bar">

        <div className="card-box">

          <div className="channe-logo">
            <img src="./cha-logo.png" alt="" />
          </div>
          <div className="text-btnn">
            <h1>Hiddai xu yatra</h1>
            <p>@hiddaixuyatra‧551 subscribers‧67 videos</p>
            <h2>Hiddai xu yatra is all about travelling (tyo huncha ni afno xuttai duniya sansaar :)....</h2>
            <a href=""><h3>instagram.com/nishan__kiran__chauhan/..... 1 more link</h3></a>
            <div className="btn-wala">
            <button className="pill" type="button">Customize channel</button>
            <button className="pill" type="button">Manage Videos</button>
            </div>
          </div>

        </div>
      </div>

      <div className="card-list">
        <a href="#" className="card-item">
            <img src="./thumbnail1.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>The Unseen Tare Gaun | Finally ,New place Alert at Illam #kanyam</p>
            <h6>248 views.4 months ago</h6></div>
            </a>

        <a href="#" className="card-item">
            <img src="./thumbnail2.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>Fung Fung Jharna Aati babaal #nuwakot #bestplaceKTM #waterfall #ranipauwa</p>
            <h6>382 views.6 months ago</h6></div>
            </a>
        <a href="#" className="card-item">

            <img src="./thumbnail3.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>Nepal | India Border ,Sad reality Short Vlog ,ft Mangalbare</p>
            <h6>112 views  May 2, 2023</h6></div>
            </a>
        <a href="#" className="card-item">
            <img src="./thumbnail1.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>The Unseen Tare Gaun | Finally ,New place Alert at Illam #kanyam</p>
            <h6>248 views.4 months ago</h6></div>
            </a>

        <a href="#" className="card-item">
            <img src="./thumbnail2.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>Fung Fung Jharna Aati babaal #nuwakot #bestplaceKTM #waterfall #ranipauwa</p>
            <h6>382 views.6 months ago</h6></div>
            </a>
        <a href="#" className="card-item">

            <img src="./thumbnail3.jpg" className="yt-thumbnail" alt="Card Image"/>
             <div className="text-card-wrapper">
            <p>Nepal | India Border ,Sad reality Short Vlog ,ft Mangalbare</p>
            <h6>112 views  May 2, 2023</h6></div>
            </a>
           </div>
    </div>
    
  );
};

export default SliderComponent;

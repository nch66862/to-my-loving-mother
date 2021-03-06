import React from "react"
import { Route, Link } from "react-router-dom"
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import picture4 from './picture4.jpg';
import picture5 from './picture5.jpg';
import picture6 from './picture6.jpg';
import picture7 from './picture7.jpg';
import './App.css';

export const MomsBirthday = () => {
  return (
    <>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <div className="photos">
              <img src={picture1} className="picture1-4 photo" alt="logo" />
              <img src={picture2} className="picture2-5 photo" alt="logo" />
              <img src={picture3} className="picture3-6 photo" alt="logo" />
              <img src={picture4} className="picture1-4 photo" alt="logo" />
              <img src={picture5} className="picture2-5 photo" alt="logo" />
              <img src={picture6} className="picture3-6 photo" alt="logo" />
            </div>
            <div className="text">
              <p>
                Happy Birthday
        </p>
              <Link className="App-link" to="/info">MOM</Link>
            </div>
          </header>
        </div>
      </Route>
      <Route exact path="/info">
        <div className="App">
          <header className="App-header">
            <div className="photos">
              <img src={picture7} className="picture7 photo7" alt="logo" />
            </div>
            <div className="text">
              <p>
                I LOVE YOU
              </p>
              <Link className="App-link" to="/">Back</Link>
            </div>
          </header>
        </div>
      </Route>
    </>
  );
}
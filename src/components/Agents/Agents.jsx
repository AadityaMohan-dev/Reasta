import React from "react";
import "./Agent.css";
import { agent_data } from "../Data/DataSet";

function Agents() {
  
  return (
    <>
      <div id="main-index">
        <div id="main-bg">
          <div className="row-1">
            <h1>some nearby good agents</h1>
            <div className="row-srh">
              <div id="col-1">
                <input type="text" placeholder="Enter your Location" />
              </div>
              <div id="col-2">
                <select name="Review" id="review">
                  <option value="all">Review</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div id="col-3">
                <button id="btn">search</button>
              </div>
            </div>
          </div>
          <div className="row-2">
            {agent_data.map((arr) => {
              return <div id="card">
              <div id="card-r1">
                <img src={arr.profile} alt="agent profile" />
              </div>
              <div id="name">{arr.name}</div>
              <div id="card-r2">
                <div id="r">
                  <div id="r1">
                    <div id="r-1">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/star--v1.png"
                        alt="star--v1"
                      />
                    </div>
                    <div id="r-2">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/star--v1.png"
                        alt="star--v1"
                      />
                    </div>
                    <div id="r-3">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/star--v1.png"
                        alt="star--v1"
                      />
                    </div>
                    <div id="r-4">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/star--v1.png"
                        alt="star--v1"
                      />
                    </div>
                    <div id="r-5">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/star--v1.png"
                        alt="star--v1"
                      />
                    </div>
                  </div>
                  <div id="r2">{arr.rating}</div>
                </div>
                <div id="r3">
                  <div id="v-p">view profile</div>
                </div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Agents;

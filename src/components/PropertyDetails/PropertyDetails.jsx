import React from "react";
import "./PropertyDetails.css";
import "remixicon/fonts/remixicon.css";
import { agent_data, propertyDetails_data } from "../Data/DataSet";
function PropertyDetails() {
  const property_data = propertyDetails_data[0]
  const agent_det = agent_data[property_data.agent_id]
  return (
    <>
      <div id="main-row">
        <div className="row-poster">
          <div id="col-l-img">
          <img src={property_data.images[2]} alt="" width="100%" height="100%"/>
          </div>
          <div id="col-r-img">
            <div id="row-1-img">
              <img src={property_data.images[1]} alt="" width="100%"/>
            </div>
            <div id="row-2-img">
              <img src={property_data.images[0]} alt="" width="100%"/>
            </div>
          </div>
        </div>
        <div className="row-form">
          <div id="left-col">
            <div className="col-property-details">
              <div id="title">
                <h1>
                  {property_data.name}
                </h1>
              </div>
              <div id="location">
                <span>{property_data.location}</span>
              </div>
              <div id="pay-methods">
                <div id="cost">
                  <span>$ {property_data.price}</span>
                  <span>other/card payments</span>
                </div>
                <div id="emi">
                  <span>$ {property_data.emi} / month</span>
                  <span>0% emi / month</span>
                </div>
              </div>
              <div id="details">
                <span>
                  {property_data.details}
                </span>
                <span>
                  {property_data.details_exp}
                </span>
                <div id="local-info">
                  <h1>Local Information</h1>
                  <span>
                    {property_data.local_info}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-highlights">
              <h1>Home Highlights</h1>
              <div id="list">
                <ul>
                  <li>
                    Parking <span>{property_data.parking}</span>
                  </li>
                  <li>
                    Outdoor <span>{property_data.outdoor}</span>
                  </li>
                  <li>
                    A/C <span>{property_data.ac}</span>
                  </li>
                  <li>
                    Year Built <span>{property_data.year_build}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    HAQ <span>{property_data.hoa}</span>
                  </li>
                  <li>
                    Price/SqFt <span>$ {property_data.psq}</span>
                  </li>
                  <li>
                    Listed <span>{property_data.listed}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="agent-info">
              <h1>Agent information</h1>
              <div id="agent-profile">
                <img src={agent_det.profile} alt="" height="150px" width="150px "/>
                <div id="agent-data">
                  <span>{agent_det.name}</span>
                  <span>{agent_det.rating}</span>
                  <span>
                    <i class="ri-mail-line"></i><span>{agent_det.email}</span>
                  </span>
                  <span>
                    <i class="ri-phone-line"></i><span>{agent_det.contact}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-form-details">
            <h1>request for visit</h1>

            <div id="form-input">
              <div>
                <i class="ri-user-line"></i>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <i class="ri-mail-line"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <i class="ri-phone-line"></i>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <i class="ri-calendar-line"></i>
                <input type="datetime-local" placeholder="Date" />
              </div>
              <div>
                <textarea
                  name="message"
                  id="msg"
                  cols="40"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <div id="btn">submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;

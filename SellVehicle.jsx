import React from "react";

function Sell() {
  return (
    <section id="sellPage" className="page">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Sell Your Vehicle</div>
            <h2>List Your Vehicle</h2>
          </div>
        </div>

        <form id="sellForm">
          <div className="form-grid">
            <div className="field">
              <label htmlFor="sellerName">Seller Name</label>
              <input id="sellerName" type="text" />
            </div>

            <div className="field">
              <label htmlFor="sellerMobile">Mobile Number</label>
              <input id="sellerMobile" type="tel" />
            </div>

            <div className="field">
              <label htmlFor="sellerEmail">Email</label>
              <input id="sellerEmail" type="email" />
            </div>

            <div className="field">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <select id="vehicleType">
                <option value="">Select Type</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="vehicleBrand">Brand</label>
              <input id="vehicleBrand" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleModel">Model</label>
              <input id="vehicleModel" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleVariant">Variant</label>
              <input id="vehicleVariant" type="text" />
            </div>

            <div className="field">
              <label htmlFor="manufacturingYear">Manufacturing Year</label>
              <input id="manufacturingYear" type="number" />
            </div>

            <div className="field">
              <label htmlFor="registrationYear">Registration Year</label>
              <input id="registrationYear" type="number" />
            </div>

            <div className="field">
              <label htmlFor="vehiclePrice">Price</label>
              <input id="vehiclePrice" type="number" />
            </div>

            <div className="field">
              <label htmlFor="vehicleKm">Kilometers</label>
              <input id="vehicleKm" type="number" />
            </div>

            <div className="field">
              <label htmlFor="vehicleFuel">Fuel</label>
              <select id="vehicleFuel">
                <option value="">Select Fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="vehicleTransmission">Transmission</label>
              <select id="vehicleTransmission">
                <option value="">Select Transmission</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="vehicleOwners">Number of Owners</label>
              <input id="vehicleOwners" type="number" />
            </div>

            <div className="field">
              <label htmlFor="vehicleColor">Color</label>
              <input id="vehicleColor" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleState">State</label>
              <input id="vehicleState" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleCity">City</label>
              <input id="vehicleCity" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleArea">Area</label>
              <input id="vehicleArea" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleLocation">Location</label>
              <input id="vehicleLocation" type="text" />
            </div>

            <div className="field">
              <label htmlFor="vehicleImage">Main Image URL</label>
              <input id="vehicleImage" type="url" />
            </div>

            <div className="field">
              <label htmlFor="vehicleImages">Additional Image URLs</label>
              <input id="vehicleImages" type="text" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="vehicleDescription">Description</label>
            <textarea id="vehicleDescription" rows="5"></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-outline">
              Save Draft
            </button>

            <button type="button" className="btn btn-outline">
              Preview Listing
            </button>

            <button type="submit" className="btn btn-primary">
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Sell;
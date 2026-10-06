import React from "react";

function Compare() {
  return (
    <section id="comparePage" className="page">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Compare Vehicles</div>
            <h2>Compare Vehicles</h2>
          </div>

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => window.clearCompare?.()}
          >
            Clear All
          </button>
        </div>

        <div id="compareContent"></div>

        <div id="compareEmpty" className="empty-state">
          <h3>No vehicles to compare</h3>
          <p>Add vehicles to compare them side by side.</p>
        </div>
      </div>
    </section>
  );
}

export default Compare;
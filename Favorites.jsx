import React from "react";

function Favorites() {
  return (
    <section id="favoritesPage" className="page">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Saved Vehicles</div>
            <h2>My Favorites</h2>
          </div>
        </div>

        <div id="favoritesGrid" className="vehicle-grid"></div>

        <div id="favoritesEmpty" className="empty-state">
          <h3>No favorite vehicles</h3>
          <p>You haven't added any vehicles to your favorites yet.</p>
        </div>
      </div>
    </section>
  );
}

export default Favorites;
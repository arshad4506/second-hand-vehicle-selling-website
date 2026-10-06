import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [myVehicles, setMyVehicles] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loggedUser =
      JSON.parse(localStorage.getItem("loggedInUser"));

    const savedVehicles =
      JSON.parse(localStorage.getItem("userVehicles")) || [];

    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setUser(loggedUser);
    setMyVehicles(savedVehicles);
    setFavorites(savedFavorites);
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.showPage("homePage");
  };

  const removeVehicle = (id) => {
    const updated = myVehicles.filter(
      (vehicle) => vehicle.id !== id
    );

    setMyVehicles(updated);

    localStorage.setItem(
      "userVehicles",
      JSON.stringify(updated)
    );
  };

  if (!user) {
    return (
      <div className="dashboard-page">
        <div className="container">

          <div className="dashboard-login-message">
            <h1>Login Required</h1>

            <p>
              Please login to access your dashboard.
            </p>

            <button
              onClick={() =>
                window.showPage("loginPage")
              }
            >
              Login
            </button>

            <button
              onClick={() =>
                window.showPage("registerPage")
              }
            >
              Register
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="container">

        <div className="dashboard-header">
          <div>
            <h1>My Dashboard</h1>

            <p>
              Welcome, <strong>{user.name}</strong>
            </p>
          </div>

          <button onClick={logout}>
            Logout
          </button>
        </div>

        <div className="dashboard-stats">

          <div className="dashboard-stat">
            <h2>{myVehicles.length}</h2>
            <p>My Listings</p>
          </div>

          <div className="dashboard-stat">
            <h2>{favorites.length}</h2>
            <p>Favorites</p>
          </div>

          <div className="dashboard-stat">
            <h2>1</h2>
            <p>Account</p>
          </div>

        </div>

        <div className="dashboard-profile">
          <h2>Profile Information</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>

        <div className="dashboard-listings">

          <div className="section-heading">
            <h2>My Vehicle Listings</h2>

            <button
              onClick={() =>
                window.showPage("sellPage")
              }
            >
              + Sell Vehicle
            </button>
          </div>

          {myVehicles.length === 0 ? (
            <div className="empty-dashboard">
              <p>
                You have not listed any vehicles yet.
              </p>

              <button
                onClick={() =>
                  window.showPage("sellPage")
                }
              >
                List Your Vehicle
              </button>
            </div>
          ) : (
            <div className="dashboard-vehicles">

              {myVehicles.map((vehicle) => (
                <div
                  className="dashboard-vehicle"
                  key={vehicle.id}
                >
                  <div>
                    <h3>
                      {vehicle.brand} {vehicle.model}
                    </h3>

                    <p>
                      ₹
                      {vehicle.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <p>
                      {vehicle.year} •{" "}
                      {vehicle.km.toLocaleString(
                        "en-IN"
                      )}{" "}
                      km
                    </p>

                    <p>
                      📍 {vehicle.location}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeVehicle(vehicle.id)
                    }
                  >
                    Remove Listing
                  </button>
                </div>
              ))}

            </div>
          )}

        </div>

        <div className="dashboard-actions">

          <button
            onClick={() =>
              window.showPage("favoritesPage")
            }
          >
            View Favorites
          </button>

          <button
            onClick={() =>
              window.showPage("comparePage")
            }
          >
            Compare Vehicles
          </button>

          <button
            onClick={() =>
              window.showPage("browsePage")
            }
          >
            Browse Vehicles
          </button>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
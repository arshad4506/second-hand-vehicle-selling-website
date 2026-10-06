import React from "react";
import SearchBar from "../components/SearchBar";
import VehicleCard from "../components/VehicleCard";
import { useVehicles } from "../context/VehicleContext";

function Home() {
  const { vehicles } = useVehicles();

  const featuredVehicles = vehicles.slice(0, 4);

  const recentVehicles = [...vehicles]
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    )
    .slice(0, 4);

  const brands = [
    ...new Set(vehicles.map((vehicle) => vehicle.brand)),
  ].slice(0, 10);

  return (
    <section id="homePage" className="page active">

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">AUTO BAZAAR</div>

            <h1>Find Your Perfect Second-Hand Vehicle</h1>

            <p>
              Buy and sell quality second-hand cars and bikes
              with confidence.
            </p>

            <SearchBar />

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  window.showPage?.("browsePage")
                }
              >
                Browse Vehicles
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  window.showPage?.("sellPage")
                }
              >
                Sell Your Vehicle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore</div>
              <h2>
                Buy Second-Hand Vehicles With Confidence
              </h2>
            </div>
          </div>

          <div className="intro-grid">
            <div className="intro-card">
              <h3>Cars</h3>
              <p>
                Find reliable second-hand cars from popular
                brands.
              </p>
            </div>

            <div className="intro-card">
              <h3>Bikes</h3>
              <p>
                Explore affordable used bikes for every
                requirement.
              </p>
            </div>

            <div className="intro-card">
              <h3>Easy Search</h3>
              <p>
                Search vehicles by brand, model, location
                and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Featured</div>
              <h2>Featured Vehicles</h2>
            </div>
          </div>

          <div id="featuredGrid" className="vehicle-grid">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                Latest Listings
              </div>
              <h2>Recently Added Vehicles</h2>
            </div>
          </div>

          <div id="recentGrid" className="vehicle-grid">
            {recentVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Popular</div>
              <h2>Popular Brands</h2>
            </div>
          </div>

          <div id="brandGrid" className="brand-grid">
            {brands.map((brand) => (
              <button
                type="button"
                className="brand-card"
                key={brand}
                onClick={() => {
                  window.showPage?.("browsePage");
                  window.filterByBrand?.(brand);
                }}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                Why Auto Bazaar
              </div>
              <h2>Why Choose Us?</h2>
            </div>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Quality Vehicles</h3>
              <p>
                Discover carefully listed second-hand
                vehicles.
              </p>
            </div>

            <div className="why-card">
              <h3>Easy Comparison</h3>
              <p>
                Compare multiple vehicles before making
                a decision.
              </p>
            </div>

            <div className="why-card">
              <h3>Simple Selling</h3>
              <p>
                List your vehicle quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                Customer Reviews
              </div>
              <h2>What Our Users Say</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                "Auto Bazaar made it very easy to find a
                good second-hand vehicle."
              </p>
              <h4>Rahul</h4>
              <span>Hyderabad</span>
            </div>

            <div className="testimonial-card">
              <p>
                "The comparison and search features helped
                me choose the right vehicle."
              </p>
              <h4>Priya</h4>
              <span>Telangana</span>
            </div>

            <div className="testimonial-card">
              <p>
                "Listing my vehicle was simple and
                straightforward."
              </p>
              <h4>Arjun</h4>
              <span>Karimnagar</span>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}

export default Home;
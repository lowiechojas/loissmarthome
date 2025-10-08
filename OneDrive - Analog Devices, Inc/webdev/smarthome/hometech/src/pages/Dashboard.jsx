import React from 'react'
import { NavLink, Link,Outlet, useLocation } from 'react-router-dom'
import About from './About'
import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'

const Dashboard = () => {
    const [selected, setSelected] = useState(localStorage.getItem("selectedArea") || null);
  const [switches, setSwitches] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchAreas = async () => {
      const { data, error } = await supabase.from("sensors").select("area");

      if (error) {
        console.error("Error fetching areas:", error);
      } else {
        const uniqueAreas = [...new Set(data.map((item) => item.area))];
        setAreas(uniqueAreas);
      }

      setLoading(false);
    };

    fetchAreas();
  }, []);

   useEffect(() => {
    const fetchSwitches = async () => {
      if (!selected) return;

      const { data, error } = await supabase
        .from("sensors")
        .select("switchname")
        .eq("area", selected);

      if (error) {
        console.error("Error fetching switches:", error);
      } else {
        setSwitches(data);
      }
    };

    fetchSwitches();
  }, [selected]);

  // Persist selected area
  useEffect(() => {
    if (selected) {
      localStorage.setItem("selectedArea", selected);
    }
  }, [selected]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='dashboard-container'>
      <div className='left-div'>

        <div className='top-div'>

          <div className='top-div-left center-text'>
            <h4>Good morning, Lois!</h4>
          </div>

          <div className='top-div-right'>
            <div>
              <h1>Time</h1>
              <h4>Date, Day</h4>
            </div>
            <div>
              <h1>Temperature</h1>
            </div>
            

          </div>

        </div>

        <div className='bottom-div'>
          <div className='house-menu'>
            <ul className='house-menu-list'>
              {areas.map((area, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected(area);
                    localStorage.setItem("selectedArea", area);
                  }}
                  className={`nav-items ${
                    localStorage.getItem("selectedArea") === area
                      ? "active-bg"
                      : "inactive-bg"
                  }`}
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
           <div className="sensors-div">
            <h4>Sensors in {selected || "..."}</h4>
            <ul>
              {switches.length > 0 ? (
                switches.map((item, index) => (
                  <li key={index}>{item.switchname}</li>
                ))
              ) : (
                <li>No sensors found</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className='right-div'>
        <h1>Right Div</h1>
      </div>

    </div>
  )
}

export default Dashboard
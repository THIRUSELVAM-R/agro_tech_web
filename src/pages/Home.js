import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";
import AirIcon from "@mui/icons-material/Air";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import SpeedIcon from "@mui/icons-material/Speed";
import WindPowerIcon from "@mui/icons-material/WindPower";
import HeightIcon from "@mui/icons-material/Height";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ThermoStatIcon from "@mui/icons-material/Thermostat";
function Home() {
  const [reloadKey, setReloadKey] = useState(0);
  let intrevalRef = null;
  useEffect(() => {
    intrevalRef = setInterval(() => {
      setReloadKey((val) => val + 1);
      console.log("reloaded");
    }, 32000);
    return () => clearInterval(intrevalRef);
  }, []);
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <Typography variant="h5">Welcome To Agro Tech Drone</Typography>
      </div>
      <div style={{ padding: "30px" }}>
        <Typography variant="body1">You Can See</Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", margin: "20px" }}>
            <NetworkWifiIcon fontSize="large" />
            <p>Network Status</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <Battery5BarIcon fontSize="large" />
            <p>Battery Status</p>
          </div>

          <div style={{ textAlign: "center", margin: "20px" }}>
            <AirIcon fontSize="large" />
            <p>Wind Velocity</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <LocationOnIcon fontSize="large" />
            <p>Location</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <ThermoStatIcon fontSize="large" />
            <p>Temperature</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <ToggleOffIcon fontSize="large" />
            <p>Drone Status</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <SpeedIcon fontSize="large" />
            <p>Drone Speed</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <WindPowerIcon fontSize="large" />
            <p>Roater Status</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <HeightIcon fontSize="large" />
            <p>Height</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <QueryBuilderIcon fontSize="large" />
            <p>Runtime</p>
          </div>
        </div>
        <iframe
          key={reloadKey}
          width="100%"
          height="400px"
          src="https://charts.mongodb.com/charts-project-0-ndojn/embed/charts?id=62f5c8a6-3530-4aaa-8a50-ac874e13088a&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
    </>
  );
}

export default Home;

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

function LiveSurvey() {
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
      <div style={{ padding: "30px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", margin: "20px" }}>
            <NetworkWifiIcon fontSize="large" />
            <p>1.5 Mb / s</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <Battery5BarIcon fontSize="large" />
            <p>59%</p>
          </div>

          <div style={{ textAlign: "center", margin: "20px" }}>
            <AirIcon fontSize="large" />
            <p>12 Km / hr</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <LocationOnIcon fontSize="large" />
            <p>Perunduirai</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <ThermoStatIcon fontSize="large" />
            <p>30 deg C</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <ToggleOffIcon fontSize="large" />
            <p>ON</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <SpeedIcon fontSize="large" />
            <p>40 Km / hr</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <WindPowerIcon fontSize="large" />
            <p>ON</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <HeightIcon fontSize="large" />
            <p>50 M</p>
          </div>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <QueryBuilderIcon fontSize="large" />
            <p>45:00 Min</p>
          </div>
        </div>
        <iframe
          key={reloadKey}
          width="100%"
          height="500px"
          src="https://charts.mongodb.com/charts-project-0-ndojn/embed/charts?id=62a6f58c-8f99-46b8-885a-195c350f8b95&maxDataAge=3600&theme=light&autoRefresh=true"
          title="Graph"
        />
      </div>
    </>
  );
}

export default LiveSurvey;

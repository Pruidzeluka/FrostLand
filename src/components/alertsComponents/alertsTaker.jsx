import React from "react";
import { useTranslation } from "react-i18next";

function AlertsTaker({ weather }) {
  const { t } = useTranslation();

  const Heat = () => (
    <div>
      <p>
        <span className="text-black font-bold">{t("Heat Warning")}</span>
      </p>
      <p className="mt-1">
        {t("Very high temperatures are expected. It is recommended to:")}
      </p>
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>{t("Stay in cool or shaded areas")}</li>
        <li>{t("Drink water regularly")}</li>
        <li>{t("Avoid heavy physical activity during peak heat")}</li>
        <li>{t("Check local weather updates")}</li>
      </ol>
    </div>
  );

  const Cold = () => (
    <div>
      <p>
        <span className="text-black font-bold">{t("Cold Warning")}</span>
      </p>
      <p className="mt-1">
        {t("Very low temperatures are expected. It is recommended to:")}
      </p>
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>{t("Dress warmly in layers")}</li>
        <li>{t("Avoid prolonged exposure to the cold")}</li>
        <li>{t("Limit time spent outdoors")}</li>
        <li>{t("Be careful on icy surfaces")}</li>
      </ol>
    </div>
  );

  const Snow = () => (
    <div>
      <p>
        <span className="text-black font-bold">{t("Heavy Snowfall Warning")}</span>
      </p>
      <p className="mt-1">
        {t("Severe snowfall is expected, which may lead to reduced visibility, slippery roads, and travel delays. It’s recommended to:")}
      </p>
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>{t("Avoid unnecessary travel")}</li>
        <li>{t("Walk and drive carefully")}</li>
        <li>{t("Keep warm and dress in layers")}</li>
        <li>{t("Stay updated with local weather alerts")}</li>
      </ol>
    </div>
  );

  const Gale = () => (
    <div>
      <p>
        <span className="text-black font-bold">{t("Gale Warning")}</span>
      </p>
      <p className="mt-1">
        {t("Very strong winds are expected, which may cause property damage and dangerous travel conditions. It is recommended to:")}
      </p>
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>{t("Secure outdoor objects")}</li>
        <li>{t("Avoid travel if possible")}</li>
        <li>{t("Drive and walk with extreme caution")}</li>
        <li>{t("Follow local weather warnings")}</li>
      </ol>
    </div>
  );

  if (!weather || !weather.main) {
    return <h1 className="text-gray-400 text-5xl">{t("No Data")}</h1>;
  }

  const temp = weather.main.temp;
  const weatherMain = weather.weather[0].main.toLowerCase();
  const windSpeed = weather.wind?.speed || 0;

  const alerts = [];

  if (temp >= 30) alerts.push(<Heat key="heat" />);
  if (weatherMain.includes("snow")) alerts.push(<Snow key="snow" />);
  if (temp < 0) alerts.push(<Cold key="cold" />);
  if (windSpeed >= 29) alerts.push(<Gale key="gale" />);

  if (alerts.length === 0) {
    return <h1 className="text-gray-400 text-5xl">{t("No Data")}</h1>;
  }
  console.log(weather.weather[0])

  return (
    <div className="space-y-6">
      {alerts.map((item, index) => (
        <div key={index}>
          {item}
          {index < alerts.length - 1 && <hr className="w-1/3 my-6 border-gray-300" />}
        </div>
      ))}
    </div>
  );
}

export default AlertsTaker;

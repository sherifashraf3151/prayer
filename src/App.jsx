// Import React hooks and the Prayer component
import { useEffect, useState } from "react";
import Prayer from "./components/Prayer";

// Define the main App component
function App() {
  // State to store prayer times data
  const [PrayerTimes, setPrayerTimes] = useState({});
  // State to store the current date
  const [DateTime, setDateTime] = useState("");
  // State to store the selected city
  const [City, setCity] = useState("Cairo");

  // Array of cities with Arabic names and English values
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الاسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "أسوان", value: "Aswan" },
    { name: "الاقصر", value: "Luxor" },
  ];

  // useEffect hook to fetch prayer times when City changes
  useEffect(() => {
    // Function to fetch prayer times from API
    const fetchPrayerTimes = async () => {
      try {
        // Get today's date in YYYY-MM-DD format
        const today = new Date();
const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        // Fetch data from Aladhan API using city and country
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=${City}&country=Egypt`
        );
        // Parse the JSON response
        const data_Prayer = await response.json();

        // Set the prayer times state with timings data
        setPrayerTimes(data_Prayer.data.timings);
        // Set the date state with Gregorian date
        setDateTime(data_Prayer.data.date.gregorian.date);
      } catch (error) {
        // Log any errors to console
        console.log(error);
      }
    };

    // Call the fetch function
    fetchPrayerTimes();
  }, [City]); // Dependency array: re-run when City changes

  // Function to format time from 24-hour to 12-hour format with AM/PM
  const formatTimes = (time) => {
    // If no time provided, return default
    if (!time) {
      return "00:00";
    }

    // Split time into hours and minutes, convert to numbers
    let [hours, minutes] = time.split(":").map(Number);
    // Determine AM or PM
    const perd = hours >= 12 ? "PM" : "AM";
    // Convert to 12-hour format
    hours = hours % 12 || 12;
    // Return formatted time with leading zero for minutes if needed
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${perd}`;
  };

  // Return the JSX to render the component
  return (
    // React Fragment to wrap multiple elements
    <>
      {/* Main section with background */}
      <section>
        {/* Container div for layout */}
        <div className="container">
          {/* Top section with city selector and date */}
          <div className="top_sec">
            {/* City selection div */}
            <div className="city">
              {/* Heading for city */}
              <h3>المدينة</h3>
              {/* Select dropdown for cities */}
              <select name="" id="" onChange={(e) => setCity(e.target.value)}>
                {/* Map over cities array to create options */}
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {" "}
                    {city.name}{" "}
                  </option>
                ))}
              </select>
            </div>

            {/* Date display div */}
            <div className="date">
              {/* Heading for date */}
              <h3>التاريخ</h3>
              {/* Display the current date */}
              <h4>{DateTime}</h4>
            </div>
          </div>

          {/* Prayer time components for each prayer */}
          <Prayer name={"الفجر"} time={formatTimes(PrayerTimes.Fajr)} />
          <Prayer name={"الظهر"} time={formatTimes(PrayerTimes.Dhuhr)} />
          <Prayer name={"العصر"} time={formatTimes(PrayerTimes.Asr)} />
          <Prayer name={"المغرب"} time={formatTimes(PrayerTimes.Maghrib)} />
          <Prayer name={"العشاء"} time={formatTimes(PrayerTimes.Isha)} />
        </div>
      </section>
    </>
  );
}

// Export the App component as default
export default App;

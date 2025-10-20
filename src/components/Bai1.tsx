import { useState } from "react";
import axios from "axios";

function Bai1() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data.current_condition[0]);
    } catch (err) {
      alert("Không tìm thấy thành phố!");
    }
  };

  return (
    <div>
      <h2>Ứng dụng Thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Xem</button>

      {weather && (
        <div>
          <p><b>Nhiệt độ:</b> {weather.temp_C}°C</p>
          <p><b>Tình trạng:</b> {weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}
export default Bai1;

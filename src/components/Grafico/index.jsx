import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Grafico({titulo, data, dataKey1, dataKey2, dataKey3, dataKey4, dataKey5, dataKey6, grid}) {

  return (
    <div className="grafico">
      <h3 className="tituloGrafico">{titulo}</h3>
      <ResponsiveContainer width="99%" aspect={4 / 1}>
          <LineChart data={data}>
              <XAxis dataKey={dataKey6} stroke="#5550bd" />
              <YAxis/>
              <Line type="monotone" dataKey={dataKey1} stroke="#d3d3d3" />
              <Line type="monotone" dataKey={dataKey2} stroke="#00ff00" />
              <Line type="monotone" dataKey={dataKey3} stroke="#FFFF00" />
              <Line type="monotone" dataKey={dataKey4} stroke="#FFA500" />
              <Line type="monotone" dataKey={dataKey5} stroke="#FF0000" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"buttonLargeWidget " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget">
      <h3 className="tituloLargeWidget">Funcionários</h3>
      <table className="tabelaLargeWidget">
        <tr className="trLargeWidget">
          <th className="thLargeWidget">Nome</th>
          <th className="thLargeWidget">Cargo</th>
          <th className="thLargeWidget">Status</th>
        </tr>

        <tr className="trLargeWidget">
          <td className="userLargeWidget">
            {" "}
            <img
              src="https://i.imgur.com/bZc7Lbb.jpg"
              alt=""
              className="ImgLargeWidget"
            />
            <span className="nomeLargeWidget">Edson Reis</span>
          </td>
          <td className="dataLargeWidget">Médico</td>
          <td className="statusLargeWidget">
            <Button type="Trabalhando" />
          </td>
        </tr>
        <tr className="trLargeWidget">
          <td className="userLargeWidget">
            {" "}
            <img
              src="https://i.imgur.com/ASx4YMr.jpg"
              alt=""
              className="ImgLargeWidget"
            />
            <span className="nomeLargeWidget">Giovani Machado</span>
          </td>
          <td className="dataLargeWidget">Enfermeiro</td>
          <td className="statusLargeWidget">
            <Button type="Folga" />
          </td>
        </tr>
        <tr className="trLargeWidget">
          <td className="userLargeWidget">
            {" "}
            <img
              src="https://i.imgur.com/NjZikgz.jpg"
              alt=""
              className="ImgLargeWidget"
            />
            <span className="nomeLargeWidget">Victor Tortelli</span>
          </td>
          <td className="dataLargeWidget">Atendente</td>
          <td className="statusLargeWidget">
            <Button type="Intervalo" />
          </td>
        </tr>
      </table>
    </div>
  );
}

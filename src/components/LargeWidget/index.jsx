import React from "react";
import "./styles.css";

export default function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"buttonLargeWidget " + type}>{type}</button>;
  };
  return (
    <div className="largeWidget">
      <h3 className="tituloLargeWidget">Latest Transactions</h3>
      <table className="tabelaLargeWidget">
        <tr className="trLargeWidget">
          <th className="thLargeWidget">Costumer</th>
          <th className="thLargeWidget">Date</th>
          <th className="thLargeWidget">Amount</th>
          <th className="thLargeWidget">Status</th>
        </tr>

        <tr className="trLargeWidget">
          <td className="userLargeWidget">
            {" "}
            <img
              src="https://i.imgur.com/NjZikgz.jpg"
              alt=""
              className="ImgLargeWidget"
            />
            <span className="nomeLargeWidget">Vitão O Cara</span>
          </td>
          <td className="dataLargeWidget">2 Jun 2021</td>
          <td className="valorLargeWidget">@122.00</td>
          <td className="statusLargeWidget">
            <Button type="Approved" />
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
            <span className="nomeLargeWidget">Vitão O Cara</span>
          </td>
          <td className="dataLargeWidget">2 Jun 2021</td>
          <td className="valorLargeWidget">@122.00</td>
          <td className="statusLargeWidget">
            <Button type="Declined" />
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
            <span className="nomeLargeWidget">Vitão O Cara</span>
          </td>
          <td className="dataLargeWidget">2 Jun 2021</td>
          <td className="valorLargeWidget">@122.00</td>
          <td className="statusLargeWidget">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

import React from "react";
import "webdatarocks/webdatarocks.css";
import * as WebDataRocksReact from "react-webdatarocks";

export default function Relatorios() {
  return (
    <div>
      <WebDataRocksReact.Pivot
        toolbar={true}
        componentFolder="https://cdn.webdatarocks.com/"
        width="100%"
        report="https://cdn.webdatarocks.com/reports/report.json"
      />
    </div>
  );
}

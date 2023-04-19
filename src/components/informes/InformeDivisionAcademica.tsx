import React, { useState } from 'react';
import { PieChart } from '../PieChart';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { DataAcademias } from '../../utils/Data';

import { PDFDocument } from 'pdf-lib';
import * as XLSX from "xlsx";

Chart.register(CategoryScale);

export const InformeDivisionAcademica = () => {

  //GENERAR GRAFICA
  const [chartData, setChartData] = useState({
    labels: DataAcademias.map((data) => data.name),
    datasets: [
      {
        label: "Numero de incidencias",
        data: DataAcademias.map((data) => data.incidencias),
        backgroundColor: [
          "#08B731",
          "#08A6B7",
          "#271AD7",
          "#D01AD7",
          "#F38D26",
          "#F32626"
        ],
        borderColor: "black",
        borderWidth: 0.5
      }
    ]
  });

  //GENERAR ARCHIVO EXCEL
  const generateExcel = () => {
    const sheet = XLSX.utils.json_to_sheet(DataAcademias);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "Division academica");

    const tiempoTrascurrido = Date.now();
    const fecha = new Date(tiempoTrascurrido);
    const hoy = fecha.toDateString();
    XLSX.writeFile(wb, `Informe divisiones academicas - ${hoy}.xlsx`);
  }

  //GENERAR PDF
  const generatePDF = () => {
    const canvas = document.querySelector('canvas');
    const imgData = canvas.toDataURL('image/png');
    const pdf = new PDFDocument();
    pdf.addImage(imgData, 'PNG', 40, 60, 120, 120);
    const headers = [['División academica', 'Numero de incidencias']];
    const datos = DataAcademias.map(item => [item.name, item.incidencias]);
    pdf.autoTable({ head: headers, body: datos });

    const tiempoTranscurrido = Date.now();
    const fecha = new Date(tiempoTranscurrido);
    const hoy = fecha.toDateString();
    pdf.save(`Informe divisiones academicas - ${hoy}.pdf`);
  }

  return (
    <div>
        <PieChart chartData={chartData} />
        <div style={{display:'flex'}}>
          <div style={{width:"50%", textAlign:"center"}}>
            <button onClick={generatePDF} style={{margin:30,backgroundColor:"#9F1D1D",color:"#fff", borderRadius:20,padding:8}}>Descargar PDF</button>
          </div>
          <div style={{width:"50%",textAlign:'center'}}>
            <button onClick={generateExcel} style={{margin:30, backgroundColor:"#269315",color:"#fff",borderRadius:20,padding:8}}>Descargar XMLS</button>
          </div>
        </div>
    </div>
  )
}
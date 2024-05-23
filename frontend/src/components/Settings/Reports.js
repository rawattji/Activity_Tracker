import React, { useState, useEffect } from 'react';

const Reports = () => {
//   const [reportType, setReportType] = useState('daily');
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     fetchReports(reportType);
//   }, [reportType]);

//   const fetchReports = async (type) => {
//     const response = await fetch(`/reports/generate?user_id=1&report_type=${type}`);
//     const data = await response.json();
//     setReports(data);
//   };

  return (
    <div>
      <h2>Reports.....coming soon</h2>
      {/* <select onChange={(e) => setReportType(e.target.value)} value={reportType}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select> */}
      {/* <div>
        {reports.map(report => (
          <div key={report.id}>{report.content}</div>
        ))}
      </div> */}
    </div>
  );
};

export default Reports;

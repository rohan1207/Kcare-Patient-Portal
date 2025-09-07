import React from 'react';
import Download from 'react-feather/dist/icons/download';

const ReportsPage = () => {
  // Dummy data for lab reports
  const reports = [
    { id: 1, name: 'Complete Blood Count (CBC) - Krsnaa Diagnostics', date: '2025-08-14', status: 'Available' },
    { id: 2, name: 'Lipid Profile - KCare Lab', date: '2025-08-14', status: 'Available' },
    { id: 3, name: 'Thyroid Function Test (T3, T4, TSH) - Krsnaa Diagnostics', date: '2025-06-05', status: 'Available' },
    { id: 4, name: 'Urine Routine & Microscopy - KCare Lab', date: '2025-06-05', status: 'Available' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Lab Reports</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-stone-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {reports.map(report => (
                <tr key={report.id} className="hover:bg-stone-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="flex items-center gap-2 text-teal-600 hover:text-teal-900">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

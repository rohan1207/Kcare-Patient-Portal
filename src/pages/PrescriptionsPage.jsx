import React from 'react';
import Clipboard from 'react-feather/dist/icons/clipboard';

const PrescriptionsPage = () => {
  // Dummy data for prescriptions
  const prescriptions = [
    { id: 1, name: 'Amoxicillin 500mg', doctor: 'Dr. Ben Adams', date: '2025-05-20', status: 'Active', refills: 1 },
    { id: 2, name: 'Ibuprofen 200mg', doctor: 'Dr. Emily Carter', date: '2024-11-10', status: 'Expired', refills: 0 },
    { id: 3, name: 'Vitamin D 1000IU', doctor: 'Dr. Emily Carter', date: '2025-08-15', status: 'Active', refills: 3 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">My Prescriptions</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stone-200">
            <thead className="bg-stone-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Medication</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Prescribed by</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Refills Left</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-200">
              {prescriptions.map(rx => (
                <tr key={rx.id} className="hover:bg-stone-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">{rx.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">{rx.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">{rx.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      rx.status === 'Active' ? 'bg-teal-100 text-teal-800' : 'bg-stone-100 text-stone-800'
                    }`}>
                      {rx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500 text-center">{rx.refills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionsPage;

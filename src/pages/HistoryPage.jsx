import React from 'react';
import FileText from 'react-feather/dist/icons/file-text';

const HistoryPage = () => {
  // Dummy data for medical history
  const history = [
    { id: 1, date: '2025-08-15', doctor: 'Dr. Pramod Kadam', diagnosis: 'Routine Check-up', notes: 'Patient in good health. Advised to continue with regular exercise and balanced diet. Recommended local Maharashtrian diet modifications.' },
    { id: 2, date: '2025-05-20', doctor: 'Dr. Anjali Deshmukh', diagnosis: 'Seasonal Allergies', notes: 'Prescribed antihistamines. Common during Pune monsoon season. Follow-up in one month if symptoms persist.' },
    { id: 3, date: '2024-11-10', doctor: 'Dr. Pramod Kadam', diagnosis: 'Minor Sprain', notes: 'Ankle sprain from cricket practice. Advised R.I.C.E. treatment and traditional turmeric paste application.' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Medical History</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        <ul className="divide-y divide-stone-200">
          {history.map(record => (
            <li key={record.id} className="p-6 hover:bg-stone-50">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <FileText className="text-teal-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500">{record.date}</p>
                  <h3 className="text-lg font-bold text-stone-800 mt-1">Diagnosis: {record.diagnosis}</h3>
                  <p className="text-stone-600 mt-1">Consulted with <span className="font-semibold">{record.doctor}</span></p>
                  <p className="text-stone-500 mt-2">Notes: {record.notes}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;

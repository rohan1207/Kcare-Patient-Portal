

import React from 'react';
import Calendar from 'react-feather/dist/icons/calendar';
import Clock from 'react-feather/dist/icons/clock';
import User from 'react-feather/dist/icons/user';

const AppointmentsPage = () => {
  // Dummy data for appointments
  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Pramod Kadam', specialty: 'General Surgeon', date: '2025-09-10', time: '11:00 AM' },
  ];

  const pastAppointments = [
    { id: 2, doctor: 'Dr. Anjali Deshmukh', specialty: 'Dermatologist', date: '2025-08-15', time: '02:30 PM' },
    { id: 3, doctor: 'Dr. Pramod Kadam', specialty: 'General Surgeon', date: '2025-07-22', time: '10:00 AM' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Appointments</h1>

      {/* Upcoming Appointments */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Upcoming</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {upcomingAppointments.map(appt => (
            <div key={appt.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <p className="text-xl font-bold text-teal-800">{appt.doctor}</p>
                <p className="text-stone-600">{appt.specialty}</p>
              </div>
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <div className="flex items-center gap-2 text-stone-600">
                  <Calendar size={18} />
                  <span>{appt.date}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <Clock size={18} />
                  <span>{appt.time}</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
                Reschedule
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Appointments */}
      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Past</h2>
        <div className="space-y-4">
          {pastAppointments.map(appt => (
            <div key={appt.id} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-stone-800">{appt.doctor}</p>
                <p className="text-sm text-stone-500">{appt.specialty}</p>
              </div>
              <p className="text-sm text-stone-500">{appt.date}</p>
              <button className="text-teal-600 hover:underline">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;

import React from 'react';
import Calendar from 'react-feather/dist/icons/calendar';
import Bell from 'react-feather/dist/icons/bell';
import FileText from 'react-feather/dist/icons/file-text';

const DashboardPage = () => {
  // Dummy data
  const upcomingAppointment = {
    doctor: 'Dr. Emily Carter',
    specialty: 'Cardiologist',
    date: 'September 10, 2025',
    time: '11:00 AM',
  };

  const recentNotifications = [
    { id: 1, message: 'Your appointment with Dr. Carter is confirmed.' },
    { id: 2, message: 'New prescription added for Vitamin D.' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointment */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="text-teal-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Upcoming Appointment</h2>
          </div>
          <p className="text-stone-600">You have an upcoming appointment with:</p>
          <p className="font-bold text-lg text-teal-800 mt-2">{upcomingAppointment.doctor}</p>
          <p className="text-stone-500">{upcomingAppointment.specialty}</p>
          <p className="text-stone-500 mt-2">{upcomingAppointment.date} at {upcomingAppointment.time}</p>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Bell className="text-amber-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Recent Notifications</h2>
          </div>
          <ul className="space-y-2">
            {recentNotifications.map(notif => (
              <li key={notif.id} className="text-stone-600">{notif.message}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-sky-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Quick Links</h2>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="text-teal-600 hover:underline">View Medical History</a></li>
            <li><a href="#" className="text-teal-600 hover:underline">Download Latest Report</a></li>
            <li><a href="#" className="text-teal-600 hover:underline">Refill a Prescription</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

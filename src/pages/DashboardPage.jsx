import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-feather/dist/icons/calendar';
import Bell from 'react-feather/dist/icons/bell';
import FileText from 'react-feather/dist/icons/file-text';
import CheckCircle from 'react-feather/dist/icons/check-circle';
import ArrowRightCircle from 'react-feather/dist/icons/arrow-right-circle';
import Circle from 'react-feather/dist/icons/circle';

const TreatmentProgress = () => {
  const stages = [
    { name: 'Admission', status: 'completed', date: '2025-09-01' },
    { name: 'Diagnosis', status: 'completed', date: '2025-09-02' },
    { name: 'Treatment Plan', status: 'active', date: '2025-09-04' },
    { name: 'Procedures', status: 'pending' },
    { name: 'Recovery', status: 'pending' },
    { name: 'Discharge', status: 'pending' },
  ];

  const activeIndex = stages.findIndex(s => s.status === 'active');
  const progressPercentage = activeIndex > -1 ? (activeIndex / (stages.length - 1)) * 100 : 0;

  const getStatusIcon = (status) => {
    if (status === 'completed') return <CheckCircle className="text-teal-500" />;
    if (status === 'active') return <ArrowRightCircle className="text-amber-500 animate-pulse" />;
    return <Circle className="text-stone-300" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Your Treatment Journey</h2>
      <div className="w-full bg-stone-200 rounded-full h-2.5 mb-4">
        <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
        {stages.map((stage, index) => (
          <div key={index} className={`p-3 rounded-lg ${stage.status !== 'pending' ? 'bg-stone-50' : ''}`}>
            <div className="flex justify-center mb-2">{getStatusIcon(stage.status)}</div>
            <p className={`font-semibold ${stage.status === 'active' ? 'text-amber-600' : 'text-stone-700'}`}>{stage.name}</p>
            {stage.date && <p className="text-xs text-stone-500">{stage.date}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const MilestoneCard = ({ title, date, notes, nextSteps }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-bold text-lg text-teal-800">{title}</h3>
        <p className="text-sm text-stone-500 mb-2">{date}</p>
        <p className="text-stone-600 mb-3"><span className="font-semibold">Notes:</span> {notes}</p>
        <p className="text-stone-600"><span className="font-semibold">Next Steps:</span> {nextSteps}</p>
    </div>
);

const DashboardPage = () => {
  const upcomingAppointment = {
    doctor: 'Dr. Pramod Kadam',
    specialty: 'General Surgeon',
    date: 'September 10, 2025',
    time: '11:00 AM',
  };

  const recentNotifications = [
    { id: 1, message: 'Your treatment plan has been updated by Dr. Pramod Kadam.' },
    { id: 2, message: 'Reminder: Upcoming follow-up consultation tomorrow.' },
    { id: 3, message: 'New lab results from Krsnaa Diagnostics are available.' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Patient Dashboard</h1>
      
      <TreatmentProgress />

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Current Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MilestoneCard 
                title="Diagnosis Complete"
                date="2025-09-02"
                notes="Diagnosed with high cholesterol and hypertension."
                nextSteps="Follow the prescribed medication and diet plan. Follow-up in 2 weeks."
            />
            <MilestoneCard 
                title="Treatment Plan Initiated"
                date="2025-09-04"
                notes="Started on Atorvastatin 20mg and a low-sodium diet."
                nextSteps="Monitor blood pressure daily. Schedule ECG."
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Appointment */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="text-teal-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Upcoming Appointment</h2>
          </div>
          <p className="font-bold text-lg text-teal-800 mt-2">{upcomingAppointment.doctor}</p>
          <p className="text-stone-500">{upcomingAppointment.specialty}</p>
          <p className="text-stone-500 mt-2">{upcomingAppointment.date} at {upcomingAppointment.time}</p>
          <div className="flex gap-2 mt-4">
            <Link to="/dashboard/appointments" className="text-sm bg-amber-500 text-white px-3 py-1 rounded-md hover:bg-amber-600">Reschedule</Link>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <Bell className="text-amber-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Notifications</h2>
          </div>
          <ul className="space-y-3">
            {recentNotifications.map(notif => (
              <li key={notif.id} className="text-stone-600 text-sm">{notif.message}</li>
            ))}
          </ul>
        </div>

        {/* Health Records */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-sky-500" size={24} />
            <h2 className="text-xl font-bold text-stone-700">Health Records</h2>
          </div>
          <ul className="space-y-2">
            <li><Link to="/dashboard/history" className="text-teal-600 hover:underline">View Medical History</Link></li>
            <li><Link to="/dashboard/reports" className="text-teal-600 hover:underline">View Lab Results</Link></li>
            <li><Link to="/dashboard/prescriptions" className="text-teal-600 hover:underline">Manage Prescriptions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

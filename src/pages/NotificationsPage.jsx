import React from 'react';

const NotificationsPage = () => {
  // Dummy data for notifications
  const notifications = [
    { id: 1, type: 'appointment', message: 'Your appointment with Dr. Pramod Kadam is confirmed for tomorrow at 10:00 AM at KCare Clinic, Pune.', time: '1 day ago', read: false },
    { id: 2, type: 'prescription', message: 'A new prescription has been added by Dr. Pramod Kadam.', time: '3 days ago', read: false },
    { id: 3, type: 'report', message: 'Your latest pathology report from Krsnaa Diagnostics is now available.', time: '5 days ago', read: true },
    { id: 4, type: 'reminder', message: 'Reminder: Take your evening medication after dinner at 9:00 PM.', time: '1 week ago', read: true },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">Notifications</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-4 rounded-lg flex items-start gap-4 ${notification.read ? 'bg-stone-50' : 'bg-teal-50'}`}
            >
              <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-stone-300' : 'bg-teal-500'}`}></div>
              <div>
                <p className={`font-medium ${notification.read ? 'text-stone-600' : 'text-teal-800'}`}>
                  {notification.message}
                </p>
                <p className="text-sm text-stone-500 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;

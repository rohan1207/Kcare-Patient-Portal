import React from 'react';
import User from 'react-feather/dist/icons/user';
import Mail from 'react-feather/dist/icons/mail';
import Phone from 'react-feather/dist/icons/phone';
import MapPin from 'react-feather/dist/icons/map-pin';

const ProfilePage = () => {
  // Dummy data for user profile
  const user = {
    name: 'Rohan Ambhore',
    email: 'rohan.ambhore@gmail.com',
    phone: '+91 98765 43210',
    dob: '1990-01-01',
    address: '123, Sai Apartment, Near Westend Mall, Aundh, Pune, Maharashtra - 411007',
    emergencyContact: {
      name: 'Shweta Ambhore',
      relation: 'Mother',
      phone: '+91 98765 12345',
    },
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-display text-stone-800 mb-6">My Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/user.png" // Assuming the image is in the public folder
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-teal-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-stone-800">{user.name}</h2>
            <p className="text-stone-500 mt-1">Patient ID: PAT123456</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-bold text-stone-700 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="text-teal-500" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-teal-500" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-teal-500" />
              <span>{user.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-bold text-stone-700 mb-4">Emergency Contact</h3>
          <div className="bg-stone-50 p-4 rounded-lg">
            <p className="font-bold">{user.emergencyContact.name} ({user.emergencyContact.relation})</p>
            <p className="text-stone-600">{user.emergencyContact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

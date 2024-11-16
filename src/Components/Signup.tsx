import React from 'react';

function Singup() {
  const isUnderMaintenance = true;

  return (
    <div className="py-8 px-4 text-center bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Music School Enrollment</h1>

        {isUnderMaintenance ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded mb-6">
            <p className="font-semibold text-lg">Maintenance Alert</p>
            <p className="text-sm mt-2">
              Our enrollment system is currently undergoing maintenance. We appreciate your patience and encourage you to check back later.
            </p>
          </div>
        ) : (
          <>
            <p className="text-lg text-gray-700 mb-6">
              Ready to start your musical journey? Click the button below to enroll and join our community of musicians.
            </p>
            <a
              href="/enter-form"
              className="inline-block px-6 py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Start Enrollment
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Singup;

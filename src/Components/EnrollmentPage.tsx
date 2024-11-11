import React from 'react';

function EnrollmentPage() {
  return (
    <div className="py-8 px-4 text-center">
      <h2 className="text-3xl font-semibold text-black mb-4">Enroll in Music School</h2>
      <p className="text-lg text-gray-700 mb-6">
        Ready to start your musical journey? Click the button below to enroll and join our community of musicians.
      </p>
      <a
        href="/enter-form"
        className="inline-block px-6 py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Start Enrollment
      </a>
    </div>
  );
}

export default EnrollmentPage;

import React from 'react';

function MainPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
  
      <section className="py-8 px-4 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Welcome to MusicSchool</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          At MusicSchool, we believe in the power of music to inspire, challenge, and unite. Whether you're just starting out or you're an experienced musician looking to refine your skills, our diverse range of courses offers something for everyone. 
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Our experienced instructors are passionate about sharing their knowledge and helping students of all ages and skill levels reach their musical potential. From classical to contemporary, we offer a wide variety of music styles, including piano, guitar, drums, vocals, and more.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Join our community of musicians, where creativity is encouraged, skills are developed, and music becomes more than just a passion — it becomes a way of life. Whether you're preparing for a career in music or simply want to play for fun, we are here to guide you every step of the way.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Enroll today and take the first step towards discovering your musical journey!
        </p>
      </section>

      <section className="py-8 px-4 max-w-3xl text-center bg-white mb-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">About Our Teachers</h2>
        <p className="text-lg text-gray-700">
          Our teachers are professionals who have a deep love for music and a strong commitment to education. They bring their extensive experience and passion for music to every class, ensuring that each student receives personalized attention and guidance.
        </p>
      </section>

      <section className="py-8 px-4 max-w-3xl text-center bg-white mb-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">About Our Students</h2>
        <p className="text-lg text-gray-700">
          We are proud of our diverse and talented student body. Our students come from all walks of life, united by their shared love for music. From beginners to advanced musicians, each student’s journey is unique, and we’re here to help them succeed at every stage.
        </p>
      </section>

      <section className="py-8 px-4 max-w-3xl text-center bg-gray-100 mb-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-black mb-4">Interested in Joining Our School?</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you're a parent looking to enroll your child in our music school, we'd love to welcome you to our community. We offer a nurturing and inspiring environment where children can grow their musical talents, build confidence, and explore their creativity.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our programs are designed to accommodate students of all ages, from young beginners to more advanced learners. Whether your child is interested in learning an instrument or discovering their voice, we have the perfect course for them.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Click the button below to learn more about our programs, schedule a tour, or begin the enrollment process!
        </p>

        <a
          href="/enter-form"  
          className="inline-block px-6 py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Enroll Now
        </a>
      </section>
    </main>
  );
}

export default MainPage;

function About() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-[90px]">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
                Welcome to <span className="font-semibold text-indigo-600">Rīgas Musicas Skola</span>, where passion for music meets quality education. Founded with the goal of nurturing musical talent in a supportive and inspiring environment, our school offers lessons for all ages and skill levels—from beginners exploring their first notes to advanced musicians refining their artistry.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
                To cultivate a lifelong love for music through hands-on learning, creativity, and performance.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li><strong className="text-gray-800">Private Lessons:</strong> Personalized one-on-one instruction across a range of instruments and vocal training.</li>
                <li><strong className="text-gray-800">Group Classes:</strong> Engage with others and develop skills in a fun, collaborative setting.</li>
                <li><strong className="text-gray-800">Workshops & Masterclasses:</strong> Learn from guest artists, music industry professionals, and experienced educators.</li>
                <li><strong className="text-gray-800">Performance Opportunities:</strong> Build confidence and stage presence through recitals, ensemble performances, and community events.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-8">
                Join us and experience the joy of music, whether you’re preparing for a career in music or playing just for fun. At <span className="font-semibold text-indigo-600">Rīgas Musicas Skola</span>, we’re here to support your musical journey every step of the way!
            </p>
        </div>
    );
}

export default About;

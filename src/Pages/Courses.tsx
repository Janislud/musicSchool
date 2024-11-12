function Courses() {
    const courses = [
        {
            title: "Beginner Piano",
            description: "A foundational course for those new to the piano. Learn basic chords, scales, and simple pieces.",
            duration: "10 weeks",
            level: "Beginner",
        },
        {
            title: "Guitar Essentials",
            description: "Master the fundamentals of guitar, including chord progressions, strumming patterns, and essential techniques.",
            duration: "8 weeks",
            level: "Beginner to Intermediate",
        },
        {
            title: "Jazz Improvisation",
            description: "Explore the world of jazz, learning scales, improvisation techniques, and ensemble playing.",
            duration: "12 weeks",
            level: "Intermediate to Advanced",
        },
        {
            title: "Digital Music Production",
            description: "Learn how to create, mix, and produce your own music using digital audio workstations (DAWs).",
            duration: "6 weeks",
            level: "All Levels",
        }
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 bg-gray-50 mt-[90px]">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                            {course.title}
                        </h2>
                        <p className="text-gray-700 mb-4">{course.description}</p>
                        <p className="text-gray-500 font-medium">
                            Duration: <span className="text-gray-700">{course.duration}</span>
                        </p>
                        <p className="text-gray-500 font-medium">
                            Level: <span className="text-gray-700">{course.level}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;

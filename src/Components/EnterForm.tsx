import React, { useState, useEffect } from 'react';

type Student = {
  name: string;
  surname: string;
  birthday: string;
  age: number;
  instrument: string;
  courseNumber: string;
};

// Define a type for the field names to avoid the "index signature" error
type FormDataKeys = 'name' | 'surname' | 'birthday' | 'instrument' | 'courseNumber';

const initialStudents: Student[] = [
  { name: "John", surname: "Doe", birthday: "1997-11-12", age: 25, instrument: "Piano", courseNumber: "C001" },
  { name: "Jane", surname: "Smith", birthday: "1998-06-24", age: 24, instrument: "Violin", courseNumber: "C002" },
  { name: "Sam", surname: "Brown", birthday: "2001-03-15", age: 22, instrument: "Flute", courseNumber: "C003" },
  { name: "Emily", surname: "Davis", birthday: "2003-11-22", age: 20, instrument: "Guitar", courseNumber: "C004" },
];

function EnterForm() {
  // Ensure that formData and errors objects have a consistent type structure
  const [formData, setFormData] = useState<Record<FormDataKeys, string>>({
    name: '',
    surname: '',
    birthday: '',
    instrument: '',
    courseNumber: '',
  });

  const [errors, setErrors] = useState<Record<FormDataKeys, string>>({
    name: '',
    surname: '',
    birthday: '',
    instrument: '',
    courseNumber: '',
  });

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (!storedStudents) {
      localStorage.setItem('students', JSON.stringify(initialStudents));
      setStudents(initialStudents);
    } else {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  const validationRules: { [key in FormDataKeys]: (value: string) => string } = {
    name: (value) => {
      if (!value.trim()) return 'Name is required.';
      if (!/^[A-Z]/.test(value)) return 'Name must start with a capital letter.';
      return '';
    },
    surname: (value) => {
      if (!value.trim()) return 'Surname is required.';
      if (!/^[A-Z]/.test(value)) return 'Surname must start with a capital letter.';
      return '';
    },
    birthday: (value) => {
      if (!value.trim()) return 'Birthday is required.';
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(value)) return 'Enter birthday in YYYY-MM-DD format.';
      const birthDate = new Date(value);
      if (isNaN(birthDate.getTime())) return 'Invalid date format.';
      if (birthDate > new Date()) return 'Birthday must be a past date.';
      return '';
    },
    instrument: (value) => (!value.trim() ? 'Instrument is required.' : ''),
    courseNumber: (value) => {
      const validCourseNumbers = ['C001', 'C002', 'C003', 'C004'];
      if (!validCourseNumbers.includes(value)) return 'Course Number must be one of C001, C002, C003, or C004.';
      return '';
    },
  };

  const validateField = (name: FormDataKeys, value: string) => {
    const error = validationRules[name] ? validationRules[name](value) : '';
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement & { name: FormDataKeys };
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const ageDiff = new Date().getTime() - birthDate.getTime();
    return Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submitting
    const newErrors: Record<FormDataKeys, string> = { ...errors };
    Object.keys(formData).forEach((key) => {
      const fieldKey = key as FormDataKeys;
      const error = validationRules[fieldKey]?.(formData[fieldKey]);
      if (error) {
        newErrors[fieldKey] = error;
      } else {
        newErrors[fieldKey] = '';
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '') || Object.values(formData).some((value) => value === '')) {
      return;
    }

    const newStudent: Student = {
      name: formData.name,
      surname: formData.surname,
      birthday: formData.birthday,
      age: calculateAge(formData.birthday),
      instrument: formData.instrument,
      courseNumber: formData.courseNumber,
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));

    setFormData({
      name: '',
      surname: '',
      birthday: '',
      instrument: '',
      courseNumber: '',
    });
    setErrors({
      name: '',
      surname: '',
      birthday: '',
      instrument: '',
      courseNumber: '',
    });
  };

  const isFormValid =
    Object.values(errors).every((error) => error === '') &&
    Object.values(formData).every((value) => value !== '');

  return (
    <div className="py-8 px-4 text-center">
      <h2 className="text-3xl font-semibold text-black mb-4">Enroll in Music School</h2>
      <p className="text-lg text-gray-700 mb-6">Fill out the form below to start your musical journey!</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="surname" className="block text-gray-700 font-semibold mb-2">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="birthday" className="block text-gray-700 font-semibold mb-2">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="instrument" className="block text-gray-700 font-semibold mb-2">Instrument</label>
          <input
            type="text"
            id="instrument"
            name="instrument"
            value={formData.instrument}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.instrument && <p className="text-red-500 text-sm">{errors.instrument}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseNumber" className="block text-gray-700 font-semibold mb-2">Course Number</label>
          <input
            type="text"
            id="courseNumber"
            name="courseNumber"
            value={formData.courseNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.courseNumber && <p className="text-red-500 text-sm">{errors.courseNumber}</p>}
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-black mb-4">Enrolled Students</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 table-fixed md:table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Surname</th>
                <th className="py-2 px-4 border-b">Birthday</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Instrument</th>
                <th className="py-2 px-4 border-b">Course Number</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-4 text-center">No students enrolled yet.</td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={index} className="border-b md:border-none">
                    <td className="py-2 px-4 md:border-none">{student.name}</td>
                    <td className="py-2 px-4 md:border-none">{student.surname}</td>
                    <td className="py-2 px-4 md:border-none">{student.birthday}</td>
                    <td className="py-2 px-4 md:border-none">{student.age}</td>
                    <td className="py-2 px-4 md:border-none">{student.instrument}</td>
                    <td className="py-2 px-4 md:border-none">{student.courseNumber}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EnterForm;

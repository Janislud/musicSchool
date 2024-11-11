import React, { useState, useEffect } from 'react';

type Student = {
  name: string;
  surname: string;
  number: number;
  age: number;
  instrument: string;
};

function EnterForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    number: '',
    age: '',
    instrument: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    number: '',
    age: '',
    instrument: '',
  });

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);


  const validationRules: { [key: string]: (value: string) => string } = {
    name: (value) => {
      if (!value.trim()) {
        return 'Name is required.';
      }
      if (!/^[A-Z]/.test(value)) {
        return 'Name must start with a capital letter.';
      }
      return '';
    },
    surname: (value) => {
      if (!value.trim()) {
        return 'Surname is required.';
      }
      if (!/^[A-Z]/.test(value)) {
        return 'Surname must start with a capital letter.';
      }
      return '';
    },
    instrument: (value) => (!value.trim() ? 'Instrument is required.' : ''),
    number: (value) =>
      !value || isNaN(Number(value)) || Number(value) < 1000000000 || Number(value) > 9999999999
        ? 'Please enter a valid 10-digit phone number.'
        : '',
    age: (value) =>
      !value || isNaN(Number(value)) || Number(value) < 5 || Number(value) > 120
        ? 'Please enter a valid age between 5 and 120.'
        : '',
  };
  
  const validateField = (name: string, value: string) => {
    const error = validationRules[name] ? validationRules[name](value) : '';
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: Student = {
      name: formData.name,
      surname: formData.surname,
      number: Number(formData.number),
      age: Number(formData.age),
      instrument: formData.instrument,
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));

    setFormData({ name: '', surname: '', number: '', age: '', instrument: '' });
    setErrors({ name: '', surname: '', number: '', age: '', instrument: '' });
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
          <label htmlFor="number" className="block text-gray-700 font-semibold mb-2">Telefon</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
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
                <th className="py-2 px-4 border-b">Telefon</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Instrument</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center">No students enrolled yet.</td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <tr key={index} className="border-b md:border-none">
                    <td className="py-2 px-4 md:border-none">{student.name}</td>
                    <td className="py-2 px-4 md:border-none">{student.surname}</td>
                    <td className="py-2 px-4 md:border-none">{student.number}</td>
                    <td className="py-2 px-4 md:border-none">{student.age}</td>
                    <td className="py-2 px-4 md:border-none">{student.instrument}</td>
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

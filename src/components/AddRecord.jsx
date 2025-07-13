import React, { useState } from 'react'

const AddRecord = ({getdata}) => {
    const [formData, setFormData] = useState({
        name: '',
        blood: '',
        age: '',
        location: '',
        contact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/blood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setFormData({ name: '', blood: '', age: '', location: '', contact: '' });
                alert('Record added successfully!');
                getdata();
            } else {
                alert('Failed to add record.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div id='insert' className="flex justify-center items-center border-t-4 border-red-500 p-8 mt-4">
            <form
                className="bg-white p-8 rounded-3xl border-gray-200 border-2 shadow-md w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Record</h2>
                <div className="mb-4">
                    {/* <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Full name'
                        required
                        className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-none"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="blood" className="block text-gray-700 font-medium mb-2">Blood Type:</label> */}
                    <input
                        type="text"
                        id="blood"
                        name="blood"
                        placeholder='Blood type'
                        required
                        className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={formData.blood}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age:</label> */}
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder='Age'
                        required
                        className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    {/* <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location:</label> */}
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder='Location'
                        required
                        className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    {/* <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact:</label> */}
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder='Contact'
                        required
                        className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition-colors">
                    Add Record
                </button>
            </form>
        </div>
    )
}

export default AddRecord
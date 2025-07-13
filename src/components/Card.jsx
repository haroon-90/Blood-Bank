import Pic from '../assets/image.png'

const Card = (props) => {
    const { id, name, blood, age, location, contact } = props;

    const handledelete = (id) => {
        if (confirm("Are you sure you want to delete this record?")) {
            fetch(`http://localhost:3000/blood/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("Record deleted successfully", data);
                    props.getdata()
                })
                .catch(err => console.error("Error deleting record:", err));
        }
    }

    const handleupdate = (id) => {
        const updatedname = prompt("Enter new name:", name);
        const updatedblood = prompt("Enter new blood group:", blood);
        const updatedage = prompt("Enter new age:", age);
        const updatedlocation = prompt("Enter new location:", location);
        const updatedcontact = prompt("Enter new contact:", contact);
        if (updatedname && updatedblood && updatedage && updatedlocation && updatedcontact) {
            fetch(`http://localhost:3000/blood/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: updatedname,
                    blood: updatedblood,
                    age: updatedage,
                    location: updatedlocation,
                    contact: updatedcontact
                })
            }).then(res => res.json())
                .then(data => {
                    console.log("Record updated successfully", data);
                    props.getdata()
                })
                .catch(err => console.error("Error updating record:", err));
        }
    }

    return (
            <div className="max-w-sm flex flex-col justify-between border-1 border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white p-6 m-2">
                <div className="flex items-center mb-4">
                    <img
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-500"
                        src={Pic}
                        alt="Donor Avatar"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                        <p className="text-sm text-gray-500">Blood Group: <span className="font-semibold text-red-600">{blood}</span></p>
                    </div>
                </div>
                <div className="mb-2">
                    <p className="text-gray-700"><span className="font-semibold">Age:</span> {age}</p>
                    <p className="text-gray-700"><span className="font-semibold">Location:</span> {location}</p>
                    <p className="text-gray-700"><span className="font-semibold">Contact:</span> {contact}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <button
                        onClick={() => alert(`Requesting blood from ${name}`)}
                        className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Request Blood
                    </button>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => handledelete(id)}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                            Delete Record
                        </button>
                        <button
                            onClick={() => handleupdate(id)}
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                            Update Record
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Card
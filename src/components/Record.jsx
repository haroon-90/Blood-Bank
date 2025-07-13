import Card from './Card'
import { useEffect, useState } from 'react';
import AddRecord from './AddRecord'
import { Search } from "lucide-react";

const Record = () => {
    const [records, setRecords] = useState([]);
    const [searchtext, setsearchtext] = useState("")

    const handlesearch = (e) => {
        setsearchtext(e.target.value)
        console.log("searchtext:", searchtext);
        console.log("record bloods:", records.map(r => r.blood));
    }

    const getdata = () => {
        console.log("Get data is called")
        fetch('http://localhost:3000/blood')
            .then(res => res.json())
            .then(data => setRecords(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getdata()
    }, []);

    return (
        <div>
            <div id="donors" className='flex flex-col flex-wrap items-center justify-center gap-x-4 border-t-4 border-red-500'>
                <div className='relative ml-auto my-2'>
                    <span className="absolute inset-y-0 left-10 flex items-center text-gray-500">
                        <Search size={16} />
                    </span>
                    <input
                        type="searchtext"
                        name="searchtext"
                        id="searchtext"
                        placeholder='Search by blood group'
                        className='mx-8 my-2 pr-4 pl-8 py-1 min-w-xs border-1 rounded-full focus:outline-red-500'
                        onChange={handlesearch}
                    />
                </div>
                <div className='w-full flex justify-center flex-wrap'>
                    {records
                        .filter((record) =>
                            String(searchtext).trim() === "" ||
                            record.blood.toLowerCase().includes(searchtext.toLowerCase())
                        )
                        .map((record, idx) => (
                            <Card
                                key={record.id || idx}
                                id={record._id}
                                name={record.name}
                                blood={record.blood}
                                age={record.age}
                                location={record.location}
                                contact={record.contact}
                                getdata={getdata}
                            />
                        ))}
                </div>
            </div>
            <AddRecord getdata={getdata} />
        </div>
    )
}

export default Record

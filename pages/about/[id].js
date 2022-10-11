import React from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const DeTailAbout = () => {
    const pathname = useRouter()
    const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${pathname.query.id}`, fetcher)
    console.log(data)
    if (error) return <div className='min-h-[80vh] p-8'>
        <div className='w-11/12 mx-auto'>Failed to load!</div>
    </div>
    if (!data) return <div className='min-h-[80vh] p-8'>
        <div className='w-11/12 mx-auto'>Loading...</div>
    </div>
    return (
        <div className='min-h-[80vh] p-8'>
            <div className='w-11/12 mx-auto'>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Name:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.name}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Username:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.username}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Email:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.email}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address street:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.street}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address suite:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.suite}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address city:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.city}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address zipcode:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.zipcode}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address lat:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.geo.lat}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Address lng:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.address.geo.lng}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Phone:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.phone}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Website:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.website}</span></p>
                <p className='w-1/4 my-2 border flex justify-between items-center rounded'><span className='w-2/5 bg-gray-300 px-2 py-1'>Company name:</span><span className='bg-indigo-200 px-2 py-1 w-3/5'>{data.company.name}</span></p>
            </div>
        </div>
    )
}
export default DeTailAbout;
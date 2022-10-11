import React, { Fragment } from 'react';
import useSWR from 'swr';
import { AiTwotoneDelete } from 'react-icons/ai';
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then(res => res.json())


const About = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
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
                <ul>
                    {data.map(res => (
                        <Fragment key={res.id}>
                            <li>
                                <Link href={`about/${res.id}`}>
                                    <a className='group border flex justify-between items-center my-2 py-2 px-4 cursor-pointer ease-in duration-150 rounded hover:bg-gray-200 overflow-hidden'>
                                        <p className='w-1/4'><span className='italic text-gray-600 text-xs mr-3'>Name:</span> <span className='text-xs'>{res.name}</span></p>
                                        <p className='w-1/4'><span className='italic text-gray-600 text-xs mr-3'>Username:</span> <span className='text-xs'>{res.username}</span></p>
                                        <p className='w-1/4'><span className='italic text-gray-600 text-xs mr-3'>Email:</span> <span className='text-xs'>{res.email}</span></p>
                                        <AiTwotoneDelete className='translate-x-8 text-rose-800 group-hover:translate-x-0 ease-in duration-200' />
                                    </a>
                                </Link>
                            </li>
                        </Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About
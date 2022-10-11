import React from 'react'

const Users = ({ datas }) => {
  return (
    <div className='min-h-[80vh] p-8'>
      <div className='w-11/12 mx-auto'>
        <ul className='flex gap-y-10 flex-wrap justify-between'>
          {datas.slice(0, 44).map((data) => (
            <li className='bg-gray-100 w-[22%] h-40 p-4 border' key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const datas = await res.json();

  return { props: { datas } }
}

export default Users
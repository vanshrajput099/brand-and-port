import React from 'react'

const AboutUsBox = ({ data }) => {
    return (
        <div className='body-text space-y-1 px-4'>
            <div className='flex gap-2 items-center'>
                <img className='h-7 w-7 object-cover' src={data.icon.src} alt="" />
                <h1 className='text-sm lg:text-xl'>{data.title}</h1>
            </div>
            <p className='secondary-text-color text-sm lg:text-xl'>{data.description}</p>
        </div>
    )
}

export default AboutUsBox
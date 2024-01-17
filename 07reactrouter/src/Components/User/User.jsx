import React from 'react'
import { useParams } from 'react-router-dom'

export function User() {
    const {userid} = useParams()
    return (
        <>
            <div className='bg-gray-500 text-white text-3xl p-4'>User: {userid}</div>
        </>
    )
}

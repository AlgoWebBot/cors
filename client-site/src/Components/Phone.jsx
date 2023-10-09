import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phone = () => {

    const phone = useLoaderData()

    return (
        <div>
            <h1>{ phone.model}</h1>
            <p>{ phone.brand }</p>
            <p>{ phone.price }$</p>
            <p>{ phone.performance }%</p>
        </div>
    )
}

export default Phone
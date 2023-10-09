import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Phones = () => {

    const phones = useLoaderData();

    return (
        <div>
            {
                phones.map(phone => <h1>
                    <Link to={`/phone/${phone.id}`}
                        key={phone.id}>{phone.model}
                    </Link>
                </h1>)
            }
        </div>
    )
}

export default Phones
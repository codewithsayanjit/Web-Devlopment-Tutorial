"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation' //useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL.
import { useRouter } from 'next/navigation'     // The useRouter hook allows you to programmatically change routes inside Client Components.

const page = () => {
    const params = useParams()
    const router = useRouter()

    return (
        <div>Route's dynamic params is {params.slug}<br />

            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard
            </button>
        </div>
    )
}

export default page
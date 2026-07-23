"use client "

export default async function Page({ params }) {
    const { val } = await params

    console.log("params:", await params)
    console.log("val:", val)

    return <div>{JSON.stringify(val)}</div>
}
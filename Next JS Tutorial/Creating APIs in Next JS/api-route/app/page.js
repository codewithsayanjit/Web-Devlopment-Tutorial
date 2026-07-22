"use client"

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Sayanjit",
      role: "Coder"
    }

    let a = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response = await a.json()
    console.log(response)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes demo</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
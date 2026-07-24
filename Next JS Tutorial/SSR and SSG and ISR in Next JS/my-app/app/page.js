// Force this page to be rendered dynamically on every request
export const dynamic = 'force-dynamic'

// Async Server Component
export default async function Home() {

  // Fetch blog data
  // revalidate: 1800 = Cache data for 30 minutes
  let data = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 1800 }
  })

  // Convert response to JSON
  let posts = await data.json()

  // Display all blog titles
  return (
    <ul>
      {posts.map((post) => (
        // Each list item needs a unique key
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
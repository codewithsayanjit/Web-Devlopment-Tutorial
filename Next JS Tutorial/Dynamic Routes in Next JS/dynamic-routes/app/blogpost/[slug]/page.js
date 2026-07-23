export default async function Page({ params }) {
    const { slug } = await params

    let languages = ["python", "javascript", "java", "cpp", "cs"]

    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    } else {
        return <div>Post Not Found</div>
    }
}
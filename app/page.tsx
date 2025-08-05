export default async function Home() {

  const res = await fetch("http://127.0.0.1:8000/api/posts?page=1");
  const data = await res.json();
  if (!data || !data.member) {
    return <div>No posts found</div>;
  }

  const posts = data.member;

  return (
    <div>
      <h1>Show Posts</h1>
      <ul>
        {posts.map((post: { id: number; content: string }) => (
          <li key={post.id}>
            <h2>{post.content}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Posts({ posts: serverPost }) {
  const router = useRouter();
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await axios.get(`http://localhost:4200/posts`);
      const data = await res.data;
      setPosts(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!posts) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={() => router.back()}>Go back</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Posts.getInitialProps = async ({ req }) => {
  try {
    if (!req) {
      return { posts: null };
    }
    const res = await axios.get("http://localhost:4200/posts");
    const posts = await res.data;
    return { posts };
  } catch (error) {
    console.log(error);
  }
};

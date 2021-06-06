import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Posts({ post: servePost }) {
  const router = useRouter();
  const [post, setPost] = useState(servePost);

  useEffect(() => {
    async function load() {
      const res = await axios.get(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await res.data;
      setPost(data);
    }
    if (!servePost) {
      load();
    }
  }, []);
  if (!post) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={() => router.back()}>Go back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// Posts.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   const res = await axios.get(`http://localhost:4200/posts/${query.id}`);
//   const post = await res.data;
//   return {
//     post,
//   };
// };

export async function getServerSideProps({ query, req }) {
  const res = await axios.get(`http://localhost:4200/posts/${query.id}`);
  const post = await res.data;

  return {
    props: { post },
  };
}

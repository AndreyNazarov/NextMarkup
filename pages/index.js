import Image from "next/image";
import s from "../sass/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
import Layout from "../components/Layout";
import Task1 from "../components/Markup1";

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Layout>
        {/* <Link href={"./posts"}>
          <button type="button">Posts</button>
        </Link>
        <button type="button" onClick={() => router.push("./posts")}>
          Test button
        </button> */}
        <Task1></Task1>
      </Layout>
    </>
  );
}

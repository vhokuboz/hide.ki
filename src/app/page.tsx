import CursorGlow from "@/components/CursorGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      <CursorGlow />
      <Header />
      <HomeClient posts={posts} />
      <Footer />
    </>
  );
}

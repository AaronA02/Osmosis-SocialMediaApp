import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import TrendsSidebar from "@/components/TrendsSidebar";
import prisma from "@/lib/prisma";
import ForYouFeed from "./ForYouFeed";
import { getPostDataInclude } from "@/lib/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: getPostDataInclude(user.id),
    orderBy: { createdAt: "desc"}
  })

  return(
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor/>
        <ForYouFeed/>
      </div>
      <TrendsSidebar/>
    </main>
  );
}
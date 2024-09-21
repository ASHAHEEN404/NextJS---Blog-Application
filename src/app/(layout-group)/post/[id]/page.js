import Card from "@/components/Card";
import getPosts from "@/lib/fetchAllPosts";
import fetchPostByID from "@/lib/fetchPostById";
import Link from "next/link";
import { notFound } from "next/navigation";

const Post = async ({ params }) => {
  // Fetch the current post based on ID from URL parameters
  const post = await fetchPostByID(params.id);

  if (!post) {
    notFound();
  }

  // Fetch all posts to determine adjacent posts
  const allPosts = await getPosts();
  const currentIndex = allPosts.findIndex(
    (p) => p._id.toString() === post._id.toString()
  );

  // Determine the previous and next post IDs
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex <= allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl p-6 mx-auto">
      {/* Display the post card */}
      <Card title={post.title} body={post.body} imageUrl={post.imageUrl} />

      {/* Navigation for previous and next posts */}
      <div className="flex justify-between mt-8">
        {previousPost && (
          <Link
            className="text-blue-600 hover:underline"
            href={`/post/${previousPost._id}`}
          >
            &larr; Previous
          </Link>
        )}
        {nextPost && (
          <Link
            className="text-blue-600 hover:underline"
            href={`/post/${nextPost._id}`}
          >
            Next &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post._id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const post = await fetchPostByID(params.id);
  if (post) {
    return {
      title: post.title,
      description: post.body,
    };
  }
  return {
    title: "Post Not Found",
    description: "The requested post does not exist.",
  };
}

export default Post;

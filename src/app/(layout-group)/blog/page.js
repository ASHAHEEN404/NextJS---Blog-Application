import Card from "@/components/Card";
import fetchAllPosts from "@/lib/fetchAllPosts";

const Blog = async () => {
  const posts = await fetchAllPosts();

  return (
    <div className="px-6 py-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post._id}
            id={post._id.toString()}
            title={post.title}
            body={post.body}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

import { useSelector } from "react-redux";
import Post from "./Post";
import { selectAllPosts } from "../postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section className="my-10">
      <h1 className="text-3xl font-bold text-center">Posts</h1>
      <div className="space-y-8 mt-8">
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
            />
          ))}
      </div>
    </section>
  );
};

export default PostsList;

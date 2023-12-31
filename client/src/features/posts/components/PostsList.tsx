import { useSelector } from "react-redux";
import Post from "./Post";
import { selectAllPosts } from "../postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h1 className="text-3xl font-bold text-center">Posts</h1>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {orderedPosts &&
          orderedPosts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </section>
  );
};

export default PostsList;

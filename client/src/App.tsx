import PostForm from "./features/posts/components/PostForm";
import PostsList from "./features/posts/components/PostsList";

const App = () => {
  return (
    <main className="max-w-screen flex flex-col justify-center items-center py-6 m-auto">
      <PostForm />
      <PostsList />
    </main>
  );
};

export default App;

import { FilePlus2 } from "lucide-react";

import Navbar from "./components/common/navbar";
import PostForm from "./features/posts/components/PostForm";
import PostsList from "./features/posts/components/PostsList";

const App = () => {
  return (
    <>
      <Navbar/>
      <main className="max-w-screen flex gap-6 relative">
        <section className="w-full md:w-2/3 min-h-screen p-6 mt-16">
          <PostsList/>
        </section>
        <section className="w-1/3 bottom-0 top-16 right-0 md:fixed hidden md:visible h-screen md:flex justify-center items-start p-6 bg-slate-900">
          <PostForm/>
        </section>
      </main>
      <span className="fixed md:hidden z-10 bottom-0 right-0 mr-5 mb-10 rounded-full bg-slate-800 border border-slate-700 shadow-lg p-3">
        <FilePlus2 color="#fff" size={24} />
      </span>
    </>
  );
};

export default App;

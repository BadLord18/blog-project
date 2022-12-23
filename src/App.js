import './App.css';
import BlogList from "./features/blogs/BlogList";
import {Route, Routes} from "react-router-dom";
import AddBlog from "./features/blogs/AddBlog";
import EditBlog from "./features/blogs/EditBlog";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">Blogs</h1>
      <Routes>
          <Route path="/" element={<BlogList/>}/>
          <Route path="/add-blog" element={<AddBlog/>}/>
          <Route path="/edit-blog/:id" element={<EditBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;

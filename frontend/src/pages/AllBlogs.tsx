import NavBar from "../components/Navbar";
import Blogs from "./Blogs";

function AllBlogs() {
  return (
    <div className="flex flex-col w-full sm:max-w-4xl mx-auto">
      <NavBar />
      <Blogs take={""} skeletonNum={3} />
    </div>
  );
}

export default AllBlogs;

import { AiOutlineEdit, AiFillDelete } from "react-icons/ai"
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteBlog} from "./blogSlice";

const BlogList = () => {
    const blogs = useSelector(store=>store.blogs)
    const dispatch = useDispatch()

    const handleRemoveUser = (id) => {
        dispatch(deleteBlog({id}))
    }

    const renderCard = () => blogs.map(blog => (
        <div className="bg-gray-300 p-5 flex items-center justify-between" key={blog.id}>
            <div >
                <h3 className="font-blod text-lg text-gray-700">{blog.title}</h3>
                <span className="font-normal text-gray-600">{blog.text}</span>
            </div>
            <div className="flex gap-4">
                <Link to={`edit-blog/${blog.id}`}>
                    <button> <AiOutlineEdit/> </button>
                </Link>
                <button
                    onClick={() => handleRemoveUser(blog.id)}
                > <AiFillDelete/> </button>
            </div>
        </div>
        )
    )

    return(
        <div>
            <Link to="/add-blog">
                <Button className="">Add blog</Button>
            </Link>
            <div className="grid gap-5 md:grid-cols-2">
                {blogs.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No blogs to show</p>}
            </div>
        </div>
    )
}

export default BlogList
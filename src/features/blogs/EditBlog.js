import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextFiled"
import { editBlog } from "./blogSlice"

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const blogs = useSelector(store => store.blogs);
    const navigate = useNavigate();
    const existingUser = blogs.filter(blog => blog.id === params.id);
    const { title, text } = existingUser[0];
    const [values, setValues] = useState({
        title,
        text
    });

    const handleEditBlog = () => {
        setValues({ title: '', text: '' });
        dispatch(editBlog({
            id: params.id,
            title: values.title,
            text: values.text
        }));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Title"
                value={values.title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Name your blog' }}
            />
            <br />
            <TextField
                label="Text"
                value={values.text}
                onChange={(e) => setValues({ ...values, text: e.target.value })}
                inputProps={{ type: 'email', placeholder: "What's writing about" }}
            />
            <Button onClick={handleEditBlog}>Edit</Button>
        </div>
    )
}

export default EditUser
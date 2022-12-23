import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom"
import TextFiled from "../../components/TextFiled";
import Button from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {editBlog} from "./blogSlice";


const EditBlog = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const blogs = useSelector(store=>store.blogs)
    const navigate = useNavigate()
    const existingBlog = blogs.filter(blog => blog.id === params.id)
    const {title, text} = existingBlog[0]
    const [values, setValues] = useState({
        title,
        text
    })

    const handleEditBlog = (e, values) => {
        setValues({title: '', text: ''})
        dispatch(editBlog({
            id: params.id,
            name: values.title,
            text: values.text
        }))
        navigate('/')
    }

    return(
        <div className="mt-10 max-w-xl mx-auto">
            <TextFiled
                label="Title"
                value={values.title}
                onChange={(e) => setValues({...values, title: e.target.value})}
                inputProps={{type: "title", placeholder: "Name your blog"}}
            />
            <TextFiled
                label="Text"
                value={values.text}
                onChange={(e) => setValues({...values, text: e.target.value})}
                inputProps={{type: "text", placeholder: "What's writing about?"}}
            />
            <Button onClick={handleEditBlog}>Edit</Button>
        </div>
    )
}

export default EditBlog
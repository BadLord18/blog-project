import TextFiled from "../../components/TextFiled";
import Button from "../../components/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {addBlog} from "./blogSlice";
import { v4 as uuidv4 } from 'uuid';


const AddBlog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title: '',
        text: ''
    })

    const handleAddBlog = (e) => {
        setValues({title: '', text: ''})
        dispatch(addBlog({
            id: uuidv4(),
            title: values.title,
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
            <Button onClick={handleAddBlog}>Ready</Button>
        </div>
    )
}

export default AddBlog
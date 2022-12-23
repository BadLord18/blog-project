import {createSlice} from '@reduxjs/toolkit'

const initialState = []


const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.push(action.payload)
        },
        editBlog: (state, action) => {
            const {id, title, text} = action.payload
            const existingBlog = state.find(blog => blog.id === id)
            if (existingBlog) {
                existingBlog.title = title
                existingBlog.text = text
            }
        },
        deleteBlog: (state, action) => {
            const {id} = action.payload;
            const existingBlog = state.find(blog => blog.id === id)
            if (existingBlog) {
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export const { addBlog, editBlog, deleteBlog } = blogsSlice.actions
export default blogsSlice.reducer
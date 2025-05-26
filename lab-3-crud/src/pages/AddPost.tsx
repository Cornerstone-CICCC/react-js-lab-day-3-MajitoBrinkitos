import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

function AddPost() {
    const { dispatch } = useBlog();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch({ type: 'ADD', payload: {
            title, content
        } });
        navigate('/blog');
    };

    return(
        <div>
            <h2>Add Post</h2>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
                    <button onClick={handleSubmit}>
                        Create
                    </button>
        </div>
    );
}

export default AddPost;
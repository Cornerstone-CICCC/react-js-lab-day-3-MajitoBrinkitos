import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

function EditPost() {
    const { dispatch, posts } = useBlog();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const postToEdit = posts.find(post => post.id === id);
        if (postToEdit){
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
        }
        if (!postToEdit) {
            navigate('/blog');
        }
    }, [id, posts]);



    const handleSubmit = () => {
        dispatch({ type: 'EDIT', payload: {
            id, title, content
        } });
        navigate('/blog');
    };

    return(
        <div>
            <h2>Edit Post</h2>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
                    <button onClick={handleSubmit}>
                        Edit and Save
                    </button>
        </div>
    );
}

export default EditPost;
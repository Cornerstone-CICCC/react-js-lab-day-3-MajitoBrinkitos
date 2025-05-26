import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import toast from 'react-hot-toast';

function BlogDetail() {
    const { id } = useParams();
    const { state: posts, dispatch } = useBlog();
    const navigate = useNavigate();

    const post = posts.find(p => p.id === id);

    if (!post){
        return <p>Post not found. Try again!</p>;
    }

    const handleDelete = ()=> {
        dispatch({ type: 'DELETE', payload: id});
        toast.success('Post deleted!');
        navigate('/blog');
    };

    const handleEdit = () => {
        navigate(`/blog/edit/${id}`);
    };

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate('/blog')}>Back to the Blog List</button>
        </div>
    );
}

export default BlogDetail;
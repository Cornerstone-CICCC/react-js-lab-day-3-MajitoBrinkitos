import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

function BlogList(){
    const { state: posts } = useBlog();
    const navigate = useNavigate();

    return(
        <div>
            <h2>Blog Posts</h2>
            <button onClick={() => navigate('/blog/new')}>
                Create New Post
            </button>
            <ul>
                {posts.length === 0 ? (
                    <p>No posts yet. Let's get started!</p>
                ) : (
                    posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <button onClick={() => navigate(`/blog/${post.id}`)}>
                                View Details
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default BlogList;
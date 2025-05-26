import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ firstname }) => (
    <header style={{ display: 'flex', justifyContent: 'space-between'}}>
        <nav>
            <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
        </nav>
        <div>{firstname}</div>
    </header>
)

export default memo(Header);
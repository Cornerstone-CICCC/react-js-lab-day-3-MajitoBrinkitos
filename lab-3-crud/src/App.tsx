import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { BlogProvider } from './context/BlogContext';
import './App.css'

function App() {

  return (
    <>
      <BlogProvider>
        <Toaster />
          <Header firstname="MariaJose" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blog/new" element={<AddPost />} />
            <Route path="/blog/edit/:id" element={<EditPost />} />
          </Routes>
        <Footer />
      </BlogProvider>
    </>
  );
}

export default App

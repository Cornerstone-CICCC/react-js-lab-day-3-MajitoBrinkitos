import React, { createContext, useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BlogContext = createContext(null);

const initialState = [];

function blogReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [...state, { ...action.payload, id: uuidv4(), published: true }];
        
        case 'EDIT':
            return state.map(post => post.id === action.payload.id ? action.payload : post);
        
        case 'DELETE':
            return state.filter(post => post.id !== action.payload);
        
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState);
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
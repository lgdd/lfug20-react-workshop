import React from 'react';
import './css/App.css';

import '@clayui/css/lib/css/atlas.css';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="lfug-react-app">
      <div className="container">
        <h1 className="text-center mb-4">Blogs</h1>
        <BlogList />
      </div>
    </div>
  );
}

export default App;

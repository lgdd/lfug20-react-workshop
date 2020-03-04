import React from 'react';
import Blog from './components/Blog';
import './css/App.css';

import '@clayui/css/lib/css/atlas.css';

function App() {
  const title = 'Lorem Ipsum';
  const author = 'John Doe';
  const body = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Integer et consectetur elit. Fusce ornare leo nec auctor varius.
    Fusce vulputate magna at erat vehicula eleifend.
    Curabitur blandit rutrum ipsum, in sodales ligula porta porttitor.
    Praesent velit purus, tempus tincidunt orci sit amet, sodales molestie eros.
    Mauris vel tellus nisl. Maecenas et posuere tortor.
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Nullam lobortis enim eget nunc rhoncus, vitae porttitor lectus auctor.
    Donec hendrerit mauris vel tellus fringilla, id lobortis ex mollis.
    Quisque vel lorem convallis ex rhoncus luctus quis non sapien.
    Etiam ultrices arcu a felis fringilla rhoncus. Etiam felis quam, laoreet non euismod ut, posuere ut magna.
    Etiam dictum mi sed urna egestas malesuada ac suscipit nulla.
    `;
  return (
    <div className="lfug-react-app">
      <div className="container">
        <h1 className="text-center mb-4">Blogs</h1>
        <Blog title={title} author={author} body={body} />
      </div>
    </div>
  );
}

export default App;

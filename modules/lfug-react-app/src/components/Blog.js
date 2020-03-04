import React from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import TextTruncate from 'react-text-truncate';
import '../css/Blog.css';

export default function Blog() {
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
    <div className="col-md">
      <ClayCard>
        <ClayCard.Body>
          <ClayCard.Description displayType="title" className="big-title">
            {title}
          </ClayCard.Description>
          <ClayCard.Description displayType="subtitle" title={author}>
            {author}
          </ClayCard.Description>
          <ClayCard.Description truncate={false} displayType="text">
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={body}
            />
          </ClayCard.Description>
          <ClayButton>Read</ClayButton>
        </ClayCard.Body>
      </ClayCard>
    </div>
  );
}

import React from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import TextTruncate from 'react-text-truncate';
import '../css/Blog.css';
import Moment from 'react-moment';

export default function Blog(props) {
  const title = props.title;
  const author = props.author;
  const body = props.body;
  const datePublished = props.datePublished;

  return (
    <div className="col-md">
      <ClayCard>
        <ClayCard.Body>
          <ClayCard.Description displayType="title" className="big-title">
            {title}
          </ClayCard.Description>
          <ClayCard.Description displayType="subtitle" title={author}>
            {author} - <Moment fromNow>{datePublished}</Moment>
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

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
          <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:45PM"
            content="Cool blog man!"
            avatar={faker.image.avatar()}
          />
          <CommentDetail 
            author="Jane" 
            timeAgo="Today at 2:00AM"
            content="cowabunga"
            avatar={faker.image.avatar()}
          />
          <CommentDetail 
            author="Alex" 
            timeAgo="Yesterday at 3:45PM"
            content="yippy ki ay mother father"
            avatar={faker.image.avatar()}
          />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard'

const App = () => {
  return  (
    <div className="ui container comments">
      <ApprovalCard>Are you sure?</ApprovalCard>
      <ApprovalCard>
        <Comment
          name="Sam"
          avatar={faker.image.avatar()}
          date="Today at 6:00PM"
          text="What a nice day!"
        />
      </ApprovalCard>

      <ApprovalCard> 
        <Comment
          name="Dan"
          avatar={faker.image.avatar()}
          date="Today at 6:01PM"
          text="Yep"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          name="Maria"
          avatar={faker.image.avatar()}
          date="Today at 6:05PM"
          text="Agree!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

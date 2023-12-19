import { useState  } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostList()
{
    const [enteredBody, setEnteredBody] = useState(''); // register a new state slice. Initial value is an empty string
    const [enteredAuthor, setEnteredAuthor] = useState('');
    // statedata is always an array of two elements
    // stateData[0] // current value
    // stateDate[1] // state updating function
    // try to name the state so that it matches the use case
  
    function changeBodyHandler(event){
      setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}  />
                <Post author="Alban Dwellinger" body="Indeed" />
            </ul>
        </>
    );
}

export default PostList;
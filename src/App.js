import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {PostsContextProvider} from './context/postsContext';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <PostsContextProvider>
      <Header />
      <Main />
    </PostsContextProvider>
  );
}

export default App;

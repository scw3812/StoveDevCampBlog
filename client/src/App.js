import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./App.style";
import Main from "./routes/Main";
import Post from "./routes/Post";
import Editor from "./routes/Editor";
import Tags from './routes/Tags';
import Setting from "./routes/Setting";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" exact component={ Main }/>
      <Route path="/post" component={ Post } />
      <Route path="/editor" component={ Editor } />
      <Route path="/tags" component={ Tags } />
      <Route path="/setting" component={ Setting } />
    </Router>
  );
}

export default App;

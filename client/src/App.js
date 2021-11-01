import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./routes/Main";
import Post from "./routes/Post";
import Editor from "./routes/Editor";
import Tags from './routes/Tags';
import Setting from "./routes/Setting";

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Main }/>
      <Route path="/post/:id" component={ Post } />
      <Route path="/editor" component={ Editor } />
      <Route path="/tags" component={ Tags } />
      <Route path="/setting" component={ Setting } />
    </Router>
  );
}

export default App;

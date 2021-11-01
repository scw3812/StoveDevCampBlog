import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./routes/Main";
import Post from "./routes/Post";
import Editor from "./routes/Editor";

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Main }/>
      <Route path="/post/:id" component={ Post } />
      <Route path="/editor" component={ Editor } />
    </Router>
  );
}

export default App;

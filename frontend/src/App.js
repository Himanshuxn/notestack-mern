import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes'
import {BrowserRouter, Route} from "react-router-dom"
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import  CreateNote  from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
return (
  <BrowserRouter>
  <Header setSearch={(s) => setSearch(s)} />

  <main>
    <Route path="/" component={LandingPage} exact/>
    <Route path="/login" component={LoginScreen} exact/>
    <Route path="/register" component={RegisterScreen} exact/>
    <Route
          path="/mynotes"
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
    <Route path="/note/:id" component={SingleNote} />
    <Route path="/createNote" component={CreateNote} exact/>
    <Route path="/profile" component={ProfileScreen} />
  </main>
 
 <Footer />
  </BrowserRouter>
);
          }

export default App;

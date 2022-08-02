import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/layout.component';
import About from './pages/about/about.component';
import Contacts from './pages/contacts/contacts.component';
import Home from './pages/home/home.component';
import News from './pages/news/news.component';
import NoMatch from './pages/no-match/no-match.component';
import Post from './pages/post/post.component';
import Stats from './pages/stats/stats.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="news" element={<News />}>
          </Route>
          <Route
            path="/news/:postId"
            element={<Post />}
          />
          <Route path="stats" element={<Stats />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

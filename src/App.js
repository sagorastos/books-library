import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyComponent from './components/MyComponent';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Books from './components/Books';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="addbook" element={<AddBook />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;

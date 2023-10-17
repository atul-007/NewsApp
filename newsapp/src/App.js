import './App.css';
import {useState} from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';
import News from './components/news';
import LiveNews from './components/livenews';

function App() {
  const [search, setsearch] = useState({
    searchText: " ",
    search: false
  })
  const searching=()=>{
    const searchTEXT=document.getElementById('searchbar').value
    setsearch({
      searchText: searchTEXT,
      search: true
    })
    document.getElementById('searchbar').value=''
  }
  const resetSearch = ()=>{
    setsearch({
      searchText: "",
      search: false
    })
  }
  const [select,setSelect] = useState({
    label:"",
    value:""
  });
 
  return (
    <>
    <BrowserRouter>
    <Navbar searching={searching} setSelect={setSelect} resetSearch={resetSearch} />
    <LiveNews/>
    <Routes>
        <Route exact path="/" element={<News search={search}key='general' select={select} /> } />
        <Route exact path="business" element={<News search={search}key='business' select={select} category='business'/>} />
        <Route exact path="technology" element={<News search={search}key='technology' select={select} category='technology'/>} />
        <Route exact path="sports" element={<News search={search}key='sports' select={select} category='sports'/>} />
        <Route exact path="science" element={<News search={search}key='science' select={select} category='science'/>} />
        <Route exact path="health" element={<News search={search}key='health' select={select} category='health'/>} />
        <Route exact path="entertainment" element={<News search={search}key='entertainment' select={select} category='entertainment'/>} />
    </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;

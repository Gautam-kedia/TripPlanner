import React from "react";
import MyNavbar from "./components/MyNavbar";  
import BasicExample from './components/grid';
import Footer from "./components/Footer";
import SearchBar from "./components/searchbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
  <div className="App">
    <div>
    <MyNavbar />
    <SearchBar />
    <BasicExample />
    <Footer />

</div>
  </div>
  );
}

export default App;



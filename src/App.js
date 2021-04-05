import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Search from "./search";
import Portfolio from "./portfolio";

function App() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-2">


        <Search />
        <Portfolio />

      </div>

    </>
  );
}

export default App;

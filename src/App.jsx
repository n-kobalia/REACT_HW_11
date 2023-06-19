import logo from './logo.svg';
import './App.css';
import Book from './components/books';


function App() {
  return (
    <div>
      <Book picture="https://upload.wikimedia.org/wikipedia/ka/a/ad/Jinsebis_taoba.jpg" 
      title={"ჯინსების თაობა"} 
      description={"დათო ტურაშვილის 2008 წლის რომანი."}
      carnames={["გეგა კობახიძე", "დავით მიქაბერიძე", "სოსო წერეთელი"]}/>
    </div>
  );
}

export default App;

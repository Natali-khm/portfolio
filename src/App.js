import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter} from "react-router-dom";
import AuthorImage from "./authorImage/AuthorImage";
import Content from "./content/Content";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="innerBlock">
          <AuthorImage />
          <Content />
        </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

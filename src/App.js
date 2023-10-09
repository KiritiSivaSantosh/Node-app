
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Contact from "./components/Contact";



function App() {
  return (
   <div>
   {/* <HashRouter>
    <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </HashRouter> */}
      <Contact></Contact>

   </div>
  );
}

export default App;

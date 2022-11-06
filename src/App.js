
import './App.css';
import{ NavBar} from './components/NavBar';
import{Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Tools} from './components/Tools';
import { Projects } from './components/Projects';



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Tools />
    <Projects />
   </div>
  );
}

export default App;

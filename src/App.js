import './App.css';
import Explore from './organisms/Explore/Explore';
// import GridCard from './organisms/MainContent/GridCard';
//import Navbar from './organisms/Navbar/Navbar';
import { ThemeProvider } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './organisms/Navbar/NavBar';
import { theme } from "./Theming/Theming";
import AddBook from './organisms/AddBook/AddBook';
import ButtonAppBar from './organisms/Navbar/MenuBar';
import NavBar1 from './organisms/Navbar/Navbar1/NavBar1';
// import Library from './extra/Library';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        {/* <AddBook/> */}
        {/* <ButtonAppBar/> */}
        <NavBar />
        <NavBar1/>
        {/* <Library/> */}
        {/* <GridCard /> */}
        {/* <Explore category="Entrepreneurship"   /> */}
        {/* <Library search="Entrepreneurship" /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;

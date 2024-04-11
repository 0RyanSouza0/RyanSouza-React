import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Main from './components/main';
import Fotter from './components/footer'; 
import Descricao from './components/descricao';
import Page2 from './components/page2';
import Routes from './components/rotas';



function App() {
  
  return (
    <div className="app">
        <NavBar></NavBar>
        <Main></Main>
        <Descricao></Descricao>
        
        <Page2></Page2>
        <Fotter></Fotter>
        <Routes></Routes>
       

      
        
    </div>
  );
}

export default App;

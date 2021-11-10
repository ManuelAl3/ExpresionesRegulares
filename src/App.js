import './App.css';
import RFC from './components/RFC';
import CURP from './components/CURP';


function App() {
  return (
    <>
    <div class="card box" >
      <h1>Validación de Curp y Rfc</h1>
      <RFC />
      <CURP />
    </div>
    </>
  );
}

export default App;

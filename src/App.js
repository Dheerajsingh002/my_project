import logo from './logo.svg';
import FunctionalComponent from './components/FunctionalComponent';
import './App.css';
import {ClassComponent, ClassComponent1} from './components/ClasasComponent';
const pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29BZxdOgdxqh69fFahk0jn6AZGtH-0yenyQ&usqp=CAU';
const or=[
  <li>Home</li>,
  <li>About</li>,
  <li>Contects</li>,
  <li>Phonne</li>
];

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <img src={pic} alt="" />
     <ul>
      {or}
     </ul>
     <FunctionalComponent/>
     <ClassComponent/>
     <ClassComponent1/>
    </div>
  );
}

export default App;

import { Routes, Route} from'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AddResult from './routes/add-result/add-result.component';
import Support from './routes/support/support.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> }/>
        <Route path='add-result' element={ <AddResult/> }/>
        <Route path='support' element={ <Support /> }/>
      </Route>
    </Routes>
  );
}

export default App;

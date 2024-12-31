import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from './page/home-page';
import './assets/style.scss';
import SecondaryResearch from './page/secondary-research-page';
import SubserviceReserarchPage from './page/subservice-reserarch';
import Notfound from './component/Notfound';

const router = createBrowserRouter(
  [
    {
    path: "/",
    element: 
      <div>
        <HomePage/>
      </div>
    },
    {
    path: "/home",
    element: 
      <div>
        <HomePage/>
      </div>
    },
    {
    path: "/secondary-research",
    element: 
      <div>
        <SecondaryResearch/>
      </div>      
    },
    {
    path: "/subservice",
    element: 
      <div>
       <SubserviceReserarchPage/>
      </div>      
    },
    {
    path: "*",
    element: 
      <div>
        <Notfound/>
      </div>      
    },
  ]
);
function App() {

  return (
    <>
      <div><RouterProvider router={router}/></div>
    </>
  )
}

export default App

import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routers/routes';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

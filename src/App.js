import { createBrowserRouter, createRoutesFromElements, Route, NavLink,RouterProvider } from "react-router-dom";
import CarrerLayout from "./layouts/CarrerLayout";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import CarrerDetails,{carrerLoader} from "./pages/carrers/CarrerDetails";
import Carrers, {carrersLoader} from "./pages/carrers/Carrers";
import CarrersError from "./pages/carrers/CarrersError";
import Contact, {contactAction} from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home></Home>} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="contact" element={<Contact />} action={contactAction}></Route>
      </Route>
      <Route path="carrers" element={<CarrerLayout/>} errorElement={<CarrersError />}>
          <Route 
            index
            element={<Carrers/>} 
            loader={carrersLoader}>
          </Route>
          <Route path=":id" element={<CarrerDetails />} loader={carrerLoader} ></Route>
      </Route>
      <Route path="*" element={<NotFound />} ></Route>
    </Route>
  )
)
function App() {
  return (
   
    <RouterProvider router={router} />
  );
}

export default App

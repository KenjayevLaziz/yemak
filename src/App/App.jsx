import { BrowserRouter, Route, Routes} from "react-router-dom"
// import Header from "../components/Header/Header"
import Restaurants from "../components/Restaurants/Restaurants"
import ResItem from "../components/RestautantItem/ResItems"
import NotPage from "../components/Pages/NotPage"
import PageLayout from "../layout/PageLayout"
export default function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route path="" element={<Restaurants/>}/>
          <Route path="home"  element={<Restaurants/>}/>
          <Route path="*" element={<NotPage/>}/>
          <Route path="home/:id" element={<ResItem/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
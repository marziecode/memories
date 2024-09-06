import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import Header from "./components/header/Header";
import BottomMenu from "./components/bottomMenu/BottomMenu";



function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        {routes?.map((item, idx) => (
          <Route key={idx} path={item.path} element={item.element} />
        ))}
      </Routes>
      <BottomMenu/>
    </BrowserRouter>
  );
}

export default App;
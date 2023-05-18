import { Outlet } from "react-router-dom";

import Footer from "./Pages/Footer/Footer";

import Header from "./Pages/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[1280px] mx-auto mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

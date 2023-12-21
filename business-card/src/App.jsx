import MainPage from "./pages/MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import GlobalContext from "./context/GlobalContext.jsx";

function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;

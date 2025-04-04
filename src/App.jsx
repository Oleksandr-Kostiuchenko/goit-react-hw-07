import style from "./App.module.css";

//* Pages
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AddPage from "./pages/AddPage/AddPage";
import FavPage from "./pages/FavPage/FavPage";

//* Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/fav" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;

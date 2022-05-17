import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import Header from "./components/Header/Header.jsx";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<UsersPage />} />
            <Route path="/:id" element={<UserDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

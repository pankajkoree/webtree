import { Route, Routes, useNavigate } from "react-router";
import ProfilePage from "./profile/page";

function App() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="App relative flex justify-center mt-12">
      <Routes>
        <Route
          path="/"
          element={
            <button
              className="relative flex px-4 py-2 text-xl border-2 border-green-500 hover:bg-green-500 hover:text-white"
              onClick={handleProfileClick}
            >
              Profile
            </button>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

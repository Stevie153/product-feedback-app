import "./App.css";
import Header from "./components/common/Header";
import Sidebar from "./components/common/SideBar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        {/* Main content */}
        <div className="flex-1 p-6">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;

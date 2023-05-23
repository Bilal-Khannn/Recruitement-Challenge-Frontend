import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      {/* Main container with 2 main components*/}
      <div className="flex bg-black w-screen min-h-screen">
        {/* Nav on the left */}
        <Nav />
        {/* Dashboard on the right */}
        <div
          className="bg-greylevel3 z-10 rounded-r-none rounded-l-3xl w-screen"
          // style={{ height: "1006px" }}
        >
          {/* Main container  */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;

import brand from "./assets/brand.png";
import home from "./assets/home.png";

function App() {
  return (
    <>
      {/* Main container with 2 partitions*/}
      <div className="flex bg-greylevel1">
        {/* Nav on the left */}
        <div className=" h-screen w-1/12 z-0">
          {/* Inner container for icons */}
          <div className="flex flex-col">
            {/* logo  */}
            <img src={home} alt="logo" className="text-cyan-400" />
          </div>
        </div>
        {/* Dashboard on the right */}
        <div className="bg-unselectedstate h-screen w-11/12 z-10 rounded-r-none rounded-l-3xl">
          <h1 className="ml-6">body</h1>
        </div>
      </div>
    </>
  );
}

export default App;

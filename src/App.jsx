import { useState } from "react";
import Logo from "./icons/Logo";
import Home from "./icons/Home";
import Listing from "./icons/Listing";
import Setting from "./icons/Setting";
import Notification from "./icons/Notification";
// import Eth from "./components/Eth";
// import Arrow from "./components/Arrow";
import Dashboard from "./components/Dashboard";
function App() {
  // for Home icon
  const [homeflag, setHomeflag] = useState(false);
  const [homecolor, setHomeColor] = useState("#808287");

  // for Listing icon
  const [listingflag, setListingflag] = useState(false);
  const [listingcolor, setListingcolor] = useState("#808287");

  // for setting icon
  const [settingflag, setSettingflag] = useState(false);
  const [settingcolor, setSettingcolor] = useState("#808287");

  const handleHome = () => {
    const homebutton = document.getElementById("homebutton");
    if (!homeflag) {
      setHomeflag(true);
      setHomeColor("#FFFFFF");
      homebutton.classList.add("border-l");
    } else {
      setHomeflag(false);
      setHomeColor("#808287");
      homebutton.classList.remove("border-l");
    }
  };

  const handleListing = () => {
    const listingbutton = document.getElementById("listingbutton");
    if (!listingflag) {
      setListingflag(true);
      setListingcolor("#FFFFFF");
      listingbutton.classList.add("border-l");
    } else {
      setListingflag(false);
      setListingcolor("#808287");
      listingbutton.classList.remove("border-l");
    }
  };

  const handleSetting = () => {
    const settingbutton = document.getElementById("settingbutton");
    if (!settingflag) {
      setSettingflag(true);
      setSettingcolor("#FFFFFF");
      settingbutton.classList.add("border-l");
    } else {
      setSettingflag(false);
      setSettingcolor("#808287");
      settingbutton.classList.remove("border-l");
    }
  };

  return (
    <>
      {/* Main container with 2 partitions*/}
      <div className="flex bg-black">
        {/* Nav on the left */}
        <div
          className="  z-0 flex justify-center"
          style={{ height: "1006px", width: "108px" }}
        >
          {/* Inner container for icons */}
          <div className="flex flex-col justify-between">
            {/* logo  */}
            <div className="flex justify-center mt-12">
              <Logo />
            </div>
            {/* icons */}
            <div className="flex justify-center">
              <ul className="space-y-16">
                {/* Home  */}
                <li className="">
                  <button
                    id="homebutton"
                    className="px-10 py-2"
                    onClick={handleHome}
                  >
                    <Home strokecolor={homecolor} />
                  </button>
                </li>

                {/* nft listing  */}
                <li>
                  <button
                    id="listingbutton"
                    className="px-10  py-2 "
                    onClick={handleListing}
                  >
                    <Listing strokecolor={listingcolor} />
                  </button>
                </li>
                {/* settings  */}
                <li>
                  <button
                    id="settingbutton"
                    className="px-10  py-2"
                    onClick={handleSetting}
                  >
                    <Setting strokecolor={settingcolor} />
                  </button>
                </li>
              </ul>
            </div>
            {/* notifications  */}
            <div className="flex justify-center mb-12">
              <Notification />
            </div>
          </div>
        </div>
        {/* Dashboard on the right */}
        <div
          className="bg-greylevel3 z-10 rounded-r-none rounded-l-3xl "
          style={{ height: "1006px", width: "1332px" }}
        >
          {/* Main container  */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;

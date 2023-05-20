import { useState } from "react";
import Logo from "../icons/Logo";

import Home from "../icons/Home";
import Listing from "../icons/Listing";
import Setting from "../icons/Setting";
import Notification from "../icons/Notification";

const Nav = () => {
  // for Home icon
  const [homebordercolor, setHomebordercolor] = useState("black");
  const [homeflag, setHomeflag] = useState(false);
  const [homecolor, setHomeColor] = useState("#808287");

  // for Listing icon
  const [listingbordercolor, setListingbordercolor] = useState("black");
  const [listingflag, setListingflag] = useState(false);
  const [listingcolor, setListingcolor] = useState("#808287");

  // for setting icon
  const [settingbordercolor, setSettingbordercolor] = useState("black");
  const [settingflag, setSettingflag] = useState(false);
  const [settingcolor, setSettingcolor] = useState("#808287");

  const handleHome = () => {
    if (!homeflag) {
      setHomeflag(true);
      setHomeColor("#FFFFFF");
      setHomebordercolor("white");
    } else {
      setHomeflag(false);
      setHomeColor("#808287");
      setHomebordercolor("black");
    }
  };

  const handleListing = () => {
    if (!listingflag) {
      setListingflag(true);
      setListingcolor("#FFFFFF");
      setListingbordercolor("white");
    } else {
      setListingflag(false);
      setListingcolor("#808287");
      setListingbordercolor("black");
    }
  };

  const handleSetting = () => {
    if (!settingflag) {
      setSettingflag(true);
      setSettingcolor("#FFFFFF");
      setSettingbordercolor("white");
    } else {
      setSettingflag(false);
      setSettingcolor("#808287");
      setSettingbordercolor("black");
    }
  };

  return (
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
                className={`px-10 py-2 border-l-2 border-l-${homebordercolor} transition delay-75`}
                onClick={handleHome}
              >
                <Home strokecolor={homecolor} />
              </button>
            </li>

            {/* nft listing  */}
            <li>
              <button
                id="listingbutton"
                className={`px-10 py-2 border-l-2 border-l-${listingbordercolor} transition delay-75`}
                onClick={handleListing}
              >
                <Listing strokecolor={listingcolor} />
              </button>
            </li>
            {/* settings  */}
            <li>
              <button
                id="settingbutton"
                className={`px-10 py-2 border-l-2 border-l-${settingbordercolor} transition delay-75`}
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
  );
};

export default Nav;

import propTypes from "prop-types";

const Home = ({ strokecolor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke={strokecolor}
        strokeLinejoin="round"
        strokeWidth="1.5"
        className="transition delay-75"
        d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z"
      />
      <path
        stroke={strokecolor}
        strokeLinecap="round"
        className="transition delay-75"
        strokeWidth="1.5"
        d="M10 18h4"
      />
    </svg>
  );
};

Home.propTypes = {
  strokecolor: propTypes.string.isRequired,
};

export default Home;

import React, { useState } from "react";
import logo from "../Assets/moptro.png";
import logo2 from "../Assets/Group.png";

const Contact = ({ setCurrentUrl }) => {
  const handleDashboardClick = () => {
    window.history.pushState({}, "", "/dashboard");
    setCurrentUrl(window.location.pathname);
  };
  const handleContactClick = () => {
    window.history.pushState({}, "", "/contact");
    setCurrentUrl(window.location.pathname);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const users = [
    {
      id: 1,
      name: "Arjun",
      position: "Software Engineer",
      employerId: "1",
      dob: "1990-01-01",
    },
    {
      id: 2,
      name: "Mahesh",
      position: "Web Developer",
      employerId: "2",
      dob: "1995-05-05",
    },
    {
      id: 3,
      name: "John",
      position: "Data Scientist",
      employerId: "3",
      dob: "1988-09-15",
      role: "Senior Data Scientist"
    },
    {
      id: 4,
      name: "Alice",
      position: "UI/UX Designer",
      employerId: "4",
      dob: "1992-03-22",
      role: "Lead UI/UX Designer"
    },
    {
      id: 5,
      name: "Emma",
      position: "Product Manager",
      employerId: "5",
      dob: "1985-11-10",
      role: "Senior Product Manager"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-md w-full mx-auto rounded-xl shadow-xl">
      <img className="h-20 w-auto ml-auto "  src={logo2} alt="Workflow" />
      <div className="text-center ml-20 mt-10 relative whitespace-nowrap">
            <div className="absolute inset-0   flex items-center justify-center">
              <div className="h-10 w-10 bg-gray-400   rounded-full shadow-2xl"></div>
            </div>
            <h2 className="text-white relative z-10">4</h2>
          </div>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Workflow" />
        
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative mt-5 flex items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search with Name"
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 appearance-none border rounded-2xl border-gray-300 placeholder:text-white py-2 px-4 bg-gray-700 text-white font-semibold placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 text-center sm:w-full md:w-auto" 
          />
          <button className="absolute right-0 text-white mr-5 top-0 h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-md w-72 mx-auto">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <div
              key={user.id}
              className="bg-gray-700 bg-opacity-50 shadow-2xl p-4 rounded-2xl mb-4"
            >
              <div className="flex">
                <h2 className="text-white font-mulish text-xs leading-6 mb-1">
                  Employer ID :
                </h2>
                <p className="text-white ml-2 font-semibold font-mulish text-xs leading-6">
                  {user.employerId}
                </p>
              </div>
              <div className="flex">
                <h2 className="text-white font-mulish text-xs leading-6 mb-1">
                  Name :
                </h2>
                <p className="text-white ml-2 font-semibold font-mulish text-xs leading-6">
                  {user.name}
                </p>
              </div>
              <div className="flex">
                <h2 className="text-white font-mulish text-xs leading-6 mb-1">
                  Date of Birth :
                </h2>
                <p className="text-orange-400 font-semibold ml-2 font-mulish text-xs leading-6">
                  {user.dob}
                </p>
              </div>
              <div className="flex">
                <h2 className="text-white font-mulish text-xs leading-6 mb-1">
                  Role :
                </h2>
                <p className="text-green-400 font-semibold ml-2 font-mulish text-xs leading-6">
                  {user.position}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-gray-900 gap-20 flex justify-center space-x-4 rounded-2xl py-4 px-5 text-center text-white"style={{ backgroundColor: "#0F2323"}}>

<button className="flex items-center " onClick={ handleDashboardClick}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
</button>
<button className="flex items-center" onClick={handleContactClick}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3 3 0 100 6 3 3 0 000-6zm0 8a8 8 0 00-6 3.2c.01 1.74 3.29 2.8 6 2.8s5.99-1.06 6-2.8c-1.29-1.55-3.81-2.52-6-2.8z"
    />
  </svg>
</button>

</div>
    </div>
  );
};

export default Contact;

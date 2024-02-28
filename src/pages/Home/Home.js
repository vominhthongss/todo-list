import React, { useState } from "react";

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {};

  return (
    <div className="flex h-screen">
      <div
        style={{ width: "60px", height: "1024px", backgroundColor: "#FAFAFA" }}
      >
      </div>

      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <div
          className="h-16 bg-gray-800 flex items-center justify-between px-4 text-white"
          style={{
            backgroundColor: "#FAFAFA",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div className="flex items-center">
            {/* open dropdown */}
            <div
              className="mr-2 cursor-pointer "
              onClick={toggleDropdown}
              style={{ color: "#5294C4" }}
            >
              username@gmail.com
            </div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 4.29167C19.4166 4.29167 21.3749 6.25 21.3749 8.66667C21.3749 11.0833 19.4166 13.0417 16.9999 13.0417C14.5833 13.0417 12.6249 11.0833 12.6249 8.66667C12.6249 6.25 14.5833 4.29167 16.9999 4.29167ZM16.9999 23.0417C23.1874 23.0417 29.7083 26.0833 29.7083 27.4167V29.7083H4.29159V27.4167C4.29159 26.0833 10.8124 23.0417 16.9999 23.0417ZM16.9999 0.333332C12.3958 0.333332 8.66658 4.0625 8.66658 8.66667C8.66658 13.2708 12.3958 17 16.9999 17C21.6041 17 25.3333 13.2708 25.3333 8.66667C25.3333 4.0625 21.6041 0.333332 16.9999 0.333332ZM16.9999 19.0833C11.4374 19.0833 0.333252 21.875 0.333252 27.4167V33.6667H33.6666V27.4167C33.6666 21.875 22.5624 19.0833 16.9999 19.0833Z"
                fill="black"
              />
            </svg>

            {/* Dropdown */}
            {showDropdown && (
              <div
                className="absolute right-0 mt-8 w-48 bg-white shadow-lg rounded-md z-10"
                style={{ top: "30px" }}
              >
                <div className="py-1">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
                        fill="black"
                      />
                    </svg>

                    <button
                      onClick={() => {
                        // Information
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Information
                    </button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 8.88889L27.18 12.0222L32.34 17.7778H12V22.2222H32.34L27.18 27.9556L30 31.1111L40 20L30 8.88889ZM4 4.44444H20V0H4C1.8 0 0 2 0 4.44444V35.5556C0 38 1.8 40 4 40H20V35.5556H4V4.44444Z"
                        fill="black"
                      />
                    </svg>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* task */}
        <div
          className="flex-1 p-4 grid grid-cols-4 gap-4 rounded-md  "
          style={{ backgroundColor: "#D9D9D9" }}
        >
          {/* 12 task */}
          {Array.from({ length: 12 }, (_, index) => (
            <div className="rounded-md "
            style={{ backgroundColor: "#FFFFFF", width: '250px', height: '250px', borderRadius: '10px' , border: '5px solid #5294C4'}}
            >
                <div
              key={index}
              className="bg-gray-300 p-4  "
              style={{ backgroundColor: "#FFFFFF", color: "#000000", display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold", }}
            >
              Task 1
            </div>
            <div  key={index}
              className="bg-gray-300 p-4 "
              style={{ backgroundColor: "#FFFFFF", color: "#000000", fontStyle: "italic", }}>
            Reference site about Lorem Ipsum, giving information on its origins.
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

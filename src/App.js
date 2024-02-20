import "./App.css";
import ButtonCustom from "./components/ButtonCustom/ButtonCustom";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-96 h-auto rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="panel flex flex-col items-center">
          <div>
            <text className="main background-color: #5294C4 mt-14">EMAIL *</text>
            <input
              type="email"
              className="bg-[#FAFAFA] emailInput w-72 mt-2 mb-5 h-14  rounded-lg border-gray-400 px-4"
              placeholder="Email"
            />
          </div>
          <div>
            <text className="typographic block text-left main background-color: #5294C4">
              PASSWORD *
            </text>
            <input
              type="password"
              className="bg-[#FAFAFA] passwordInput w-72 h-14 mt-2 rounded-lg border-gray-400 px-4"
              placeholder="Password"
            />
            <div className="registerButton mt-6 ">
              <ButtonCustom
                title={"LOGIN"}
              />
              <div className="mt-6">
              <span className="text-sm">Register now </span>
              <a href="#" className=" text-sm ml-1">
                {">>"}
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

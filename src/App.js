import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <>
      <Provider store={store}>
        <div className="container text-center my-3">
          <div class="row ">
            <div class="col">
              <Counter />
            </div>
            <div class="col">
              <RichTextEditor userData={userData} />
            </div>
          </div>
        </div>

        <UserForm userData={userData} setUserData={setUserData} />
      </Provider>
    </>
  );
}

export default App;

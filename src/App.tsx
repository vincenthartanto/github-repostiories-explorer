import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import useToggle from "./Hooks/useToggle";

interface UserListInterface {
  login: string;
}
function App() {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState<UserListInterface[]>();
  const isSearch = useToggle();
  const isLoading = useToggle();
  const isError = useToggle();
  async function searchUser() {
    if (username !== "") {
      try {
        isSearch.isToggleFalse();
        isLoading.changeToggle();
        const url = `https://api.github.com/search/users?q=${username}`;
        const response = await fetch(url);
        if (!response.ok) {
          isError.changeToggle();
        }
        const data = await response.json();
        setUserList(data.items);
        isLoading.changeToggle();
        isSearch.isToggleTrue();
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="space-y-2 p-4 md:flex md:flex-col md:items-center md:justify-center md:h-screen">
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          isSearch.isToggleFalse();
        }}
        className="w-full bg-gray-300 border-2 p-4 border-gray-500 text-gray-800 md:w-1/2"
        placeholder="Enter Username..."
      ></input>
      <button
        data-testid="button"
        onClick={searchUser}
        className="bg-blue-500 text-white w-full p-4 md:w-1/2"
      >
        Search
      </button>
      {isSearch.isToggle && <p>Showing User For "{username}"</p>}
      {isError.isToggle && <p className="text-red-500 ">Users not Found</p>}
      {isLoading.isToggle && <p>Loading...</p>}
      <ul className="md:w-1/2">
        {userList?.slice(0, 5).map((user, idx) => {
          return (
            <li data-testid="user-item" key={idx} className="space-y-2">
              <Card key={user.login} name={user.login}></Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

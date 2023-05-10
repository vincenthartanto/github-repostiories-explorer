import useToggle from "../Hooks/useToggle";
import { useState } from "react";
import CardDetail from "./CardDetail";
interface CardProps {
  name: string;
}
interface UserRepo {
  name: string;
  stargazers_count: number;
  description: string;
}
export default function Card({ name }: CardProps) {
  const isCardOpened = useToggle();
  const [userReposList, setUserReposList] = useState<UserRepo[]>();
  const isLoading = useToggle();
  async function searchRepositiories(username: string) {
    try {
      isLoading.changeToggle();
      const url = `https://api.github.com/users/${username}/repos`;
      const response = await fetch(url);
      const data = await response.json();
      setUserReposList(data);
      console.log(data);
      isCardOpened.changeToggle();
      isLoading.changeToggle();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div
      data-testid="card"
      onClick={() => {
        searchRepositiories(name);
      }}
    >
      <div className="bg-gray-300 border flex items-center  justify-between p-4">
        <p>{name}</p>
        {isCardOpened.isToggle === false ? (
          <i className="fa fa-angle-down"></i>
        ) : (
          <i className="fa fa-angle-up"></i>
        )}
      </div>
      {isLoading.isToggle && <p>Loading...</p>}
      <div className="space-y-2">
        {isCardOpened.isToggle &&
          userReposList?.slice(0, 5).map((repo, idx) => {
            return (
              <div data-testid="card-detail">
                <CardDetail
                  key={idx}
                  star={repo.stargazers_count}
                  resTitle={repo.name}
                  resDescription={repo.description}
                ></CardDetail>
              </div>
            );
          })}
      </div>
    </div>
  );
}

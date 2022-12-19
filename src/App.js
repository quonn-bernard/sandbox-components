import "./styles.css";
import { useFetch } from "./hooks/UseData";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const { data, isLoading, error } = useFetch("https://swapi.dev/api/people");

  const renderData = (() => {
    if (isLoading) return <div>Loading...</div>;
    return (
      <div>
                {error && <div>{error}</div>}
                
        {data && (
          <div>
            {
              <div>
                {data.results.map((data) => (
                  <p key={uuidv4()}>{data.name}</p>
                ))}
              </div>
            }
          </div>
        )}{" "}
              
      </div>
    );
  })();

  return (
    <div className="App">
      <ul>{renderData}</ul>
    </div>
  );
}

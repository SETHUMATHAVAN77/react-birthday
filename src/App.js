import "./app.css";
import dataDogs from "./data";
import Dogs from "./components/Dogs";

function App() {
  return (
    <main className="card">
      <h1>
        <span>5</span> BirthDays today
      </h1>
      <div>
        <Dogs dogsData={dataDogs} />
      </div>
      <button>Clear All</button>
    </main>
  );
}

export default App;

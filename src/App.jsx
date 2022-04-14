import "./App.css";
import TopicCard from "./TopicCard";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#e2ecb0",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          padding: "16px",
          textAlign: "center",
          color: "#df4380",
          fontSize: `calc(10px + 2vmin)`,
        }}
      >
        <h1>Kameleon</h1>
      </header>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopicCard
          topicCard={{
            name: "Cities",
            examples: [
              "Philly",
              "Buenos Aires",
              "Sydney",
              "Tokyo",
              "Beijing",
              "London",
              "Paris",
              "Oslo",
              "Johannesburg",
              "Hanoi",
              "Lima",
              "Medellin",
              "Cairo",
              "Dubai",
              "Moscow",
              "Honolulu",
            ],
          }}
        />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import GameStatusSection from "./GameStatusSection";
import PlayerSection from "./PlayerSection";
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
          fontSize: `calc(10px + 2vmin)`,
        }}
      >
        <h1>Kameleon</h1>
      </header>
      <main style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div
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
            secretWord="Hanoi"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PlayerSection
            players={[
              { name: "Courtney", id: 1 },
              { name: "Nancy", id: 2 },
              { name: "John", id: 3 },
            ]}
          />
          <GameStatusSection isStarted />
        </div>
      </main>
    </div>
  );
}

export default App;

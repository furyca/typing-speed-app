import WordsContainer from "./components/WordsContainer";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import TypeArea from "./components/TypeArea";
import Results from "./components/Results";
import { useSelector } from "react-redux";

function App() {
  const results = useSelector(state => state.wordsSlice.showResults)
  return (
    <div>
      <Header />
      <div className="container">
        <Countdown />
        <WordsContainer />
        <TypeArea />
        {results && <Results />}
      </div>
      
    </div>
  );
}

export default App;

import './App.css';
import FAQList from './components/FAQList';
import Header from './components/Header';

import data from './data.json';

function App() {
  return (
    <>
      <Header />
      <FAQList questions={data.questions} />
    </>
  );
}

export default App;

import './App.css';
import FAQList from './components/FAQList';
import Header from './components/Header';

import data from './data.json';

function App() {
  return (
    <div className='bg-c-white ml-6 mr-6 pt-6 pr-6 pb-6 pl-6'>
      <Header />
      <FAQList questions={data.questions} />
    </div>
  );
}

export default App;

import './App.css';
import FAQList from './components/FAQList';
import Header from './components/Header';

import data from './data.json';

function App() {
  return (
    <div className='faq' role='main'>
      <div className='faq__container'>
        <Header />
        <FAQList questions={data.questions} />
      </div>
    </div>
  );
}

export default App;

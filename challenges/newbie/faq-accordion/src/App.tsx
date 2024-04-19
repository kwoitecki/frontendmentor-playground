import './App.css';
import FAQList from './components/FAQList';
import Header from './components/Header';

import data from './data.json';

function App() {
  return (
    <div className='bg-c-light-pink h-screen flex justify-center font-c-font-family custom-bg'>
      <div className='bg-c-white mt-36 ml-6 mr-6 mt- pt-6 pr-6 pb-6 pl-6 rounded-custom-small'>
        <Header />
        <FAQList questions={data.questions} />
      </div>
    </div>
  );
}

export default App;

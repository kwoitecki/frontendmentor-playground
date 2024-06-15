import './App.scss';
import PageContent from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className='page'>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}

export default App;

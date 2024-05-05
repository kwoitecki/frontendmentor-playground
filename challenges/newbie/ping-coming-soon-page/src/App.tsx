import './App.scss';
import PageContent from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <main className='main'>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </main>
  );
}

export default App;

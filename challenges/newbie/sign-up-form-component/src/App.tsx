import './App.scss';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <main className='signup'>
      <div className='signup__container'>
        <header className='signup__header'>
          <h1 className='signup__header__title'>
            Learn to code by watching others
          </h1>
          <p className='signup__header__description'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </header>

        <SignUpForm />
      </div>
    </main>
  );
}

export default App;

import { useState } from 'react';
import './App.scss';
import Rating from './components/Rating';
import Feedback from './components/Feedback';

function App() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (rating: number) => {
    setRating(() => rating);
    setShowFeedback(() => true);
  };

  return (
    <main>
      {!showFeedback && <Rating onSubmit={handleSubmit} />}
      {showFeedback && <Feedback rating={rating} />}
    </main>
  );
}

export default App;

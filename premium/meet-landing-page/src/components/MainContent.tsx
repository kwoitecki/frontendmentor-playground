import StepOne from './controls/FirstStep';
import SecondStep from './controls/SecondStep';

const MainContent = () => {
  return (
    <main className='steps'>
      <StepOne />
      <SecondStep />
    </main>
  );
};

export default MainContent;

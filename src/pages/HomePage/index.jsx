import './style.css';
import { Text } from '../../components/Text';
import { MainContainer } from '../../components/MainContainer';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Text />
        <MainContainer />
      </div>
    </>
  );
};

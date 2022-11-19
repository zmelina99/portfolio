import React from 'react';
import styles from './home.module.scss';

export const Home: React.FC = () => {
  const { HomeContainer, Home__Title, Home__Subtitle, Home__Description } =
    styles;

  return (
    <div className={HomeContainer}>
      <div className={Home__Title}>Hello, Hola, Bonjour!</div>
      <div className={Home__Subtitle}>My name is Melina</div>
      <div className={Home__Description}>I'm a Software Engineer</div>
    </div>
  );
};
export default Home;

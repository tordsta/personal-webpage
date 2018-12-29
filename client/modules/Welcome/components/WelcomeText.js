import React from 'react';

// Import Style
import styles from './WelcomeText.css';

function WelcomeText() {
  return (
    <div className={styles.welcome}>
      <h1 className={styles['welcome-header']}>
        Welcome
      </h1>
      <p className={styles['welcome-text']}>
        My name is Tord Standnes and this my personal web page.<br />
        For now the only use of this website is for me to play around with.<br />
        Feel free to look around. <br />
        <br />
        This web page is written with the MERN stack.
      </p>
    </div>
  );
}

export default WelcomeText;

import React from 'react';
import TextField from '../../atoms/textfield/textfield.tsx';
import styles from './contact.module.scss';

export const Contact: React.FC = () => {
  const {
    ContactContainer,
    Contact__FormContainer,
    Contact__Form__Input,
    Contact__Form,
    Contact__Form__Header,
    Contact__MapContainer,
    Contact__Title,
    Contact__Description,
  } = styles;

  return (
    <div className={ContactContainer}>
      <div className={Contact__FormContainer}>
        <span className={Contact__Title}>Reach Out!</span>
        <div className={Contact__Description}>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </div>
        <div className={Contact__Form}>
            <div className={Contact__Form__Input}>
              <TextField
                disabled={false}
                placeholder="Name"
                inputSize="small"
              />
            </div>
            <div className={Contact__Form__Input} id={styles.Contact__Form__Input__Email}>
              <TextField
                disabled={false}
                placeholder="Email"
                inputSize="small"
              />
          </div>

          <div className={Contact__Form__Input}>
            {' '}
            <TextField
              disabled={false}
              placeholder="Subject"
              inputSize="large"
            />
          </div>
          <div className={Contact__Form__Input}>
            {' '}
            <TextField
              disabled={false}
              placeholder="Message"
              inputSize="xLarge"
            />
          </div>
        </div>
      </div>
      <div className={Contact__MapContainer}></div>
    </div>
  );
};

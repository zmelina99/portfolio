import React, { InputHTMLAttributes } from 'react';
import styles from './textfield.module.scss';

export type TextFieldProps = {
    placeholder?: string;
    inputSize?: 'small' | 'medium' | 'large' | 'xLarge';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reference?: React.RefObject<HTMLInputElement>;
  } & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  inputSize = 'medium',
  reference,
  ...props
}) => (
  <div className={`${styles.TextField} ${styles[`TextField--${inputSize}`]} `} ref={reference}>
    <input type="text" className={styles.TextField__Input} placeholder={placeholder} {...props} />
  </div>
);
export default TextField;

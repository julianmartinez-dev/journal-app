import { useState } from 'react';

const useForm = (valorInicial = {}) => {

  //Recibe un objeto como estado inicial con las propiedades que se van a utilizar
  const [values, setValues] = useState(valorInicial);

  const reset = () => {
    setValues(valorInicial);
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange, reset];
};

export default useForm;

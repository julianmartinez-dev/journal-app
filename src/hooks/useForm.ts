import { ChangeEvent, ChangeEventHandler, useState } from 'react';

interface IinitialForm {
  user?: string;
  password?: string;
  name?: string;
  email?: string;
}

export const useForm = (initialForm: IinitialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

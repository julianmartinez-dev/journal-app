import { RestaurantMenu, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ImageGallery } from '../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote } from '../../store/journal';
import { startSaveNote } from '../../store/journal/thunks';
import { AnyAction } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

interface Inputs {
  title: string;
  body: string;
}

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active, messageSaved, isSaving } = useSelector((state: RootState) => state.journal);

  //React-Hook-Form
  const defaultValues = {
    title: active?.title,
    body: active?.body,
  };
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  const watchTitle = watch('title');
  const watchBody = watch('body');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch( setActiveNote({
      ...active,
      title: watchTitle,
      body: watchBody,
    } ))
  } , [watchTitle, watchBody]);

  useEffect(() => {
    reset(defaultValues);
  }, [active]);

  useEffect(() => {
    if (messageSaved) {
      Swal.fire({
        title: 'Nota Actualizada',
        text: messageSaved,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  }, [messageSaved]);

  const dateString = useMemo(() => {
    const newDate = new Date(active!.date);
    return newDate.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }, [active?.date]);

  const onSubmit: SubmitHandler<Inputs> = () => {
    dispatch(startSaveNote() as unknown as AnyAction);
  };

  const onInputFileChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length === 0) return;

    console.log('subiendo archivos')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        justifyContent={'space-between'}
        sx={{ marginBottom: 1 }}
        alignItems="center"
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        <Grid item>

          <input
            type="file"
            multiple
            onChange={onInputFileChange}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />

          <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current?.click()}>
            <UploadOutlined />
          </IconButton>


          <Button
            color="primary"
            sx={{ padding: 2 }}
            type="submit"
            disabled={isSaving}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: 'none', marginBottom: 1 }}
            {...register('title', {
              required: 'El titulo es obligatorio',
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedió en el día de hoy?"
            minRows={5}
            {...register('body', {
              required: 'El titulo es obligatorio',
            })}
            error={!!errors.body}
            helperText={errors.body?.message}
          />
        </Grid>
        <ImageGallery />
      </Grid>
    </form>
  );
};
function watch(arg0: string): unknown {
  throw new Error('Function not implemented.');
}

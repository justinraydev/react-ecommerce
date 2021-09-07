import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

const FormInput = ({name, label, required, placeholder}) => {
  const { control } = useFormContext();
   

  return (
    <Grid item xs={24} sm={12}>
      <input 
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
        placeholder={placeholder}
      />

    </Grid>
  )
}

export default FormInput;

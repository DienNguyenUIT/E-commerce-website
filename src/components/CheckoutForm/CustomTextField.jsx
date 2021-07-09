// Kết nối các text field trong address form với react hook form
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label }) {
  const { control } = useFormContext(); // from react hook form

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        defaultValue=""
      />
    </Grid>
    // <Grid item xs={12} sm={6}>
    //   <Controller
    //     control={control}
    //     name={name}
    //     defaultValue=""
    //     render={({ field }) => <TextField fullWidth label={label} required />}
    //   />
    // </Grid>
  );
}

export default FormInput;

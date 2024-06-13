import React from "react";
import { MuiFileInput } from "mui-file-input";
import { Controller, useForm, useFormContext } from "react-hook-form";

type TFileUploaderProps = {
  name: "file",
  label: string,
};


export const VCFileUploader = ({name, label}:TFileUploaderProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiFileInput
        label={label}
          {...field}
          helperText={fieldState.invalid ? "File is invalid" : ""}
          placeholder="Upload Photo"
          error={fieldState.invalid}
          fullWidth
        />
      )}
    />
  );
};

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";

interface PhoneNumberInputProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    newValue?: string
  ) => void;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onChange,
}) => {
  const [telephone, setTelephone] = useState<string>("");
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    null
  );

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
    const completePhone = selectedCountryCode + e.target.value;

    onChange && onChange(e, completePhone);
  };

  const handleCountryCodeChange = (e: any, value: string | null) => {
    setSelectedCountryCode(value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Autocomplete
          options={countryCodes}
          getOptionLabel={(option) => option}
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
          renderInput={(params) => (
            <TextField {...params} label="Country Code" placeholder="+1" />
          )}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Phone Number"
          value={telephone}
          onChange={handlePhoneNumberChange}
          placeholder="123-456-7890"
          type="tel"
        />
      </Grid>
    </Grid>
  );
};

const countryCodes = ["+1", "+44", "+98", "+81"]; // Example country codes

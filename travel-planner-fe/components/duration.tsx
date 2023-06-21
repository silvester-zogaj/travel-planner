"use client";
import { SetStateAction, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface DurationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  numDays: number | null;
  setNumDays: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Duration({
  setCurrentPage,
  currentPage,
  numDays,
  setNumDays,
}: DurationProps) {
  const [day, setDay] = useState<string>("Monday");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setCurrentPage(currentPage + 1);
  };

  const handleReturn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(currentPage - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNumDays(value);
    setIsDisabled(value < 1 || value > 7);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl
          fullWidth
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h3">
            Tell us a little more about your trip
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Which day do you arrive?</InputLabel>
            <Select label="Which day do you arrive?" onChange={handleSelect}>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="How many days are you there for?"
              id="numDays"
              value={numDays}
              type="number"
              inputProps={{ min: 1, max: 7 }}
              onChange={handleChange}
            />
          </FormControl>
          <Button variant="contained" type="submit" disabled={isDisabled}>
            Continue
          </Button>
          <Button variant="contained" onClick={handleReturn} type="submit">
            Return
          </Button>
        </FormControl>
      </form>
    </>
  );
}

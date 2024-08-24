import { Button, Paper, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Fragment, useState } from "react";
import Link from "next/link";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  return (
    <Fragment>
      <Paper elevation={4} className="md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-lg">
        <div className="text-4xl mt-16 ml-12">Sign in</div>
        <form className="flex flex-col p-10 pt-4">
          <FormControl className="m-2">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="client"
                control={<Radio color="secondary" size="large" />}
                label="Client"
                className="mr-20"
              />
              <FormControlLabel
                value="volunteer"
                control={<Radio color="secondary" size="large" />}
                label="Volunteer"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-basic fullWidth outlined-error"
            label="Email"
            required={true}
            color="secondary"
            className="m-2"
          />
          <FormControl
            variant="outlined"
            required={true}
            color="secondary"
            className="m-2"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="text-secondary font-bold p-2 cursor-pointer">
            Forget Password?
          </div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className="rounded-full m-4 font-bold mt-10 p-4"
          >
            Sign in
          </Button>
        </form>
      </Paper>
      <div className="flex justify-center mt-8">
        <div>No account yet?</div>
        <Link href="" className="text-secondary font-bold ml-4">
          Regiter now
        </Link>
      </div>
    </Fragment>
  );
}

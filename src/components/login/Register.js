import { Button, Paper, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Fragment } from "react";
import Link from "next/link";
import Password from "./Password";

export default function Register() {
  return (
    <Fragment>
      <Paper elevation={4} className="md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-lg">
        <div className="text-4xl mt-16 ml-12">Sign up</div>
        <form className="flex flex-col p-10 pt-4">
          <FormControl className="m-2">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              required={true}
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
          <TextField
            id="outlined-basic fullWidth outlined-error"
            label="First Name"
            required={true}
            color="secondary"
            className="m-2"
          />
          <TextField
            id="outlined-basic fullWidth outlined-error"
            label="Last Name"
            required={true}
            color="secondary"
            className="m-2"
          />
          <Password placeHolder="Password" />
          <Password placeHolder="Confirm Password" />

          <div className="text-secondary font-bold p-2 cursor-pointer">
            Forget Password?
          </div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className="rounded-full m-4 font-bold mt-10 p-4"
          >
            Register
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

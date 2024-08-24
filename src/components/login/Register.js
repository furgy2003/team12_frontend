import { Button, FormGroup, FormLabel, Paper, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

import { Fragment, use, useState } from "react";
import Link from "next/link";
import Password from "./Password";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("client");
  const [gender, setGender] = useState(null);
  const [ethnicity, setEthnicity] = useState({
    indian: false,
    philippine: false,
    malaysian: false,
    pakistan: false,
    srilakarn: false,
    hongkong: false,
    others: false,
  });
  const [otherEthnic, setOtherEthnic] = useState("");

  const {
    indian,
    philippine,
    malaysian,
    pakistan,
    srilakarn,
    hongkong,
    others,
  } = ethnicity;
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleUser = (event) => {
    setUserType(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleEthnicity = (event) => {
    setEthnicity({
      ...ethnicity,
      [event.target.name]: event.target.checked,
    });
  };
  const handleOtherEthnic = (event) => {
    setOtherEthnic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User type: " + userType);
    console.log("Email: " + email);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
    console.log("Password: " + password);
    console.log("Confirm Password: " + confirmPassword);
    console.log("Gender: " + gender);
    console.log("Indian: " + indian);
    console.log("Philippine: " + philippine);
    console.log("Malaysian: " + malaysian);
    console.log("Pakistan: " + pakistan);
    console.log("Srilankan: " + srilakarn);
    console.log("Hongkong: " + hongkong);
    console.log("Others: " + others);
    console.log("Others: " + otherEthnic);
  };

  return (
    <Fragment>
      <Paper elevation={4} className="md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-lg">
        <div className="text-4xl mt-16 ml-12">Sign up</div>
        <form className="flex flex-col p-10 pt-4" onSubmit={handleSubmit}>
          <FormControl className="m-2">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              required={true}
              value={userType}
              onChange={handleUser}
            >
              <FormControlLabel
                value="client"
                control={<Radio color="secondary" size="medium" />}
                label="Client"
                className="mr-20"
              />
              <FormControlLabel
                value="volunteer"
                control={<Radio color="secondary" size="medium" />}
                label="Volunteer"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="email"
            label="Email"
            required={true}
            color="secondary"
            className="m-2"
            value={email}
            onChange={handleEmail}
          />
          <TextField
            id="firstName"
            label="First Name"
            required={true}
            color="secondary"
            className="m-2"
            value={firstName}
            onChange={handleFirstName}
          />
          <TextField
            id="lastName"
            label="Last Name"
            required={true}
            color="secondary"
            className="m-2"
            value={lastName}
            onChange={handleLastName}
          />
          <Password
            placeHolder="Password"
            value={password}
            onChange={handlePassword}
          />
          <Password
            placeHolder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <Divider className="mt-12 mb-12" />

          <FormControl className="m-2">
            <FormLabel
              id="demo-radio-buttons-group-label"
              color="text"
              className="text-xl"
            >
              Ethnicity
            </FormLabel>
            <div className="flex justify-between text-text">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={indian}
                      name="indian"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Indian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={pakistan}
                      name="pakistan"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Pakistan"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={philippine}
                      name="philippine"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Philippine"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={srilakarn}
                      name="srilakarn"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Sri Lakarn"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={malaysian}
                      name="malaysian"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Malaysian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={hongkong}
                      name="hongkong"
                      onChange={handleEthnicity}
                    />
                  }
                  label="Hong Kong"
                />
              </FormGroup>
            </div>
            <div className="flex text-text">
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    checked={others}
                    name="others"
                    onChange={handleEthnicity}
                  />
                }
                label="Others (please specify): "
              />
              <TextField
                id="standard-basic"
                variant="standard"
                color="secondary"
                value={otherEthnic}
                onChange={handleOtherEthnic}
              />
            </div>
          </FormControl>
          <FormControl className="m-2 text-text mt-8">
            <FormLabel
              id="demo-radio-buttons-group-label"
              color="text"
              className="text-xl"
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              required={true}
              className="flex justify-between"
              value={gender}
              onChange={handleGender}
            >
              <FormControlLabel
                value="male"
                control={<Radio color="secondary" size="medium" />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio color="secondary" size="medium" />}
                label="Female"
              />
              <FormControlLabel
                value="others"
                control={<Radio color="secondary" size="medium" />}
                label="Others"
              />
            </RadioGroup>
          </FormControl>
          <Divider className="mt-12 mb-4" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            className="rounded-full m-4 font-bold mt-10 p-4"
            onSubmit={handleSubmit}
          >
            Register
          </Button>
        </form>
      </Paper>
      <div className="flex justify-center mt-8">
        <div>Already have an account?</div>
        <Link href="/" className="text-secondary font-bold ml-4">
          Sign in now
        </Link>
      </div>
    </Fragment>
  );
}

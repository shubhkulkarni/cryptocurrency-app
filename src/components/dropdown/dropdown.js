import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Dropdown = ({ value, items, label, changeHandler = () => false }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          {label}
        </InputLabel>
        <Select
          native
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          labelWidth={labelWidth}
          value={value}
          onChange={changeHandler}
        >
          {items.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};
export default Dropdown;

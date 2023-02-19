// import React from "react";
// // nodejs library to set properties for components
// import PropTypes from "prop-types";
// // nodejs library that concatenates classes
// import classNames from "classnames";

// // @material-ui/core components
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import Button from "@material-ui/core/Button";

// // core components

// import buttonStyle from "/styles/jss/nextjs-material-kit/components/buttonStyle.js";

// const makeComponentStyles = makeStyles(() => ({
//   ...buttonStyle,
// }));

// const RegularButton: React.FC<Props> = React.forwardRef((props, ref) => {
//   const {
//     color,
//     round,
//     children,
//     fullWidth,
//     disabled,
//     simple,
//     size,
//     block,
//     link,
//     justIcon,
//     className,
//     ...rest
//   } = props;

//   const classes = makeComponentStyles();

//   const btnClasses = classNames({
//     [classes.button]: true,
//     [classes[size]]: size,
//     [classes[color]]: color,
//     [classes.round]: round,
//     [classes.fullWidth]: fullWidth,
//     [classes.disabled]: disabled,
//     [classes.simple]: simple,
//     [classes.block]: block,
//     [classes.link]: link,
//     [classes.justIcon]: justIcon,
//     [className]: className,
//   });
//   return (
//     <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
//       {children}
//     </Button>
//   );
// });

// RegularButton.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "rose",
//     "white",
//     "facebook",
//     "twitter",
//     "google",
//     "github",
//     "transparent",
//   ]),
//   size: PropTypes.oneOf(["sm", "lg"]),
//   simple: PropTypes.bool,
//   round: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   disabled: PropTypes.bool,
//   block: PropTypes.bool,
//   link: PropTypes.bool,
//   justIcon: PropTypes.bool,
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// export default RegularButton;

import React, { forwardRef, Ref } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

import buttonStyle from "../../styles/jss/nextjs-material-kit/components/buttonStyle


const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

interface RegularButtonProps extends Omit<ButtonProps, "classes"> {
  color?:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose"
    | "white"
    | "facebook"
    | "twitter"
    | "google"
    | "github"
    | "transparent";
  size?: "sm" | "lg";
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
}

const RegularButton = forwardRef(
  (props: RegularButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      color = "primary",
      round = false,
      children,
      fullWidth = false,
      disabled = false,
      simple = false,
      size = "sm",
      block = false,
      link = false,
      justIcon = false,
      className,
      ...rest
    } = props;

    const classes = makeComponentStyles();

    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [className || ""]: !!className,
    });

    return (
      <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
        {children}
      </Button>
    );
  }
);

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;

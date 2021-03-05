import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Button
 * @param {string} color
 * @param {string} label
 * @param {string} variant
 * @param {string} icon
 * @param {bool} disabled
 * @param {bool} loading
 * @param {className} className
 * @param {bool} fullWidth
 */
const Button = ({
  color,
  label,
  variant,
  icon,
  size,
  disabled,
  loading,
  className,
  fullWidth,
  ...restProps
}) => {
  const isDisabled = disabled || loading;
  const colorWhite = color == "white" ? color : color + "-500";
  const btnSizes = {
    large: "text-sm py-5",
    medium: "text-sm py-3",
    small: "text-xs py-3"
  };

  const btnVariants = {
    text: "font-bold text-sm outline-none focus:outline-none",
    link: "font-bold text-sm outline-none focus:outline-none",
    contained: `text-white bg-${color}-500 hover:bg-${color}-600 font-bold text-sm px-6 py-3 hover:shadow-md outline-none focus:outline-none`,
    outlined: `bg-transparent text-${colorWhite} font-bold text-sm px-6 py-3 border-${colorWhite} hover:border-${colorWhite} border-2 hover:shadow-md outline-none focus:outline-none`
  };

  return (
    <button
      type={"button"}
      className={classNames(
        btnVariants[variant],
        btnSizes[size],
        {
          "opacity-50 cursor-not-allowed": isDisabled
        },
        `${
          fullWidth ? "w-full" : "w-auto"
        } rounded-md transition ease-in-out duration-150 ${className}`
      )}
      {...restProps}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text", "link"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool
};

Button.defaultProps = {
  variant: "contained",
  color: "mint",
  loading: false,
  disabled: false,
  size: "medium",
  fullWidth: false
};

export default Button;

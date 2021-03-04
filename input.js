import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Input
 * @param {string} type
 * @param {string} placeholder
 * @param {string} variant
 * @param {bool} disabled
 * @param {string} validation
 * @param {className} className
 */
const Input = ({
  type,
  placeholder,
  variant,
  disabled,
  validation,
  className,
  ...restProps
}) => {
  const isDisabled = disabled;
  const inputVariants = {
    text: "font-normal text-sm outline-none focus:outline-none",
    contained: `w-full text-gray-800 bg-gray-200 font-normal text-sm px-6 py-3 outline-none focus:outline-none`,
    outlined: `w-full bg-transparent text-gray-700 font-normal text-sm px-6 py-3 border-border hover:border-border-hover border-2 outline-none focus:outline-none`
  };

  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className={classNames(
          inputVariants[variant],
          {
            "opacity-50 cursor-not-allowed": isDisabled
          },
          `rounded-md transition ease-in-out duration-150 ${className}`
        )}
        {...restProps}
      />
      {validation && validation.message}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "date", "number", "tel"]),
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  validation: PropTypes.object,
  className: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  variant: "contained",
  disabled: false,
  validation: {}
};

export default Input;

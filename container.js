import PropTypes from "prop-types";

/**
 * Container
 * @param {any} children
 * @param {string} className
 * @param {bool} noPadding
 */
const Container = ({ children, className, noPadding, ...restProps }) => (
  <div
    className={`container mx-auto ${!noPadding && "px-4"} ${className}`}
    {...restProps}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  noPadding: PropTypes.bool,
  className: PropTypes.string
};

Container.defaultProps = {
  noPadding: false
};

export default Container;

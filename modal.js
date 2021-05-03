import PropTypes from "prop-types";

/**
 * Modal
 * @param {boolean} open
 * @param {string} title
 * @param {JSX.Element} children
 * @param {boolean} open
 * @param {func} handleClose
 */
const Modal = ({ open, title, children, handleClose }) => {
  return (
    <div className={`${open ? "flex" : "hidden"}`}>
      <div className="fixed z-30 px-4 min-h-screen top-0 bottom-0 left-0 right-0 md:flex md:items-center md:justify-center">
        <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />

        <div className="bg-white rounded-lg md:max-w-md md:mx-auto lg:max-w-lg p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div className="flex justify-between">
            <Title className="mb-5" variant="h3">
              {title}
            </Title>

            <Close
              onClick={handleClose}
              className="float-right cursor-pointer"
            />
          </div>

          <div>{children}</div>

          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <Button
              label="Annuler"
              color="gray"
              onClick={handleClose}
              className="block w-full md:inline-block md:w-auto md:order-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.protoTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func
};

export default Modal;

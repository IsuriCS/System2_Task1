import React from "react";
import PropTypes from "prop-types";

/**
 * This returns an input field of a given type.
 *
 * @param {Object} props - The props object for the InputField component.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {function} props.onBlur - The event handler function for the input field's onBlur event.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The event handler function for the input field's onChange event.
 * @returns {JSX.Element} A styled input field.
 */
function InputField({ type, placeholder, onBlur, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
      className="border p-1 rounded-md border-Gray drop-shadow w-full"
      value={value}
      onChange={onChange}
    />
  );
}

// Define PropTypes for InputField
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

/**
 * This returns a Text area.
 *
 * @param {Object} props - The props object for the TextArea component.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {function} props.onChange - The event handler function for the textarea's onChange event.
 * @returns {JSX.Element} A styled textarea element.
 */
function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      rows="10"
      cols="30"
      className="border p-2 rounded-md border-Gray drop-shadow"
      value={value}
      onChange={onChange}
    />
  );
}

// Define PropTypes for TextArea
TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { InputField, TextArea };

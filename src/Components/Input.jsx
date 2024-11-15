/**
 * InputFiled Component
 *
 * @param {Object} props - The props object for the InputFiled component.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @param {string} props.placeHolder - The placeholder text for the input field.
 * @param {function} [props.onBlur] - The event handler function for the input field's onBlur event.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.Onchange - The event handler function for the input field's onChange event.
 * @returns {JSX.Element} A styled input field.
 */
function InputFiled({ type, placeHolder, onBlur, value, Onchange }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      onBlur={onBlur}
      className="border p-1 rounded-md border-Gray drop-shadow w-full"
      value={value}
      onChange={Onchange}
    />
  );
}

/**
 * TextArea Component
 *
 * @param {Object} props - The props object for the TextArea component.
 * @param {string} props.placeHolder - The placeholder text for the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {function} props.Onchange - The event handler function for the textarea's onChange event.
 * @returns {JSX.Element} A styled textarea element.
 */
function TextArea({ placeHolder, value, Onchange }) {
  return (
    <textarea
      placeholder={placeHolder}
      rows="10"
      cols="30"
      className="border p-2 rounded-md border-Gray drop-shadow"
      value={value}
      onChange={Onchange}
    />
  );
}


export {
    InputFiled,
    TextArea
};
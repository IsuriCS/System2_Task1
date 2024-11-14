function InputFiled ({ type, placeHolder, onBlur, value, Onchange }) {
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
};

function TextArea({placeHolder,value,Onchange}) {
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

export  {InputFiled,TextArea};
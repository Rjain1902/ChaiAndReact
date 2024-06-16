function ColourButton({ color_data, clickHandler }) {
  return (
    <button
      onClick={() => clickHandler(color_data)}
      style={{ backgroundColor: color_data }}
      className="rounded-full px-4 py-1 outline-none  "
    >
      {color_data}
    </button>
  );
}
export default ColourButton;

function FilterCheckbox({ checked, handleCheckBoxChange, isFirstEntrance }) {
  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={handleCheckBoxChange}
        disabled={isFirstEntrance}
      />
      <span className="switch__slider"></span>
    </label>
  );
}

export default FilterCheckbox;

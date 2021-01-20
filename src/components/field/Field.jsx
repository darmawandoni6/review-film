import React, { useState } from "react";
import Select from "react-select";

export const required = (value) => (value ? undefined : "Required");

export const emailValid = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or less` : undefined;

export const maxLength300 = maxLength(300);

export const minLength6 = minLength(6);

export const minValue0 = (value) => {
  if (value < 0) {
    return 0;
  }
  return value;
};

export const minValue1 = (value) => {
  if (value < 1) {
    return 1;
  }
  return value;
};

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function formatNumberComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const normalizeNumber = (value) => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, "");
  return formatNumber(onlyNums);
};

export const lessThan = (otherField) => (value, previousValue, allValues) =>
  value && parseFloat(value) < parseFloat(allValues.values[otherField])
    ? undefined
    : `value must not be greater than ${otherField}`;

export const greaterThan = (otherField) => (value, previousValue, allValues) =>
  value && parseFloat(value) > parseFloat(allValues.values[otherField])
    ? undefined
    : `value cannot be lower than ${otherField}`;

export const RenderFieldText = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-semibold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <input
        {...input}
        id={id}
        type="text"
        placeholder={placeholder}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};
export const RenderFieldDate = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-semibold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <input
        {...input}
        id={id}
        type="date"
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const RenderFieldNumber = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    disabled,
    min,
    max,
    increment,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-semibold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <input
        {...input}
        id={id}
        type="number"
        min={min}
        max={max}
        step={increment}
        placeholder={placeholder}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const RenderFieldPassword = (props) => {
  const [isShow, setShow] = useState(false);

  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    meta: { touched, error, warning },
  } = props;
  return (
    <div className="password">
      <div className="form-group">
        {!noLabel && (
          <label htmlFor={id} className="font-weight-semibold">
            {label}
            {requiredStar && <span className="text-required"> *</span>}
          </label>
        )}
        <div
          className={`form-control mb-1 ${
            touched && error ? "focus-error" : ""
          }`}
        >
          <input
            {...input}
            id={id}
            placeholder={placeholder}
            type={isShow ? "text" : "password"}
          />
          <div className="icon-btn" onClick={() => setShow(!isShow)}>
            <i className={`fas ${isShow ? "fa-eye-slash" : "fa-eye"}`} />
          </div>
        </div>
        {touched &&
          ((error && <span className="form-error">{error}</span>) ||
            (warning && <span className="form-error">{warning}</span>))}
      </div>
    </div>
  );
};

export const renderFieldRadio = ({
  input,
  label,
  id,
  options,
  noLabel,
  required,
  requiredStar,
  disabled,
  meta: { touched, error, warning },
}) => (
  <div className="form-group">
    {!noLabel && (
      <label htmlFor={id} className="font-weight-semibold">
        {label}
        {requiredStar && <span className="form-error"> *</span>}
      </label>
    )}
    <div
      className="d-flex align-items-center px-3 py-2"
      style={{
        border: "1px solid #D7D7D7",
        borderRadius: "4px",
        backgroundColor: "white",
      }}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className="mr-2"
          style={{ marginBottom: "0px", cursor: "pointer" }}
        >
          <input
            {...input}
            type="radio"
            value={opt.value}
            checked={opt.value.toString() === input.value}
            required={required}
            disabled={disabled}
          />
          <div className="custom-radio" />
          <span className="custom-radio-label">{opt.name}</span>
        </label>
      ))}
    </div>
    {touched &&
      ((error && <span className="form-error d-block">{error}</span>) ||
        (warning && <span className="form-error d-block">{warning}</span>))}
  </div>
);

export const textAreaField = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    placeholder,
    rows,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-semibold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <textarea
        {...input}
        placeholder={placeholder}
        rows={rows}
        className={`form-control ${touched && error ? "focus-error" : ""}`}
        disabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

export const selectField = (props) => {
  const {
    input,
    id,
    label,
    noLabel,
    requiredStar,
    options,
    placeholder,
    multiple,
    clearable,
    searchable,
    disabled,
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-group">
      {!noLabel && (
        <label htmlFor={id} className="font-weight-semibold">
          {label}
          {requiredStar && <span className="form-error"> *</span>}
        </label>
      )}
      <Select
        id={id}
        className={`select-field ${touched && error ? "focus-error" : ""}`}
        classNamePrefix="select"
        options={options}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        isMulti={multiple}
        isClearable={clearable}
        isSearchable={searchable}
        isDisabled={disabled}
      />
      {touched &&
        ((error && <span className="form-error">{error}</span>) ||
          (warning && <span className="form-error">{warning}</span>))}
    </div>
  );
};

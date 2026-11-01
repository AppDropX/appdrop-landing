import { useId } from "react";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

// Bot trap: positioned off-screen (not display:none, which some bots skip).
// Real users never see or fill it; the backend silently drops submissions
// where it is non-empty.
const HoneypotField = ({ value, onChange }: HoneypotFieldProps) => {
  const id = useId();
  return (
  <div
    aria-hidden="true"
    style={{
      position: "absolute",
      left: "-10000px",
      top: "auto",
      width: "1px",
      height: "1px",
      overflow: "hidden",
    }}
  >
    <label htmlFor={id}>Website</label>
    <input
      id={id}
      name="website"
      type="text"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
  );
};

export default HoneypotField;

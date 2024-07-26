import "./Badge.css";

export default function Badge({ isActive, children }) {
  return (
    <span className={`badge ${isActive ? "badge--active" : ""}`}>
      {children}
    </span>
  );
}

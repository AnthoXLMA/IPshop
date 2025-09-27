import React from "react";

const CTAButton = ({ text }) => {
  return (
    <button className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition">
      {text}
    </button>
  );
};

export default CTAButton;   // ✅ important : export default

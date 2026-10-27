import { useState } from "react";

// Image with a quiet fallback: if the file fails to load, the image is
// hidden and the branded background of its container shows instead.
function Photo({ className = "", ...props }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      className={className}
      decoding="async"
      loading="lazy"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}

export default Photo;

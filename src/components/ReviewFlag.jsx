// Development-only marker for content KRG still needs to confirm.
// Never rendered in production builds.
function ReviewFlag({ confirmed }) {
  if (confirmed || !import.meta.env.DEV) return null;

  return (
    <span className="review-flag" title="Confirm with KRG before launch">
      To confirm
    </span>
  );
}

export default ReviewFlag;

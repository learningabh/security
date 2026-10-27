// Company-wide settings. Anything left as null is hidden on the site,
// so only add details that have been confirmed by KRG.
export const company = {
  name: "Kinetic Resource Group",
  shortName: "KRG",
  tagline: "Security You Can Trust. Protection You Can Rely On.",
  // Brand values taken from the official KRG logo lockup.
  values: ["Alert", "Vigil", "Dependable"],
  description:
    "Kinetic Resource Group provides professional security services built around disciplined people, site-specific planning and clear communication.",
  // Where the contact form addresses enquiries. TESTING address for now;
  // replace with the client's email before launch.
  enquiryEmail: "ashimkhan355@gmail.com",
  contact: {
    phone: "+91 91510 07126",
    email: "alert@alertintell.com",
    address:
      "4/ Anand Lok Colony, Chinhat, Faizabad Road, Lucknow, Uttar Pradesh 226028, India",
  },
  legal: {
    privacyUrl: null, // e.g. "/privacy-policy"
    termsUrl: null, // e.g. "/terms-of-service"
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "why-krg", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

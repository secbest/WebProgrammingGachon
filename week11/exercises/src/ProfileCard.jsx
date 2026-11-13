// Exercise 1: props + default prop value
// Inline SVG placeholder (the via.placeholder.com service is no longer reliable)
const DEFAULT_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#9aa7b4"/><circle cx="40" cy="32" r="14" fill="#fff"/><rect x="16" y="52" width="48" height="28" rx="14" fill="#fff"/></svg>'
  );

function ProfileCard({ name, role, email, avatarUrl = DEFAULT_AVATAR }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, maxWidth: 300 }}>
      <img src={avatarUrl} alt={name} style={{ borderRadius: '50%', width: 80 }} />
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default ProfileCard;

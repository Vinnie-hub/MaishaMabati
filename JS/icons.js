/* =========================================================
   SVG ICON LIBRARY — usage: icon('cart'), icon('phone', 20)
   ========================================================= */
const ICONS = {
  phone:
    '<path d="M6.5 3.5h3l1.2 4.2-1.8 1.8c1 2.1 2.7 3.8 4.8 4.8l1.8-1.8 4.2 1.2v3c0 1.1-.9 2-2 2C10.1 20.7 3.3 13.9 3.3 5.5c0-1.1.9-2 2-2h1.2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  pin: '<path d="M20 10.5c0 5.2-8 10-8 10s-8-4.8-8-10a8 8 0 1 1 16 0Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  clock:
    '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  truck:
    '<path d="M3 6.5h11v10H3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 10h3.5l3.5 3.5v3H14z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="7" cy="18" r="1.7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="18" r="1.7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14 13.5h7" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  shield:
    '<path d="M12 3 20 6v5.5c0 4.8-3.1 8.2-8 9.5-4.9-1.3-8-4.7-8-9.5V6l8-3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  tag: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14.8 8.5c-.6-.6-1.5-1-2.7-1-1.6 0-2.6.8-2.6 2 0 1.3 1.2 1.8 2.7 2.1 1.5.3 2.5.8 2.5 2.1 0 1.2-1.1 2-2.7 2-1.2 0-2.2-.4-2.9-1.1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 6.5v11" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  search:
    '<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m16 16 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  heart:
    '<path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7C3.2 5.9 5.2 4 7.8 4c1.5 0 2.9.7 4.2 2 1.3-1.3 2.7-2 4.2-2 2.6 0 4.6 1.9 4.6 4.7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  heartFill:
    '<path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7C3.2 5.9 5.2 4 7.8 4c1.5 0 2.9.7 4.2 2 1.3-1.3 2.7-2 4.2-2 2.6 0 4.6 1.9 4.6 4.7Z" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
  cart: '<path d="M3.5 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="19" r="1.3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="19" r="1.3" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  compare:
    '<path d="M7 4v16M7 4l-3 3m3-3 3 3M17 20V4m0 16-3-3m3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  close:
    '<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 10.5v5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="7.5" r="1" fill="currentColor"/>',
  arrowR:
    '<path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  chevD:
    '<path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  whatsapp:
    '<path d="M17.6 6.4A8.8 8.8 0 0 0 3.9 17L3 21l4.1-1A8.8 8.8 0 1 0 17.6 6.4Zm-5.6 14a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.4.6.6-2.3-.2-.3a7.4 7.4 0 1 1 6.1 3.2Zm4.1-5.5c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5L10.5 10c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.5 3.9.6.3 1.1.4 1.5.5.6.1 1.2.1 1.6 0 .5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.5-.3Z" fill="currentColor"/>',
  check:
    '<path d="m5 12 5 5L20 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9L6.6 19l1-6-4.4-4.3 6.1-.9L12 3Z" fill="currentColor"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  filter:
    '<path d="M3 5h18M6 12h12M10 19h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  trash:
    '<path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m3 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  plus: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  minus:
    '<path d="M5 12h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  facebook:
    '<path d="M14 8h2.5V4.5H14c-2.8 0-4.5 1.7-4.5 4.6V11H7v3.5h2.5V21H13v-6.5h3L16.5 11H13V9.5c0-.9.3-1.5 1-1.5Z" fill="currentColor"/>',
  instagram:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor"/>',
  twitter:
    '<path d="M5 4h3.6l3.3 4.7L15.8 4H19l-5.6 6.3L19.5 20h-3.6l-4-5.4L7 20H3.8l6-6.9L5 4Zm3.1 1.8H7l9.8 12.4h1.1L8.1 5.8Z" fill="currentColor"/>',
  tiktok:
    '<path d="M14.5 4h3c.2 1.5 1.1 2.8 2.5 3.5v3c-1.3-.1-2.5-.5-3.5-1.2v5.2c0 3.6-2.4 5.5-5.5 5.5-3 0-5-2-5-4.7 0-2.9 2.3-5 5.5-5.1v3c-1.5.1-2.5.8-2.5 2 0 1 .8 1.7 1.9 1.7 1.2 0 2-.8 2-2.3V4Z" fill="currentColor"/>',
  store:
    '<path d="M4 10v10h16V10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 10 5 4h14l2 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 20v-5h6v5" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/>',
};

function icon(name, size = 20) {
  const body = ICONS[name] || "";
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" style="flex-shrink:0">${body}</svg>`;
}

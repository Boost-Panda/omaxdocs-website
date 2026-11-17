// Site-wide notice shown as a dialog on first page load.
// Set `enabled` to false (and redeploy) to take it down.
export const siteNotice = {
  enabled: false,
  // Change the id whenever the notice text changes, so visitors who
  // dismissed an earlier notice see the new one.
  id: 'phone-outage-2026-11-17',
  title: 'Our phone lines are temporarily down',
  body: 'Phone service is down at all three offices (Frederick, Hagerstown, and Martinsburg). We are working with our provider to restore it as quickly as possible.',
  action: {
    label: 'Contact us online',
    href: '/contact/contact-info',
  },
  secondary: 'Please use our online contact form in the meantime. Thank you for your patience.',
};

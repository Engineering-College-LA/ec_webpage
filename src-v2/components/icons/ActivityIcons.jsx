// Inline icons transcribed from the Paper "EC Redesign" nav dropdown artboard (3HH-0 / 3IF-0).
// Each matches one studentLifeActivities.js entry.

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  style: { flexShrink: 0 },
};

export function ProjectBasedLearningIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MentorshipIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 1.5-4 4-4s3 1 3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OlympiadsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 4h8v5a4 4 0 01-8 0V4zM12 13v4M8 21h8M16 6h3v2a3 3 0 01-3 3M8 6H5v2a3 3 0 003 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LabsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 5h6a2 2 0 012 2v13a2 2 0 00-2-2H4V5zM20 5h-6a2 2 0 00-2 2v13a2 2 0 012-2h6V5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EnactusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DevClubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M8 7l-5 5 5 5M16 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HackathonsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InternshipsIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

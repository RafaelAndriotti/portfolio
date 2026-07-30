const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 20,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ArrowIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" {...base} aria-hidden="true">
      <path d="M40 128h176M152 64l64 64-64 64" />
    </svg>
  )
}

export function ArrowUpRightIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" {...base} aria-hidden="true">
      <path d="M64 192 192 64M88 64h104v104" />
    </svg>
  )
}

export function DownloadIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" {...base} aria-hidden="true">
      <path d="M128 40v112M80 108l48 44 48-44M40 208h176" />
    </svg>
  )
}

export function CloseIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" {...base} aria-hidden="true">
      <path d="M200 56 56 200M200 200 56 56" />
    </svg>
  )
}

export function MenuIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" {...base} strokeWidth={18} aria-hidden="true">
      <path d="M40 88h176M40 168h176" />
    </svg>
  )
}

export function SunIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth={16} strokeLinecap="round" aria-hidden="true">
      <circle cx="128" cy="128" r="52" />
      <path d="M128 28v20M128 208v20M28 128h20M208 128h20M57 57l14 14M185 185l14 14M199 57l-14 14M71 185l-14 14" />
    </svg>
  )
}

export function MoonIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M233 150a96 96 0 0 1-127-127 96 96 0 1 0 127 127Z" />
    </svg>
  )
}

export function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M128 24a104 104 0 0 0-32.9 202.6c5.2 1 7.1-2.3 7.1-4.5v-15.9c-28.9 6.3-35-13.8-35-13.8-4.7-12-11.5-15.2-11.5-15.2-9.4-6.4.7-6.3.7-6.3 10.4.7 15.9 10.7 15.9 10.7 9.3 15.9 24.4 11.3 30.3 8.6.9-6.7 3.6-11.3 6.6-13.9-23.1-2.6-47.4-11.6-47.4-51.4 0-11.4 4.1-20.7 10.7-28-1.1-2.6-4.6-13.2 1-27.5 0 0 8.7-2.8 28.5 10.6a99 99 0 0 1 51.9 0C174.3 66 183 68.8 183 68.8c5.6 14.3 2.1 24.9 1 27.5 6.7 7.3 10.7 16.6 10.7 28 0 39.9-24.3 48.7-47.5 51.3 3.7 3.2 7 9.5 7 19.2v28.5c0 2.2 1.9 5.6 7.2 4.5A104 104 0 0 0 128 24Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
      <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM88 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm104 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.8-1.8A36 36 0 0 1 184 140Z" />
    </svg>
  )
}

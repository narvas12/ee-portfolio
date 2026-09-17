import { Calendar, Globe, Mail, Phone } from "lucide-react";

import type { IconName } from "@/lib/types";

/**
 * Brand marks lucide does not ship. Drawn as paths so they inherit
 * `currentColor` and size like every other icon.
 */
function GithubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53v-1.9c-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.69 1.14 1.69 1.14.98 1.69 2.58 1.2 3.21.92.1-.72.39-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.04 1.13a10.5 10.5 0 0 1 5.54 0c2.11-1.43 3.03-1.13 3.03-1.13.6 1.52.22 2.64.11 2.92.71.77 1.13 1.76 1.13 2.96 0 4.23-2.58 5.16-5.03 5.43.4.34.75 1.02.75 2.06v3.05c0 .29.2.64.76.53a10.55 10.55 0 0 0 7.51-10.43C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function XMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    </svg>
  );
}

function DribbbleMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm7.93 5.53a10.16 10.16 0 0 1 2.3 6.36c-.34-.07-3.72-.76-7.13-.33-.08-.17-.15-.35-.23-.53-.21-.5-.44-1-.68-1.48 3.77-1.54 5.49-3.75 5.74-4.02ZM12 1.78c2.5 0 4.79.94 6.52 2.48-.21.3-1.75 2.37-5.39 3.74A52.1 52.1 0 0 0 9.4 2.13 10.3 10.3 0 0 1 12 1.78ZM7.43 2.82a61.4 61.4 0 0 1 3.7 5.8A38.6 38.6 0 0 1 1.9 9.86a10.28 10.28 0 0 1 5.53-7.04ZM1.67 12.01v-.31a38.1 38.1 0 0 0 10.2-1.38c.26.5.5 1.02.73 1.53l-.4.12c-4.23 1.36-6.48 5.1-6.67 5.42a10.2 10.2 0 0 1-3.86-5.38ZM12 22.25c-2.35 0-4.5-.8-6.22-2.14.15-.3 1.8-3.46 6.43-5.07l.05-.02a42.6 42.6 0 0 1 2.2 7.8c-.78.28-1.6.43-2.46.43Zm4.18-1.19a44.4 44.4 0 0 0-2.01-7.4c3.2-.51 6.02.33 6.37.44a10.28 10.28 0 0 1-4.36 6.96Z" />
    </svg>
  );
}

export function WhatsappMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const ICONS: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: GithubMark,
  linkedin: LinkedinMark,
  x: XMark,
  whatsapp: WhatsappMark,
  dribbble: DribbbleMark,
  mail: Mail as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  phone: Phone as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  calendar: Calendar as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  globe: Globe as React.ComponentType<React.SVGProps<SVGSVGElement>>,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

/**
 * Resolves an `icon` string from the JSON data to a component. Unknown names
 * fall back to a globe rather than crashing the build.
 */
export default function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name] ?? Globe;
  return <Component {...props} />;
}

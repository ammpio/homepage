import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

function FlagUS({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <polygon id="us-star" points="0,-1.1 0.33,-0.34 1.1,-0.34 0.5,0.12 0.68,0.9 0,0.46 -0.68,0.9 -0.5,0.12 -1.1,-0.34 -0.33,-0.34" fill="white" />
      </defs>
      {/* 13 stripes */}
      {Array.from({ length: 13 }, (_, i) => (
        <rect key={i} y={i * (40 / 13)} width="60" height={40 / 13} fill={i % 2 === 0 ? "#B22234" : "white"} />
      ))}
      {/* Canton */}
      <rect width="24" height={7 * (40 / 13)} fill="#3C3B6E" />
      {/* 50 stars - 9 rows alternating 6 and 5 stars */}
      {Array.from({ length: 9 }, (_, row) => {
        const starsInRow = row % 2 === 0 ? 6 : 5;
        const startX = row % 2 === 0 ? 1.5 : 3.0;
        const y = 1.2 + row * 2.35;
        return Array.from({ length: starsInRow }, (_, col) => (
          <use key={`${row}-${col}`} href="#us-star" x={startX + col * 3.7} y={y} />
        ));
      })}
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="10" fill="#AA151B"/>
      <rect y="10" width="60" height="20" fill="#F1BF00"/>
      <rect y="30" width="60" height="10" fill="#AA151B"/>
    </svg>
  );
}

function FlagBR({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill="#009739"/>
      <path d="M30 4L56 20L30 36L4 20Z" fill="#FEDD00"/>
      <circle cx="30" cy="20" r="8" fill="#012169"/>
      <path d="M22 20C22 20 26 23 30 23C34 23 38 20 38 20" stroke="white" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

const languages: { code: Language; Flag: React.FC<{ className?: string }>; label: string }[] = [
  { code: "en", Flag: FlagUS, label: "English" },
  { code: "es", Flag: FlagES, label: "Español" },
  { code: "pt", Flag: FlagBR, label: "Português" },
];

export function LanguageSelector({ variant = "ghost" }: { variant?: "ghost" | "outline" }) {
  const { language, setLanguage } = useLanguage();
  const current = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" data-no-translate className={`button ${variant === "outline" ? "button-ghost" : "glass-soft"} h-10 gap-1.5 px-3`} aria-label="Select language">
          <Globe className="h-4 w-4" />
          {current && <current.Flag className="h-3.5 w-5 rounded-sm overflow-hidden" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-no-translate>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            <lang.Flag className="mr-2 h-3.5 w-5 rounded-sm overflow-hidden" />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

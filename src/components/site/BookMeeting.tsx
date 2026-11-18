import { useEffect } from "react";
import { Calendar } from "lucide-react";

/** Embeds the HubSpot meetings calendar used on ammp.io. */
export function BookMeeting({ className }: { className?: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`meetings-iframe-container w-full ${className ?? ""}`}
      data-src="https://meetings.hubspot.com/andreas-lehner/contact-form?embed=true"
    />
  );
}

/* The white "Book a meeting" card used on /contact: header, short intro, then the embed.
   Shared by /contact and the /ssd26 event page so both frames look identical. */
export function BookMeetingCard({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border/50 bg-white ${className ?? ""}`}>
      <div className="px-6 pt-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold"><Calendar className="size-5 text-primary" />Book a meeting</h2>
        <p className="mt-3 text-sm text-muted-foreground">Schedule a time to discuss your renewable operations and AI coworker needs with our team.</p>
      </div>
      <BookMeeting className="mt-6" />
    </div>
  );
}

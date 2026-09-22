import { useEffect } from "react";

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

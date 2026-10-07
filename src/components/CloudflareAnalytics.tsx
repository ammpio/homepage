import { useEffect } from "react";

const PRODUCTION_HOSTS = new Set(["ammp.io", "www.ammp.io"]);
let injected = false;

export function CloudflareAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined" || injected) return;
    if (!PRODUCTION_HOSTS.has(window.location.hostname)) return;
    injected = true;
    const script = document.createElement("script");
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.type = "module";
    script.defer = true;
    script.setAttribute("data-cf-beacon", '{"token": "9698a88cc779494a8fa2219b304ac6b2"}');
    document.head.appendChild(script);
  }, []);
  return null;
}

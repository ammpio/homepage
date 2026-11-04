import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { loadDictionaries } from "./i18n/translate";
import { splitLocale } from "./i18n/locale";

// Spanish/Portuguese pages fetch their dictionary before hydrating so the client renders the same text as the server.
const ready = splitLocale(window.location.pathname).lang === "en" ? Promise.resolve() : loadDictionaries();

ready.finally(() => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <StartClient />
      </StrictMode>,
    );
  });
});

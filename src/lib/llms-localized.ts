// /es/llms.txt and /pt/llms.txt: short single-language summaries listing the localized key pages.
// Facts mirror the English /llms.txt (src/data/ammp-facts.ts); no prices.
import { PAGES, SITE } from "@/data/ammp-facts";
import { translateLong } from "@/i18n/head";
import { localizePath } from "@/i18n/locale";

const COPY = {
  es: {
    title: "AMMP (español)",
    summary: "AMMP es una plataforma independiente del fabricante para monitorear y gestionar carteras solares, de baterías, híbridas, eólicas y de grupos electrógenos, con Ray, un compañero de trabajo de IA que trabaja sobre sus datos.",
    facts: "AMMP es una empresa de AMMP Technologies B.V. (Ámsterdam, Países Bajos). Funciona en más de 10.000 sitios en más de 30 países, con más de 30 integraciones.",
    modulesTitle: "Módulos",
    modules: "- **AMMP AI**: Ray, un compañero de trabajo de IA basado en los datos de la cartera. Revisa cada sitio a diario, prioriza los problemas por impacto operativo y comercial, diagnostica causas raíz, comprueba SLA y contratos con evidencia y redacta informes en Word, PowerPoint o PDF. Las personas mantienen la decisión. Ray trabaja en Microsoft Teams, Slack y AMMP OS.\n- **AMMP OS Platform**: monitoreo, alertas, tickets, informes, gestión comercial (ahorros, facturación, rendimiento de contratos), integraciones y personalizaciones.\n- **Servidor MCP** y **Data API**: acceso estructurado a los datos de la cartera para asistentes de IA (Claude, ChatGPT, Copilot o su propio agente) y para sus sistemas.",
    pricing: "Precios: suscripción anual por MWp de capacidad instalada. Los precios no se publican; contacte con sales@ammp.io.",
    pagesTitle: "Páginas principales (en español)",
    other: "Versión completa en inglés",
    contact: "Contacto",
  },
  pt: {
    title: "AMMP (português do Brasil)",
    summary: "A AMMP é uma plataforma independente de fabricante para monitorar e gerenciar portfólios solares, de baterias, híbridos, eólicos e de geradores a diesel, com Ray, um colega de trabalho de IA que atua sobre os seus dados.",
    facts: "A AMMP é feita pela AMMP Technologies B.V. (Amsterdã, Países Baixos). Opera em mais de 10.000 usinas em mais de 30 países, com mais de 30 integrações.",
    modulesTitle: "Módulos",
    modules: "- **AMMP AI**: Ray, um colega de trabalho de IA baseado nos dados do portfólio. Verifica cada usina diariamente, prioriza problemas por impacto operacional e comercial, diagnostica causas raiz, verifica SLAs e contratos com evidências e redige relatórios em Word, PowerPoint ou PDF. As pessoas mantêm a decisão. Ray trabalha no Microsoft Teams, no Slack e no AMMP OS.\n- **AMMP OS Platform**: monitoramento, alertas, tickets, relatórios, gestão comercial (economia, faturamento, desempenho de contratos), integrações e personalizações.\n- **Servidor MCP** e **Data API**: acesso estruturado aos dados do portfólio para assistentes de IA (Claude, ChatGPT, Copilot ou o seu próprio agente) e para os seus sistemas.",
    pricing: "Preços: assinatura anual por MWp de capacidade instalada. Os preços não são publicados; entre em contato com sales@ammp.io.",
    pagesTitle: "Páginas principais (em português)",
    other: "Versão completa em inglês",
    contact: "Contato",
  },
} as const;

export function localizedLlmsTxt(lang: "es" | "pt", hasDocumentation: boolean): string {
  const c = COPY[lang];
  const pages = PAGES.filter(([, path]) => hasDocumentation || path !== "/product/documentation")
    .map(([name, path, desc]) => `- [${translateLong(lang, name)}](${SITE}${localizePath(path, lang)}): ${translateLong(lang, desc)}`)
    .join("\n");
  return `# ${c.title}

> ${c.summary}

${c.facts}

## ${c.modulesTitle}
${c.modules}

${c.pricing}

## ${c.pagesTitle}
${pages}

## ${c.other}
- [llms.txt](${SITE}/llms.txt)
- [llms-full.txt](${SITE}/llms-full.txt)

## ${c.contact}
sales@ammp.io
`;
}

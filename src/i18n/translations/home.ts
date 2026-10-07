import type { Language } from "../translations";

type TranslationSet = Record<Language, Record<string, string>>;

export const homeTranslations: TranslationSet = {
  en: {
    "home.soundsFamiliar.title": "Sounds familiar?",
    "home.soundsFamiliar.subtitle":
      "The everyday friction of running a multi-vendor C&I portfolio, and how AMMP can help.",
    "home.soundsFamiliar.beforeLabel": "BEFORE",
    "home.soundsFamiliar.withAmmpLabel": "WITH AMMP",

    "home.soundsFamiliar.c1.title": "Downtime you find out about too late",
    "home.soundsFamiliar.c1.before":
      "PV and BESS systems go unmonitored, so outages only surface once the SLA is already breached.",
    "home.soundsFamiliar.c1.stat": "99.9%",
    "home.soundsFamiliar.c1.statQualifier": "uptime sustained",
    "home.soundsFamiliar.c1.after": "",
    "home.soundsFamiliar.c1.customer": "Daystar Power",

    "home.soundsFamiliar.c2.title": "Weeks lost to manual reporting",
    "home.soundsFamiliar.c2.before":
      "Data is pulled by hand into Excel: a slow monthly grind that ties up staff and invites human error.",
    "home.soundsFamiliar.c2.stat": "Minutes",
    "home.soundsFamiliar.c2.statQualifier": "vs. hours spent each month per site",
    "home.soundsFamiliar.c2.after": "",
    "home.soundsFamiliar.c2.customer": "SolarSaver",

    "home.soundsFamiliar.c3.title": "A different portal for every vendor",
    "home.soundsFamiliar.c3.before":
      "A separate login per brand, with some devices unmonitored.",
    "home.soundsFamiliar.c3.stat": "170+",
    "home.soundsFamiliar.c3.statQualifier": "sites, one portal",
    "home.soundsFamiliar.c3.after": "",
    "home.soundsFamiliar.c3.customer": "Broadreach",
  },
  es: {
    "home.soundsFamiliar.title": "¿Te suena familiar?",
    "home.soundsFamiliar.subtitle":
      "La fricción cotidiana de gestionar una cartera C&I con múltiples fabricantes, y lo que cambia con AMMP.",
    "home.soundsFamiliar.beforeLabel": "ANTES",
    "home.soundsFamiliar.withAmmpLabel": "CON AMMP",

    "home.soundsFamiliar.c1.title": "Caídas que detectas demasiado tarde",
    "home.soundsFamiliar.c1.before":
      "Generadores, depósitos de combustible y controladores quedan sin monitorizar, así que los fallos solo se descubren cuando el SLA ya se ha incumplido.",
    "home.soundsFamiliar.c1.stat": "99,9%",
    "home.soundsFamiliar.c1.statQualifier": "de disponibilidad sostenida",
    "home.soundsFamiliar.c1.after":
      "Las alertas llegan al instante a la persona adecuada, en más de 200 sistemas.",
    "home.soundsFamiliar.c1.customer": "Daystar Power",

    "home.soundsFamiliar.c2.title": "Semanas perdidas en informes manuales",
    "home.soundsFamiliar.c2.before":
      "Los datos se vuelcan a mano en Excel: una rutina mensual lenta que ocupa al equipo e invita al error humano.",
    "home.soundsFamiliar.c2.stat": "Minutos",
    "home.soundsFamiliar.c2.statQualifier": "frente a las horas invertidas cada mes por sitio",
    "home.soundsFamiliar.c2.after":
      "Lo que antes requería más de 2 FTE al mes, ahora lo hace una sola persona.",
    "home.soundsFamiliar.c2.customer": "SolarSaver",

    "home.soundsFamiliar.c3.title": "Un portal distinto para cada fabricante",
    "home.soundsFamiliar.c3.before":
      "Un acceso por marca (SMA, Victron, Fronius, Schneider, DSE), con algunos dispositivos sin monitorizar.",
    "home.soundsFamiliar.c3.stat": "170+",
    "home.soundsFamiliar.c3.statQualifier": "sitios, un único portal",
    "home.soundsFamiliar.c3.after":
      "Una única fuente de verdad, independiente del fabricante, para toda la flota.",
    "home.soundsFamiliar.c3.customer": "Broadreach",
  },
  pt: {
    "home.soundsFamiliar.title": "Soa familiar?",
    "home.soundsFamiliar.subtitle":
      "O atrito diário de gerir uma carteira C&I com vários fabricantes, e o que muda com a AMMP.",
    "home.soundsFamiliar.beforeLabel": "ANTES",
    "home.soundsFamiliar.withAmmpLabel": "COM A AMMP",

    "home.soundsFamiliar.c1.title": "Paragens que descobre tarde demais",
    "home.soundsFamiliar.c1.before":
      "Geradores, depósitos de combustível e controladores ficam sem monitorização, por isso as falhas só aparecem quando o SLA já foi ultrapassado.",
    "home.soundsFamiliar.c1.stat": "99,9%",
    "home.soundsFamiliar.c1.statQualifier": "de disponibilidade sustentada",
    "home.soundsFamiliar.c1.after":
      "Os alertas chegam imediatamente à pessoa certa, em mais de 200 sistemas.",
    "home.soundsFamiliar.c1.customer": "Daystar Power",

    "home.soundsFamiliar.c2.title": "Semanas perdidas em relatórios manuais",
    "home.soundsFamiliar.c2.before":
      "Os dados são puxados à mão para o Excel: uma rotina mensal lenta que ocupa a equipa e convida ao erro humano.",
    "home.soundsFamiliar.c2.stat": "Minutos",
    "home.soundsFamiliar.c2.statQualifier": "em vez de horas gastas mensalmente por site",
    "home.soundsFamiliar.c2.after":
      "O que exigia mais de 2 FTE por mês passa a ser feito por uma só pessoa.",
    "home.soundsFamiliar.c2.customer": "SolarSaver",

    "home.soundsFamiliar.c3.title": "Um portal diferente para cada fabricante",
    "home.soundsFamiliar.c3.before":
      "Um login por marca (SMA, Victron, Fronius, Schneider, DSE), com alguns equipamentos sem monitorização.",
    "home.soundsFamiliar.c3.stat": "170+",
    "home.soundsFamiliar.c3.statQualifier": "sites, um só portal",
    "home.soundsFamiliar.c3.after":
      "Uma única fonte de verdade, independente do fabricante, para toda a frota.",
    "home.soundsFamiliar.c3.customer": "Broadreach",
  },
};

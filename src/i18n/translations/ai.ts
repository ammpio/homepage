import type { Language } from "../translations";

type TranslationSet = Record<Language, Record<string, string>>;

export const aiTranslations: TranslationSet = {
  en: {
    "ai.learnMore": "Learn more about AI at AMMP",
    "ai.meta.title": "AI at AMMP: MCP server and AI agents for energy portfolios",
    "ai.meta.desc":
      "How AMMP puts your portfolio data in front of AI: an open MCP server exposing assets, KPIs, alerts and raw time-series, plus the agents we are building on top of it.",
    "ai.hero.eyebrow": "Beta",
    "ai.hero.title": "AI at AMMP",
    "ai.hero.subtitle":
      "We are putting your portfolio data directly in front of AI. An open MCP server gives any assistant secure access to your assets, KPIs, alerts and raw telemetry, and our own agents are being built on exactly the same foundation.",
    "ai.hero.cta.primary": "Try Ray",
    "ai.hero.cta.secondary": "Talk to us",

    "ai.mcp.eyebrow": "Open protocol",
    "ai.mcp.title": "The AMMP MCP server",
    "ai.mcp.desc":
      "The AMMP MCP server speaks the open Model Context Protocol, so it plugs into Claude, Cursor, Copilot or an agent you build yourself. The model decides which tools to call, runs the queries against your live portfolio and answers in natural language.",
    "ai.mcp.exposes": "What it exposes",
    "ai.mcp.item.assets.title": "Assets and metadata",
    "ai.mcp.item.assets.desc":
      "Your full portfolio structure: sites, devices, capacities, commissioning data and the metadata that gives every reading context.",
    "ai.mcp.item.kpis.title": "Computed KPIs",
    "ai.mcp.item.kpis.desc":
      "Production, performance ratio, availability, specific yield and the rest of the KPI set, at the same definitions your dashboards use.",
    "ai.mcp.item.alerts.title": "Alerts, active and historical",
    "ai.mcp.item.alerts.desc":
      "Current alerts and the full alert history, so an assistant can correlate today's underperformance with an event three weeks ago.",
    "ai.mcp.item.timeseries.title": "Raw time-series",
    "ai.mcp.item.timeseries.desc":
      "Telemetry at native resolution, so answers can be cross-checked against the underlying measurements rather than only the aggregates.",
    "ai.mcp.permissions":
      "Permissions and scope follow your existing AMMP access controls. An assistant can only see what the connected user can already see.",
    "ai.mcp.cta": "Read the announcement",

    "ai.diagram.title": "How this can fit into your stack",
    "ai.diagram.subtitle":
      "A rough map of the integration options we are testing with beta customers. Use our agents, bring your own assistant, or both.",
    "ai.diagram.provided": "Provided by AMMP",
    "ai.diagram.clay.title": "Clay agent",
    "ai.diagram.clay.subtitle": "Slack and Teams coworker",
    "ai.diagram.clay.item1": "Remembers your context",
    "ai.diagram.clay.item2": "Learns from feedback",
    "ai.diagram.clay.item3": "Combines data sources",
    "ai.diagram.clay.item4": "Builds reports and exports",
    "ai.diagram.ray.title": "Ray agent",
    "ai.diagram.ray.subtitle": "On-demand visualisation",
    "ai.diagram.ray.item1": "Built into AMMP OS",
    "ai.diagram.ray.item2": "Interactive charts",
    "ai.diagram.ray.item3": "Live dashboards",
    "ai.diagram.ray.item4": "On-the-fly troubleshooting",
    "ai.diagram.assistant.title": "Your AI assistant",
    "ai.diagram.assistant.subtitle": "Claude, Codex, Copilot",
    "ai.diagram.assistant.item1": "Native chat interface",
    "ai.diagram.assistant.item2": "Direct portfolio access",
    "ai.diagram.assistant.item3": "Full MCP tool support",
    "ai.diagram.tools.title": "Other software tools",
    "ai.diagram.tools.subtitle": "Optional integration",
    "ai.diagram.tools.item1": "CRM, CMMS, ERP systems",
    "ai.diagram.tools.item2": "Connect via the MCP server",
    "ai.diagram.tools.item3": "Or via your AI assistant",
    "ai.diagram.mcp": "MCP server",
    "ai.diagram.portfolio": "Your energy portfolio",
    "ai.diagram.note":
      "These are working hypotheses, not a finished roadmap. We are refining them with the operators in our beta.",

    "ai.ray.title": "Ray",
    "ai.ray.subtitle":
      "Ray is our agent inside AMMP OS. Ask it for an overview and it builds the chart, then explains what it found on the way there.",
    "ai.ray.open": "Open Ray in a new tab",

    "ai.agents.title": "Where our agents are heading",
    "ai.agents.subtitle":
      "We are building a small team of specialised agents on top of the MCP server. Here is what they are being designed to do.",
    "ai.agents.coworker.title": "A coworker in Slack and Teams",
    "ai.agents.coworker.desc":
      "A conversational agent that remembers your portfolio, learns from your feedback and pulls together answers from several data sources without you switching tools.",
    "ai.agents.visualisation.title": "Visualisation on demand",
    "ai.agents.visualisation.desc":
      "Charts, dashboards and exports generated from a single question inside AMMP OS, instead of a request to a reporting queue.",
    "ai.agents.qa.title": "Proactive QA and monitoring",
    "ai.agents.qa.desc":
      "Agents that run their own checks on data, metadata and dashboard integrity without being prompted, and flag what looks wrong before you notice it.",
    "ai.agents.escalation.title": "Escalation for hard problems",
    "ai.agents.escalation.desc":
      "When a diagnosis is genuinely complex, the work is handed to a more capable reasoning model rather than answered with a guess.",
    "ai.agents.cta": "Join the beta",

    "ai.cta.title": "Want early access?",
    "ai.cta.desc":
      "We are onboarding a small group of asset managers and O&M providers. Tell us about your portfolio and we will show you the agents against your own data.",
    "ai.cta.button": "Get in touch",
  },

  es: {
    "ai.learnMore": "Más sobre la IA en AMMP",
    "ai.meta.title": "IA en AMMP: servidor MCP y agentes de IA para portafolios energéticos",
    "ai.meta.desc":
      "Cómo AMMP pone los datos de su portafolio frente a la IA: un servidor MCP abierto con activos, KPIs, alertas y series temporales, y los agentes que construimos sobre él.",
    "ai.hero.eyebrow": "Beta",
    "ai.hero.title": "IA en AMMP",
    "ai.hero.subtitle":
      "Ponemos los datos de su portafolio directamente frente a la IA. Un servidor MCP abierto da a cualquier asistente acceso seguro a sus activos, KPIs, alertas y telemetría, y nuestros propios agentes se construyen sobre esa misma base.",
    "ai.hero.cta.primary": "Probar Ray",
    "ai.hero.cta.secondary": "Hablemos",

    "ai.mcp.eyebrow": "Protocolo abierto",
    "ai.mcp.title": "El servidor MCP de AMMP",
    "ai.mcp.desc":
      "El servidor MCP de AMMP habla el Model Context Protocol abierto, por lo que se conecta con Claude, Cursor, Copilot o un agente propio. El modelo decide qué herramientas usar, consulta su portafolio en vivo y responde en lenguaje natural.",
    "ai.mcp.exposes": "Qué expone",
    "ai.mcp.item.assets.title": "Activos y metadatos",
    "ai.mcp.item.assets.desc":
      "La estructura completa de su portafolio: sitios, equipos, capacidades, datos de puesta en marcha y los metadatos que dan contexto a cada lectura.",
    "ai.mcp.item.kpis.title": "KPIs calculados",
    "ai.mcp.item.kpis.desc":
      "Producción, performance ratio, disponibilidad, rendimiento específico y el resto del conjunto de KPIs, con las mismas definiciones de sus paneles.",
    "ai.mcp.item.alerts.title": "Alertas activas e históricas",
    "ai.mcp.item.alerts.desc":
      "Alertas actuales y todo el historial, para que un asistente pueda correlacionar el bajo rendimiento de hoy con un evento de hace tres semanas.",
    "ai.mcp.item.timeseries.title": "Series temporales sin procesar",
    "ai.mcp.item.timeseries.desc":
      "Telemetría en resolución nativa, para verificar las respuestas contra las mediciones subyacentes y no solo contra los agregados.",
    "ai.mcp.permissions":
      "Los permisos y el alcance siguen sus controles de acceso existentes en AMMP. Un asistente solo ve lo que el usuario conectado ya puede ver.",
    "ai.mcp.cta": "Leer el anuncio",

    "ai.diagram.title": "Cómo encaja en su stack",
    "ai.diagram.subtitle":
      "Un mapa aproximado de las opciones de integración que probamos con clientes beta. Use nuestros agentes, traiga su propio asistente, o ambos.",
    "ai.diagram.provided": "Proporcionado por AMMP",
    "ai.diagram.clay.title": "Agente Clay",
    "ai.diagram.clay.subtitle": "Compañero en Slack y Teams",
    "ai.diagram.clay.item1": "Recuerda su contexto",
    "ai.diagram.clay.item2": "Aprende de sus comentarios",
    "ai.diagram.clay.item3": "Combina fuentes de datos",
    "ai.diagram.clay.item4": "Crea informes y exportaciones",
    "ai.diagram.ray.title": "Agente Ray",
    "ai.diagram.ray.subtitle": "Visualización bajo demanda",
    "ai.diagram.ray.item1": "Integrado en AMMP OS",
    "ai.diagram.ray.item2": "Gráficos interactivos",
    "ai.diagram.ray.item3": "Paneles en vivo",
    "ai.diagram.ray.item4": "Diagnóstico sobre la marcha",
    "ai.diagram.assistant.title": "Su asistente de IA",
    "ai.diagram.assistant.subtitle": "Claude, Codex, Copilot",
    "ai.diagram.assistant.item1": "Interfaz de chat nativa",
    "ai.diagram.assistant.item2": "Acceso directo al portafolio",
    "ai.diagram.assistant.item3": "Soporte completo de herramientas MCP",
    "ai.diagram.tools.title": "Otras herramientas de software",
    "ai.diagram.tools.subtitle": "Integración opcional",
    "ai.diagram.tools.item1": "Sistemas CRM, CMMS, ERP",
    "ai.diagram.tools.item2": "Conecte vía el servidor MCP",
    "ai.diagram.tools.item3": "O vía su asistente de IA",
    "ai.diagram.mcp": "Servidor MCP",
    "ai.diagram.portfolio": "Su portafolio energético",
    "ai.diagram.note":
      "Son hipótesis de trabajo, no una hoja de ruta cerrada. Las refinamos con los operadores de nuestra beta.",

    "ai.ray.title": "Ray",
    "ai.ray.subtitle":
      "Ray es nuestro agente dentro de AMMP OS. Pídale un resumen y construye el gráfico, y además explica lo que encontró en el camino.",
    "ai.ray.open": "Abrir Ray en una pestaña nueva",

    "ai.agents.title": "Hacia dónde van nuestros agentes",
    "ai.agents.subtitle":
      "Estamos construyendo un pequeño equipo de agentes especializados sobre el servidor MCP. Esto es lo que están diseñados para hacer.",
    "ai.agents.coworker.title": "Un compañero en Slack y Teams",
    "ai.agents.coworker.desc":
      "Un agente conversacional que recuerda su portafolio, aprende de sus comentarios y reúne respuestas de varias fuentes sin que cambie de herramienta.",
    "ai.agents.visualisation.title": "Visualización bajo demanda",
    "ai.agents.visualisation.desc":
      "Gráficos, paneles y exportaciones generados a partir de una sola pregunta dentro de AMMP OS, en lugar de una solicitud a una cola de reportes.",
    "ai.agents.qa.title": "QA y monitoreo proactivos",
    "ai.agents.qa.desc":
      "Agentes que ejecutan sus propias verificaciones de datos, metadatos e integridad de paneles sin ser solicitados, y avisan de lo que parece incorrecto antes de que usted lo note.",
    "ai.agents.escalation.title": "Escalado para problemas difíciles",
    "ai.agents.escalation.desc":
      "Cuando un diagnóstico es realmente complejo, el trabajo pasa a un modelo de razonamiento más capaz en lugar de responderse con una suposición.",
    "ai.agents.cta": "Únase a la beta",

    "ai.cta.title": "¿Quiere acceso anticipado?",
    "ai.cta.desc":
      "Estamos incorporando a un grupo reducido de gestores de activos y proveedores de O&M. Cuéntenos sobre su portafolio y le mostraremos los agentes con sus propios datos.",
    "ai.cta.button": "Contáctenos",
  },

  pt: {
    "ai.learnMore": "Saiba mais sobre IA na AMMP",
    "ai.meta.title": "IA na AMMP: servidor MCP e agentes de IA para portfólios de energia",
    "ai.meta.desc":
      "Como a AMMP coloca os dados do seu portfólio diante da IA: um servidor MCP aberto com ativos, KPIs, alertas e séries temporais, e os agentes que construímos sobre ele.",
    "ai.hero.eyebrow": "Beta",
    "ai.hero.title": "IA na AMMP",
    "ai.hero.subtitle":
      "Colocamos os dados do seu portfólio diretamente diante da IA. Um servidor MCP aberto dá a qualquer assistente acesso seguro aos seus ativos, KPIs, alertas e telemetria, e nossos próprios agentes são construídos sobre a mesma base.",
    "ai.hero.cta.primary": "Experimentar o Ray",
    "ai.hero.cta.secondary": "Fale conosco",

    "ai.mcp.eyebrow": "Protocolo aberto",
    "ai.mcp.title": "O servidor MCP da AMMP",
    "ai.mcp.desc":
      "O servidor MCP da AMMP fala o Model Context Protocol aberto, então conecta-se ao Claude, Cursor, Copilot ou a um agente próprio. O modelo decide quais ferramentas usar, consulta seu portfólio ao vivo e responde em linguagem natural.",
    "ai.mcp.exposes": "O que ele expõe",
    "ai.mcp.item.assets.title": "Ativos e metadados",
    "ai.mcp.item.assets.desc":
      "A estrutura completa do portfólio: sites, equipamentos, capacidades, dados de comissionamento e os metadados que dão contexto a cada leitura.",
    "ai.mcp.item.kpis.title": "KPIs calculados",
    "ai.mcp.item.kpis.desc":
      "Produção, performance ratio, disponibilidade, rendimento específico e o restante do conjunto de KPIs, com as mesmas definições dos seus painéis.",
    "ai.mcp.item.alerts.title": "Alertas ativos e históricos",
    "ai.mcp.item.alerts.desc":
      "Alertas atuais e todo o histórico, para que um assistente correlacione o baixo desempenho de hoje com um evento de três semanas atrás.",
    "ai.mcp.item.timeseries.title": "Séries temporais brutas",
    "ai.mcp.item.timeseries.desc":
      "Telemetria em resolução nativa, para verificar as respostas contra as medições subjacentes e não apenas contra os agregados.",
    "ai.mcp.permissions":
      "As permissões e o escopo seguem os controles de acesso existentes na AMMP. Um assistente só vê o que o usuário conectado já pode ver.",
    "ai.mcp.cta": "Ler o anúncio",

    "ai.diagram.title": "Como isso encaixa no seu stack",
    "ai.diagram.subtitle":
      "Um mapa aproximado das opções de integração que testamos com clientes beta. Use nossos agentes, traga seu próprio assistente, ou os dois.",
    "ai.diagram.provided": "Fornecido pela AMMP",
    "ai.diagram.clay.title": "Agente Clay",
    "ai.diagram.clay.subtitle": "Colega no Slack e Teams",
    "ai.diagram.clay.item1": "Lembra do seu contexto",
    "ai.diagram.clay.item2": "Aprende com o seu feedback",
    "ai.diagram.clay.item3": "Combina fontes de dados",
    "ai.diagram.clay.item4": "Cria relatórios e exportações",
    "ai.diagram.ray.title": "Agente Ray",
    "ai.diagram.ray.subtitle": "Visualização sob demanda",
    "ai.diagram.ray.item1": "Integrado ao AMMP OS",
    "ai.diagram.ray.item2": "Gráficos interativos",
    "ai.diagram.ray.item3": "Painéis ao vivo",
    "ai.diagram.ray.item4": "Diagnóstico em tempo real",
    "ai.diagram.assistant.title": "Seu assistente de IA",
    "ai.diagram.assistant.subtitle": "Claude, Codex, Copilot",
    "ai.diagram.assistant.item1": "Interface de chat nativa",
    "ai.diagram.assistant.item2": "Acesso direto ao portfólio",
    "ai.diagram.assistant.item3": "Suporte completo a ferramentas MCP",
    "ai.diagram.tools.title": "Outras ferramentas de software",
    "ai.diagram.tools.subtitle": "Integração opcional",
    "ai.diagram.tools.item1": "Sistemas CRM, CMMS, ERP",
    "ai.diagram.tools.item2": "Conecte via servidor MCP",
    "ai.diagram.tools.item3": "Ou via seu assistente de IA",
    "ai.diagram.mcp": "Servidor MCP",
    "ai.diagram.portfolio": "Seu portfólio de energia",
    "ai.diagram.note":
      "São hipóteses de trabalho, não um roteiro fechado. Estamos refinando com os operadores do nosso beta.",

    "ai.ray.title": "Ray",
    "ai.ray.subtitle":
      "Ray é o nosso agente dentro do AMMP OS. Peça uma visão geral e ele monta o gráfico, e ainda explica o que encontrou no caminho.",
    "ai.ray.open": "Abrir o Ray em uma nova aba",

    "ai.agents.title": "Para onde vão nossos agentes",
    "ai.agents.subtitle":
      "Estamos construindo uma pequena equipe de agentes especializados sobre o servidor MCP. Veja o que eles são projetados para fazer.",
    "ai.agents.coworker.title": "Um colega no Slack e Teams",
    "ai.agents.coworker.desc":
      "Um agente conversacional que lembra do seu portfólio, aprende com o seu feedback e reúne respostas de várias fontes sem trocar de ferramenta.",
    "ai.agents.visualisation.title": "Visualização sob demanda",
    "ai.agents.visualisation.desc":
      "Gráficos, painéis e exportações gerados a partir de uma única pergunta dentro do AMMP OS, em vez de um pedido a uma fila de relatórios.",
    "ai.agents.qa.title": "QA e monitoramento proativos",
    "ai.agents.qa.desc":
      "Agentes que executam suas próprias verificações de dados, metadados e integridade de painéis sem serem solicitados, e sinalizam o que parece errado antes de você notar.",
    "ai.agents.escalation.title": "Escalonamento para problemas difíceis",
    "ai.agents.escalation.desc":
      "Quando o diagnóstico é realmente complexo, o trabalho passa para um modelo de raciocínio mais capaz em vez de ser respondido com um palpite.",
    "ai.agents.cta": "Entrar no beta",

    "ai.cta.title": "Quer acesso antecipado?",
    "ai.cta.desc":
      "Estamos integrando um pequeno grupo de gestores de ativos e provedores de O&M. Conte sobre o seu portfólio e mostraremos os agentes com os seus próprios dados.",
    "ai.cta.button": "Fale conosco",
  },
};

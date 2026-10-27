import type { Language } from "../translations";

type TranslationSet = Record<Language, Record<string, string>>;

export const blogTranslations: TranslationSet = {
  en: {
    // Category badges on cards
    "blogPage.category.Customers": "Customers",
    "blogPage.category.Product": "Product",
    "blogPage.category.Insights": "Insights",
    "blogPage.category.Compare": "Compare",
    "blogPage.category.Press": "Press",
    "blogPage.category.Awards": "Awards",

    // Posts
    "blog.post.mcp-server-beta.title": "Introducing the AMMP MCP server",
    "blog.post.mcp-server-beta.excerpt": "Connect any MCP-compatible AI assistant to your portfolio's assets, KPIs, alerts and raw time-series.",

    "blog.post.sps-africa.title": "SPS Africa chooses AMMP OS as monitoring platform",
    "blog.post.sps-africa.excerpt": "SPS Africa, with over 350 solar plants and 150 MWp installed, selects AMMP OS as their unified monitoring and reporting platform.",

    "blog.post.jaltech.title": "Jaltech chooses AMMP OS",
    "blog.post.jaltech.excerpt": "Jaltech, a pioneering solar energy funder in South Africa, selects AMMP OS for portfolio monitoring.",

    "blog.post.sawa-energy.title": "Sawa Energy chooses AMMP OS",
    "blog.post.sawa-energy.excerpt": "Sawa Energy, a leader in East Africa's commercial solar sector, selects AMMP OS for monitoring.",

    "blog.post.energea.title": "Energea chooses AMMP OS",
    "blog.post.energea.excerpt": "Energea selects AMMP OS to manage their renewable energy investment portfolio.",

    "blog.post.empower-new-energy.title": "Empower New Energy chooses AMMP OS",
    "blog.post.empower-new-energy.excerpt": "Empower New Energy selects AMMP OS for enhanced portfolio management and reporting.",

    "blog.post.broadreach-energy.title": "Broadreach Energy chooses AMMP OS",
    "blog.post.broadreach-energy.excerpt": "Broadreach Energy selects AMMP OS to monitor their South African renewable energy portfolio.",

    "blog.post.introducing-ammp-os.title": "Introducing AMMP OS",
    "blog.post.introducing-ammp-os.excerpt": "We're excited to announce AMMP OS, the most comprehensive update to the AMMP platform for C&I solar portfolios.",

    "blog.post.fragmented-monitoring-costs.title": "4 Hidden Costs of Fragmented Monitoring of Renewable Energy",
    "blog.post.fragmented-monitoring-costs.excerpt": "Discover the hidden costs that come with fragmented monitoring systems and how unified platforms can help.",

    "blog.post.cyber-secure-infrastructure.title": "The Counter-Intuitive Path to Cyber Secure Infrastructure",
    "blog.post.cyber-secure-infrastructure.excerpt": "Why conventional cybersecurity approaches often fail for renewable energy infrastructure, and what to do instead.",

    "blog.post.data-flowing-wrong-way.title": "Why Renewable Energy Data Is Still Flowing the Wrong Way",
    "blog.post.data-flowing-wrong-way.excerpt": "The data flow problem in renewable energy and how to fix it for better operational efficiency.",

    "blog.post.monitoring-solution-selection-guide.title": "8 Things to Look Out For When Selecting a Monitoring Solution",
    "blog.post.monitoring-solution-selection-guide.excerpt": "A comprehensive guide to choosing the right monitoring platform for your renewable energy portfolio.",

    "blog.post.decentralized-energy-systems.title": "Decentralized Energy Systems vs Software",
    "blog.post.decentralized-energy-systems.excerpt": "How software solutions are adapting to meet the unique challenges of decentralized energy infrastructure.",

    "blog.post.solar-irradiance-research.title": "Solar Irradiance Research Paper",
    "blog.post.solar-irradiance-research.excerpt": "Academic research on solar irradiance measurement and its implications for system performance monitoring.",

    "blog.post.battery-monitoring-cheat-sheet.title": "Battery Monitoring Cheat Sheet",
    "blog.post.battery-monitoring-cheat-sheet.excerpt": "A practical guide to monitoring battery storage systems effectively with key metrics and best practices.",

    "blog.post.white-paper-ammp-accure.title": "White Paper: AMMP x Accure Battery Analytics",
    "blog.post.white-paper-ammp-accure.excerpt": "How AMMP and Accure combine for comprehensive battery health monitoring and predictive analytics.",

    "blog.post.iso-27001-certification.title": "AMMP Achieves ISO/IEC 27001:2022 Certification",
    "blog.post.iso-27001-certification.excerpt": "AMMP Technologies earns the gold standard in information security management certification.",

    "blog.post.featured-foresight-media.title": "Featured in Foresight Media",
    "blog.post.featured-foresight-media.excerpt": "AMMP Technologies featured in Foresight Media's coverage of innovative climate tech companies.",

    "blog.post.featured-sifted.title": "Featured in Sifted",
    "blog.post.featured-sifted.excerpt": "Sifted highlights AMMP's approach to solving renewable energy monitoring challenges.",

    "blog.post.featured-esi-africa.title": "Featured in ESI Africa",
    "blog.post.featured-esi-africa.excerpt": "ESI Africa covers AMMP's expansion and impact across the African renewable energy sector.",

    "blog.post.featured-techleap-climate-report.title": "Featured in TechLeap Climate Report",
    "blog.post.featured-techleap-climate-report.excerpt": "AMMP recognized in TechLeap's annual report on leading climate technology companies.",

    "blog.post.featured-tech-eu.title": "Featured in Tech.eu",
    "blog.post.featured-tech-eu.excerpt": "Tech.eu reported on AMMP's €1.15 million seed round, led by Point Nine Capital.",

    "blog.post.featured-afrik21.title": "Featured in Afrik21",
    "blog.post.featured-afrik21.excerpt": "Afrik21 reported on AMMP's €1.15 million raise to expand its off-grid monitoring solutions.",

    "blog.post.featured-silicon-canals.title": "Featured in Silicon Canals",
    "blog.post.featured-silicon-canals.excerpt": "Silicon Canals listed AMMP among Amsterdam startups working to cool the planet.",

    "blog.post.set100-award-2021.title": "AMMP Named in SET100 List 2021",
    "blog.post.set100-award-2021.excerpt": "AMMP Technologies recognized as one of the top 100 innovative energy transition companies globally.",

    "blog.post.in-house-systems.title": "AMMP vs In-House Systems",
    "blog.post.in-house-systems.excerpt": "Compare AMMP's ready-to-deploy platform to building custom in-house monitoring solutions.",

    "blog.post.traditional-monitoring.title": "AMMP vs Traditional Monitoring",
    "blog.post.traditional-monitoring.excerpt": "Compare AMMP's modern platform to traditional SCADA and monitoring approaches.",

    "blog.post.cloud-vs-on-premise.title": "Cloud vs On-Premise Monitoring",
    "blog.post.cloud-vs-on-premise.excerpt": "Understand the trade-offs between cloud-based and on-premise solar monitoring solutions.",

    "blog.post.data-first-vs-ui-first.title": "Data-First vs UI-First Platforms",
    "blog.post.data-first-vs-ui-first.excerpt": "Why a data-first architecture matters for scalable solar portfolio management.",

    "blog.post.open-vs-proprietary.title": "Open vs Proprietary Systems",
    "blog.post.open-vs-proprietary.excerpt": "Compare open, vendor-agnostic platforms to proprietary lock-in monitoring solutions.",

    "blog.post.vendor-portals.title": "AMMP vs Manufacturer Portals",
    "blog.post.vendor-portals.excerpt": "Why a unified monitoring platform beats juggling multiple vendor portals for your solar portfolio.",

    "blog.post.ammp-vs-alsoenergy.title": "AMMP vs AlsoEnergy",
    "blog.post.ammp-vs-alsoenergy.excerpt": "Compare AMMP and AlsoEnergy (PowerTrack) on customisation, integrations, support and BESS depth.",

    "blog.post.pv-operation.title": "AMMP vs PV Operation",
    "blog.post.pv-operation.excerpt": "Compare AMMP's hardware-agnostic cloud platform to PV Operation's SCADA-based approach in Brazil.",

    "blog.post.meteocontrol.title": "AMMP vs Meteocontrol",
    "blog.post.meteocontrol.excerpt": "Compare AMMP's C&I-focused platform to Meteocontrol for distributed solar portfolios.",

    "blog.post.qos-energy.title": "AMMP vs QOS Energy",
    "blog.post.qos-energy.excerpt": "Compare AMMP's flexibility to QOS Energy for commercial solar monitoring and analytics.",

    "blog.post.bazefield.title": "AMMP vs Bazefield",
    "blog.post.bazefield.excerpt": "Compare AMMP's C&I-focused platform to Bazefield's utility-scale SCADA solution.",

    "blog.post.univers.title": "AMMP vs Univers (EnOS)",
    "blog.post.univers.excerpt": "Compare AMMP's focused C&I platform to Univers's enterprise-scale EnOS platform.",

    "blog.post.huawei.title": "AMMP vs FusionSolar (Huawei)",
    "blog.post.huawei.excerpt": "Compare AMMP's multi-vendor platform to Huawei's FusionSolar portal for solar monitoring.",

    "blog.post.sungrow.title": "AMMP vs iSolarCloud (Sungrow)",
    "blog.post.sungrow.excerpt": "Compare AMMP's unified platform to Sungrow's iSolarCloud portal for portfolio management.",

    "blog.post.sma.title": "AMMP vs Sunny Portal (SMA)",
    "blog.post.sma.excerpt": "Compare AMMP's commercial-grade platform to SMA's Sunny Portal for professional solar monitoring.",

    "blog.post.fronius.title": "AMMP vs Solar.web (Fronius)",
    "blog.post.fronius.excerpt": "Compare AMMP's multi-vendor support to Fronius Solar.web for commercial solar portfolios.",

    "blog.post.goodwe.title": "AMMP vs SEMS (GoodWe)",
    "blog.post.goodwe.excerpt": "Compare AMMP's portfolio-wide insights to GoodWe's SEMS portal for solar monitoring.",

    "blog.post.growatt.title": "AMMP vs ShineServer (Growatt)",
    "blog.post.growatt.excerpt": "Compare AMMP's unified monitoring to Growatt's ShineServer for multi-vendor portfolios.",

    "blog.post.victron.title": "AMMP vs VRM Portal (Victron)",
    "blog.post.victron.excerpt": "Compare AMMP's commercial-scale platform to Victron's VRM Portal for hybrid energy systems.",

    "blog.post.solaredge.title": "AMMP vs SolarEdge Monitoring",
    "blog.post.solaredge.excerpt": "Compare AMMP's vendor-agnostic platform to SolarEdge's proprietary monitoring solution.",
  },

  es: {
    "blogPage.category.Customers": "Clientes",
    "blogPage.category.Product": "Producto",
    "blogPage.category.Insights": "Análisis",
    "blogPage.category.Compare": "Comparar",
    "blogPage.category.Press": "Prensa",
    "blogPage.category.Awards": "Premios",

    "blog.post.mcp-server-beta.title": "Presentamos el servidor MCP de AMMP",
    "blog.post.mcp-server-beta.excerpt": "Conecta cualquier asistente de IA compatible con MCP a los activos, KPIs, alertas y series temporales de tu portafolio.",

    "blog.post.sps-africa.title": "SPS Africa elige AMMP OS como plataforma de monitoreo",
    "blog.post.sps-africa.excerpt": "SPS Africa, con más de 350 plantas solares y 150 MWp instalados, selecciona AMMP OS como su plataforma unificada de monitoreo y reportes.",

    "blog.post.jaltech.title": "Jaltech elige AMMP OS",
    "blog.post.jaltech.excerpt": "Jaltech, un financiador pionero de energía solar en Sudáfrica, selecciona AMMP OS para el monitoreo de su portafolio.",

    "blog.post.sawa-energy.title": "Sawa Energy elige AMMP OS",
    "blog.post.sawa-energy.excerpt": "Sawa Energy, líder en el sector solar comercial de África Oriental, selecciona AMMP OS para monitoreo.",

    "blog.post.energea.title": "Energea elige AMMP OS",
    "blog.post.energea.excerpt": "Energea selecciona AMMP OS para gestionar su portafolio de inversión en energías renovables.",

    "blog.post.empower-new-energy.title": "Empower New Energy elige AMMP OS",
    "blog.post.empower-new-energy.excerpt": "Empower New Energy selecciona AMMP OS para mejorar la gestión y los reportes de su portafolio.",

    "blog.post.broadreach-energy.title": "Broadreach Energy elige AMMP OS",
    "blog.post.broadreach-energy.excerpt": "Broadreach Energy selecciona AMMP OS para monitorear su portafolio de energía renovable en Sudáfrica.",

    "blog.post.introducing-ammp-os.title": "Presentamos AMMP OS",
    "blog.post.introducing-ammp-os.excerpt": "Nos entusiasma anunciar AMMP OS, la actualización más completa de la plataforma AMMP para portafolios solares C&I.",

    "blog.post.fragmented-monitoring-costs.title": "4 costos ocultos del monitoreo fragmentado de energías renovables",
    "blog.post.fragmented-monitoring-costs.excerpt": "Descubre los costos ocultos de los sistemas de monitoreo fragmentados y cómo las plataformas unificadas pueden ayudar.",

    "blog.post.cyber-secure-infrastructure.title": "El camino contraintuitivo hacia una infraestructura ciberseguras",
    "blog.post.cyber-secure-infrastructure.excerpt": "Por qué los enfoques convencionales de ciberseguridad a menudo fallan para la infraestructura de energías renovables, y qué hacer en su lugar.",

    "blog.post.data-flowing-wrong-way.title": "Por qué los datos de energías renovables aún fluyen en la dirección equivocada",
    "blog.post.data-flowing-wrong-way.excerpt": "El problema del flujo de datos en las energías renovables y cómo resolverlo para una mayor eficiencia operativa.",

    "blog.post.monitoring-solution-selection-guide.title": "8 aspectos a tener en cuenta al elegir una solución de monitoreo",
    "blog.post.monitoring-solution-selection-guide.excerpt": "Una guía completa para elegir la plataforma de monitoreo adecuada para tu portafolio de energías renovables.",

    "blog.post.decentralized-energy-systems.title": "Sistemas de energía descentralizada vs software",
    "blog.post.decentralized-energy-systems.excerpt": "Cómo las soluciones de software se adaptan a los retos únicos de la infraestructura energética descentralizada.",

    "blog.post.solar-irradiance-research.title": "Investigación sobre irradiancia solar",
    "blog.post.solar-irradiance-research.excerpt": "Investigación académica sobre la medición de la irradiancia solar y sus implicaciones para el monitoreo del rendimiento del sistema.",

    "blog.post.battery-monitoring-cheat-sheet.title": "Guía rápida de monitoreo de baterías",
    "blog.post.battery-monitoring-cheat-sheet.excerpt": "Una guía práctica para monitorear sistemas de almacenamiento en baterías con métricas clave y mejores prácticas.",

    "blog.post.white-paper-ammp-accure.title": "White Paper: AMMP x Accure Battery Analytics",
    "blog.post.white-paper-ammp-accure.excerpt": "Cómo AMMP y Accure se combinan para un monitoreo integral de la salud de las baterías y análisis predictivo.",

    "blog.post.iso-27001-certification.title": "AMMP obtiene la certificación ISO/IEC 27001:2022",
    "blog.post.iso-27001-certification.excerpt": "AMMP Technologies obtiene el estándar de oro en certificación de gestión de la seguridad de la información.",

    "blog.post.featured-foresight-media.title": "Destacados en Foresight Media",
    "blog.post.featured-foresight-media.excerpt": "AMMP Technologies destacado en la cobertura de Foresight Media sobre empresas innovadoras de tecnología climática.",

    "blog.post.featured-sifted.title": "Destacados en Sifted",
    "blog.post.featured-sifted.excerpt": "Sifted destaca el enfoque de AMMP para resolver los retos del monitoreo de energías renovables.",

    "blog.post.featured-esi-africa.title": "Destacados en ESI Africa",
    "blog.post.featured-esi-africa.excerpt": "ESI Africa cubre la expansión e impacto de AMMP en el sector africano de energías renovables.",

    "blog.post.featured-techleap-climate-report.title": "Destacados en el informe climático de TechLeap",
    "blog.post.featured-techleap-climate-report.excerpt": "AMMP reconocida en el informe anual de TechLeap sobre las principales empresas de tecnología climática.",

    "blog.post.featured-tech-eu.title": "Destacados en Tech.eu",
    "blog.post.featured-tech-eu.excerpt": "Tech.eu informó sobre la ronda semilla de 1,15 millones de euros de AMMP, liderada por Point Nine Capital.",

    "blog.post.featured-afrik21.title": "Destacados en Afrik21",
    "blog.post.featured-afrik21.excerpt": "Afrik21 informó sobre la ronda de 1,15 millones de euros de AMMP para ampliar sus soluciones de monitoreo fuera de red.",

    "blog.post.featured-silicon-canals.title": "Destacados en Silicon Canals",
    "blog.post.featured-silicon-canals.excerpt": "Silicon Canals incluyó a AMMP entre las startups de Ámsterdam que trabajan para enfriar el planeta.",

    "blog.post.set100-award-2021.title": "AMMP incluida en la lista SET100 2021",
    "blog.post.set100-award-2021.excerpt": "AMMP Technologies reconocida como una de las 100 empresas más innovadoras de la transición energética a nivel mundial.",

    "blog.post.in-house-systems.title": "AMMP vs sistemas internos",
    "blog.post.in-house-systems.excerpt": "Compara la plataforma lista para usar de AMMP con la creación de soluciones de monitoreo internas y personalizadas.",

    "blog.post.traditional-monitoring.title": "AMMP vs monitoreo tradicional",
    "blog.post.traditional-monitoring.excerpt": "Compara la plataforma moderna de AMMP con los enfoques tradicionales de SCADA y monitoreo.",

    "blog.post.cloud-vs-on-premise.title": "Monitoreo en la nube vs on-premise",
    "blog.post.cloud-vs-on-premise.excerpt": "Comprende las ventajas y desventajas entre las soluciones de monitoreo solar en la nube y on-premise.",

    "blog.post.data-first-vs-ui-first.title": "Plataformas Data-First vs UI-First",
    "blog.post.data-first-vs-ui-first.excerpt": "Por qué una arquitectura orientada a datos es clave para gestionar portafolios solares a gran escala.",

    "blog.post.open-vs-proprietary.title": "Sistemas abiertos vs propietarios",
    "blog.post.open-vs-proprietary.excerpt": "Compara las plataformas abiertas e independientes del proveedor con las soluciones propietarias que generan dependencia.",

    "blog.post.vendor-portals.title": "AMMP vs portales de fabricantes",
    "blog.post.vendor-portals.excerpt": "Por qué una plataforma de monitoreo unificada supera a la gestión de múltiples portales de proveedor para tu portafolio solar.",

    "blog.post.ammp-vs-alsoenergy.title": "AMMP vs AlsoEnergy",
    "blog.post.ammp-vs-alsoenergy.excerpt": "Compare AMMP y AlsoEnergy (PowerTrack) en personalización, integraciones, soporte y profundidad en BESS.",

    "blog.post.pv-operation.title": "AMMP vs PV Operation",
    "blog.post.pv-operation.excerpt": "Compare la plataforma cloud e independiente del hardware de AMMP con el enfoque basado en SCADA de PV Operation en Brasil.",

    "blog.post.meteocontrol.title": "AMMP vs Meteocontrol",
    "blog.post.meteocontrol.excerpt": "Compara la plataforma centrada en C&I de AMMP con Meteocontrol para portafolios solares distribuidos.",

    "blog.post.qos-energy.title": "AMMP vs QOS Energy",
    "blog.post.qos-energy.excerpt": "Compara la flexibilidad de AMMP con QOS Energy para el monitoreo y análisis solar comercial.",

    "blog.post.bazefield.title": "AMMP vs Bazefield",
    "blog.post.bazefield.excerpt": "Compara la plataforma centrada en C&I de AMMP con la solución SCADA a escala utility de Bazefield.",

    "blog.post.univers.title": "AMMP vs Univers (EnOS)",
    "blog.post.univers.excerpt": "Compara la plataforma enfocada en C&I de AMMP con la plataforma EnOS a escala empresarial de Univers.",

    "blog.post.huawei.title": "AMMP vs FusionSolar (Huawei)",
    "blog.post.huawei.excerpt": "Compara la plataforma multi-proveedor de AMMP con el portal FusionSolar de Huawei para monitoreo solar.",

    "blog.post.sungrow.title": "AMMP vs iSolarCloud (Sungrow)",
    "blog.post.sungrow.excerpt": "Compara la plataforma unificada de AMMP con el portal iSolarCloud de Sungrow para la gestión de portafolios.",

    "blog.post.sma.title": "AMMP vs Sunny Portal (SMA)",
    "blog.post.sma.excerpt": "Compara la plataforma comercial de AMMP con Sunny Portal de SMA para el monitoreo solar profesional.",

    "blog.post.fronius.title": "AMMP vs Solar.web (Fronius)",
    "blog.post.fronius.excerpt": "Compara el soporte multi-proveedor de AMMP con Fronius Solar.web para portafolios solares comerciales.",

    "blog.post.goodwe.title": "AMMP vs SEMS (GoodWe)",
    "blog.post.goodwe.excerpt": "Compara las perspectivas de portafolio completo de AMMP con el portal SEMS de GoodWe para monitoreo solar.",

    "blog.post.growatt.title": "AMMP vs ShineServer (Growatt)",
    "blog.post.growatt.excerpt": "Compara el monitoreo unificado de AMMP con ShineServer de Growatt para portafolios multi-proveedor.",

    "blog.post.victron.title": "AMMP vs VRM Portal (Victron)",
    "blog.post.victron.excerpt": "Compara la plataforma a escala comercial de AMMP con el VRM Portal de Victron para sistemas de energía híbridos.",

    "blog.post.solaredge.title": "AMMP vs monitoreo de SolarEdge",
    "blog.post.solaredge.excerpt": "Compara la plataforma independiente del proveedor de AMMP con la solución de monitoreo propietaria de SolarEdge.",
  },

  pt: {
    "blogPage.category.Customers": "Clientes",
    "blogPage.category.Product": "Produto",
    "blogPage.category.Insights": "Insights",
    "blogPage.category.Compare": "Comparar",
    "blogPage.category.Press": "Imprensa",
    "blogPage.category.Awards": "Prêmios",

    "blog.post.mcp-server-beta.title": "Apresentando o servidor MCP da AMMP",
    "blog.post.mcp-server-beta.excerpt": "Conecte qualquer assistente de IA compatível com MCP aos ativos, KPIs, alertas e séries temporais do seu portfólio.",

    "blog.post.sps-africa.title": "SPS Africa escolhe o AMMP OS como plataforma de monitoramento",
    "blog.post.sps-africa.excerpt": "A SPS Africa, com mais de 350 usinas solares e 150 MWp instalados, seleciona o AMMP OS como sua plataforma unificada de monitoramento e relatórios.",

    "blog.post.jaltech.title": "Jaltech escolhe o AMMP OS",
    "blog.post.jaltech.excerpt": "A Jaltech, financiadora pioneira de energia solar na África do Sul, seleciona o AMMP OS para o monitoramento de portfólio.",

    "blog.post.sawa-energy.title": "Sawa Energy escolhe o AMMP OS",
    "blog.post.sawa-energy.excerpt": "A Sawa Energy, líder no setor solar comercial da África Oriental, seleciona o AMMP OS para monitoramento.",

    "blog.post.energea.title": "Energea escolhe o AMMP OS",
    "blog.post.energea.excerpt": "A Energea seleciona o AMMP OS para gerenciar seu portfólio de investimento em energias renováveis.",

    "blog.post.empower-new-energy.title": "Empower New Energy escolhe o AMMP OS",
    "blog.post.empower-new-energy.excerpt": "A Empower New Energy seleciona o AMMP OS para aprimorar a gestão e os relatórios do seu portfólio.",

    "blog.post.broadreach-energy.title": "Broadreach Energy escolhe o AMMP OS",
    "blog.post.broadreach-energy.excerpt": "A Broadreach Energy seleciona o AMMP OS para monitorar seu portfólio de energia renovável na África do Sul.",

    "blog.post.introducing-ammp-os.title": "Apresentando o AMMP OS",
    "blog.post.introducing-ammp-os.excerpt": "Temos o prazer de anunciar o AMMP OS, a atualização mais abrangente da plataforma AMMP para portfólios solares C&I.",

    "blog.post.fragmented-monitoring-costs.title": "4 custos ocultos do monitoramento fragmentado de energias renováveis",
    "blog.post.fragmented-monitoring-costs.excerpt": "Descubra os custos ocultos dos sistemas de monitoramento fragmentados e como plataformas unificadas podem ajudar.",

    "blog.post.cyber-secure-infrastructure.title": "O caminho contraintuitivo para uma infraestrutura cibersegura",
    "blog.post.cyber-secure-infrastructure.excerpt": "Por que as abordagens convencionais de cibersegurança frequentemente falham para infraestrutura de energias renováveis, e o que fazer no lugar.",

    "blog.post.data-flowing-wrong-way.title": "Por que os dados de energias renováveis ainda fluem na direção errada",
    "blog.post.data-flowing-wrong-way.excerpt": "O problema do fluxo de dados em energias renováveis e como resolvê-lo para uma maior eficiência operacional.",

    "blog.post.monitoring-solution-selection-guide.title": "8 pontos a observar ao escolher uma solução de monitoramento",
    "blog.post.monitoring-solution-selection-guide.excerpt": "Um guia completo para escolher a plataforma de monitoramento certa para seu portfólio de energias renováveis.",

    "blog.post.decentralized-energy-systems.title": "Sistemas de energia descentralizada vs software",
    "blog.post.decentralized-energy-systems.excerpt": "Como as soluções de software estão se adaptando aos desafios únicos da infraestrutura energética descentralizada.",

    "blog.post.solar-irradiance-research.title": "Pesquisa sobre irradiância solar",
    "blog.post.solar-irradiance-research.excerpt": "Pesquisa acadêmica sobre a medição da irradiância solar e suas implicações para o monitoramento de desempenho de sistemas.",

    "blog.post.battery-monitoring-cheat-sheet.title": "Guia rápido de monitoramento de baterias",
    "blog.post.battery-monitoring-cheat-sheet.excerpt": "Um guia prático para monitorar sistemas de armazenamento em baterias com métricas-chave e melhores práticas.",

    "blog.post.white-paper-ammp-accure.title": "White Paper: AMMP x Accure Battery Analytics",
    "blog.post.white-paper-ammp-accure.excerpt": "Como AMMP e Accure se combinam para monitoramento abrangente da saúde de baterias e análise preditiva.",

    "blog.post.iso-27001-certification.title": "AMMP obtém certificação ISO/IEC 27001:2022",
    "blog.post.iso-27001-certification.excerpt": "A AMMP Technologies conquista o padrão ouro em certificação de gestão de segurança da informação.",

    "blog.post.featured-foresight-media.title": "Destaque na Foresight Media",
    "blog.post.featured-foresight-media.excerpt": "AMMP Technologies em destaque na cobertura da Foresight Media sobre empresas inovadoras de climate tech.",

    "blog.post.featured-sifted.title": "Destaque na Sifted",
    "blog.post.featured-sifted.excerpt": "A Sifted destaca a abordagem da AMMP para resolver os desafios do monitoramento de energias renováveis.",

    "blog.post.featured-esi-africa.title": "Destaque na ESI Africa",
    "blog.post.featured-esi-africa.excerpt": "A ESI Africa cobre a expansão e o impacto da AMMP no setor africano de energias renováveis.",

    "blog.post.featured-techleap-climate-report.title": "Destaque no relatório climático da TechLeap",
    "blog.post.featured-techleap-climate-report.excerpt": "AMMP reconhecida no relatório anual da TechLeap sobre as principais empresas de climate tech.",

    "blog.post.featured-tech-eu.title": "Destaque na Tech.eu",
    "blog.post.featured-tech-eu.excerpt": "A Tech.eu noticiou a rodada seed de 1,15 milhão de euros da AMMP, liderada pela Point Nine Capital.",

    "blog.post.featured-afrik21.title": "Destaque na Afrik21",
    "blog.post.featured-afrik21.excerpt": "A Afrik21 noticiou a captação de 1,15 milhão de euros da AMMP para expandir suas soluções de monitoramento off-grid.",

    "blog.post.featured-silicon-canals.title": "Destaque na Silicon Canals",
    "blog.post.featured-silicon-canals.excerpt": "A Silicon Canals incluiu a AMMP entre as startups de Amsterdã que trabalham para resfriar o planeta.",

    "blog.post.set100-award-2021.title": "AMMP incluída na lista SET100 2021",
    "blog.post.set100-award-2021.excerpt": "AMMP Technologies reconhecida como uma das 100 empresas mais inovadoras da transição energética no mundo.",

    "blog.post.in-house-systems.title": "AMMP vs sistemas internos",
    "blog.post.in-house-systems.excerpt": "Compare a plataforma pronta para uso da AMMP com a construção de soluções de monitoramento internas e personalizadas.",

    "blog.post.traditional-monitoring.title": "AMMP vs monitoramento tradicional",
    "blog.post.traditional-monitoring.excerpt": "Compare a plataforma moderna da AMMP com as abordagens tradicionais de SCADA e monitoramento.",

    "blog.post.cloud-vs-on-premise.title": "Monitoramento em nuvem vs on-premise",
    "blog.post.cloud-vs-on-premise.excerpt": "Entenda as vantagens e desvantagens entre soluções de monitoramento solar em nuvem e on-premise.",

    "blog.post.data-first-vs-ui-first.title": "Plataformas Data-First vs UI-First",
    "blog.post.data-first-vs-ui-first.excerpt": "Por que uma arquitetura orientada a dados é essencial para gerenciar portfólios solares em larga escala.",

    "blog.post.open-vs-proprietary.title": "Sistemas abertos vs proprietários",
    "blog.post.open-vs-proprietary.excerpt": "Compare plataformas abertas e independentes do fornecedor com soluções proprietárias que geram lock-in.",

    "blog.post.vendor-portals.title": "AMMP vs portais de fabricantes",
    "blog.post.vendor-portals.excerpt": "Por que uma plataforma de monitoramento unificada supera o uso de vários portais de fornecedores para seu portfólio solar.",

    "blog.post.ammp-vs-alsoenergy.title": "AMMP vs AlsoEnergy",
    "blog.post.ammp-vs-alsoenergy.excerpt": "Compare a AMMP e o AlsoEnergy (PowerTrack) em personalização, integrações, suporte e profundidade em BESS.",

    "blog.post.pv-operation.title": "AMMP vs PV Operation",
    "blog.post.pv-operation.excerpt": "Compare a plataforma cloud e agnóstica de hardware da AMMP com a abordagem baseada em SCADA da PV Operation no Brasil.",

    "blog.post.meteocontrol.title": "AMMP vs Meteocontrol",
    "blog.post.meteocontrol.excerpt": "Compare a plataforma focada em C&I da AMMP com a Meteocontrol para portfólios solares distribuídos.",

    "blog.post.qos-energy.title": "AMMP vs QOS Energy",
    "blog.post.qos-energy.excerpt": "Compare a flexibilidade da AMMP com a QOS Energy para monitoramento e análise solar comercial.",

    "blog.post.bazefield.title": "AMMP vs Bazefield",
    "blog.post.bazefield.excerpt": "Compare a plataforma focada em C&I da AMMP com a solução SCADA em escala utility da Bazefield.",

    "blog.post.univers.title": "AMMP vs Univers (EnOS)",
    "blog.post.univers.excerpt": "Compare a plataforma focada em C&I da AMMP com a plataforma EnOS em escala empresarial da Univers.",

    "blog.post.huawei.title": "AMMP vs FusionSolar (Huawei)",
    "blog.post.huawei.excerpt": "Compare a plataforma multi-fornecedor da AMMP com o portal FusionSolar da Huawei para monitoramento solar.",

    "blog.post.sungrow.title": "AMMP vs iSolarCloud (Sungrow)",
    "blog.post.sungrow.excerpt": "Compare a plataforma unificada da AMMP com o portal iSolarCloud da Sungrow para gestão de portfólio.",

    "blog.post.sma.title": "AMMP vs Sunny Portal (SMA)",
    "blog.post.sma.excerpt": "Compare a plataforma comercial da AMMP com o Sunny Portal da SMA para monitoramento solar profissional.",

    "blog.post.fronius.title": "AMMP vs Solar.web (Fronius)",
    "blog.post.fronius.excerpt": "Compare o suporte multi-fornecedor da AMMP com o Fronius Solar.web para portfólios solares comerciais.",

    "blog.post.goodwe.title": "AMMP vs SEMS (GoodWe)",
    "blog.post.goodwe.excerpt": "Compare as visões de portfólio completo da AMMP com o portal SEMS da GoodWe para monitoramento solar.",

    "blog.post.growatt.title": "AMMP vs ShineServer (Growatt)",
    "blog.post.growatt.excerpt": "Compare o monitoramento unificado da AMMP com o ShineServer da Growatt para portfólios multi-fornecedor.",

    "blog.post.victron.title": "AMMP vs VRM Portal (Victron)",
    "blog.post.victron.excerpt": "Compare a plataforma em escala comercial da AMMP com o VRM Portal da Victron para sistemas de energia híbridos.",

    "blog.post.solaredge.title": "AMMP vs monitoramento SolarEdge",
    "blog.post.solaredge.excerpt": "Compare a plataforma independente do fornecedor da AMMP com a solução de monitoramento proprietária da SolarEdge.",
  },
};

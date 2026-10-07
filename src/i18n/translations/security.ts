import type { Language } from "../translations";

// /security -> "Security & Trust"
// NOTE: hosting/residency, uptime, subprocessor and roadmap copy is draft and
// should be confirmed by AMMP before being treated as a public commitment.

type Dict = Record<string, string>;

const en: Dict = {
  "sec.meta.title": "Security & Trust | ISO 27001 Certified Monitoring | AMMP",
  "sec.meta.desc": "How AMMP protects your portfolio data: ISO/IEC 27001:2022 certification, hosting and data residency, uptime, encryption, access control and data export.",
  "sec.hero.eyebrow": "Security and trust",
  "sec.hero.title": "How we protect your portfolio data",
  "sec.hero.subtitle": "AMMP is the system of record for thousands of solar and storage sites. This page sets out how that data is stored, protected and returned to you.",
  "sec.badge.iso": "ISO/IEC 27001:2022",

  "sec.iso.title": "ISO/IEC 27001:2022 certified",
  "sec.iso.desc": "AMMP Technologies operates an independently audited information security management system, certified to ISO/IEC 27001:2022. The scope covers the AMMP platform, its supporting cloud infrastructure, and the processes our team follows to build and operate it.",
  "sec.iso.cta": "Request our certificate",

  "sec.hosting.title": "Infrastructure and data residency",
  "sec.hosting.desc": "AMMP runs on managed cloud infrastructure with your portfolio data hosted in the European Union. A US region is on the roadmap for customers with a domestic residency requirement. Tell us your residency constraint and we will confirm what is possible today.",

  "sec.uptime.title": "Uptime and service levels",
  "sec.uptime.desc": "The platform is built for continuous operation, with redundancy and automated failover across availability zones. Service level commitments, including the target availability figure and support response times, are agreed in your contract.",

  "sec.data.title": "Your data is yours",
  "sec.data.desc": "You own the data you send to AMMP. Everything is available through our REST API and bulk export in open formats, during the contract and on exit. We do not sell customer data, and we do not use it to train third-party models.",

  "sec.access.title": "Access control and encryption",
  "sec.access.desc": "Data is encrypted in transit and at rest. Access follows least privilege, with role-based permissions in the product, single sign-on options, and audited internal access limited to the engineers who need it to run the service.",

  "sec.subprocessors.title": "Subprocessors",
  "sec.subprocessors.desc": "A current list of subprocessors, the service each provides and its processing location is available on request. We will publish the full list here once it has been reviewed.",

  "sec.roadmap.title": "On the roadmap",
  "sec.roadmap.desc": "SOC 2 Type II is under consideration in response to demand from US procurement teams. If it is a gating requirement for your evaluation, tell us and we will share where the work stands.",

  "sec.cta.title": "Security questions before you buy?",
  "sec.cta.desc": "Send us your security questionnaire or vendor assessment. We answer them ourselves, without a sales layer in between.",
  "sec.cta.button": "Contact our team",
};

const es: Dict = {
  "sec.meta.title": "Seguridad y confianza | Monitorización certificada ISO 27001 | AMMP",
  "sec.meta.desc": "Cómo protege AMMP los datos de su cartera: certificación ISO/IEC 27001:2022, alojamiento y residencia de datos, disponibilidad, cifrado, control de acceso y exportación.",
  "sec.hero.eyebrow": "Seguridad y confianza",
  "sec.hero.title": "Cómo protegemos los datos de su cartera",
  "sec.hero.subtitle": "AMMP es el sistema de registro de miles de plantas solares y de almacenamiento. Esta página explica cómo se guardan, protegen y devuelven esos datos.",
  "sec.badge.iso": "ISO/IEC 27001:2022",

  "sec.iso.title": "Certificación ISO/IEC 27001:2022",
  "sec.iso.desc": "AMMP Technologies opera un sistema de gestión de seguridad de la información auditado de forma independiente y certificado según ISO/IEC 27001:2022. El alcance cubre la plataforma AMMP, su infraestructura cloud y los procesos con los que la construimos y operamos.",
  "sec.iso.cta": "Solicitar el certificado",

  "sec.hosting.title": "Infraestructura y residencia de datos",
  "sec.hosting.desc": "AMMP se ejecuta sobre infraestructura cloud gestionada, con los datos de su cartera alojados en la Unión Europea. Una región en EE. UU. está en la hoja de ruta para clientes con requisitos de residencia nacional. Indíquenos su restricción y confirmaremos qué es posible hoy.",

  "sec.uptime.title": "Disponibilidad y niveles de servicio",
  "sec.uptime.desc": "La plataforma está diseñada para operación continua, con redundancia y conmutación automática entre zonas de disponibilidad. Los compromisos de nivel de servicio, incluida la disponibilidad objetivo y los tiempos de respuesta de soporte, se acuerdan en su contrato.",

  "sec.data.title": "Sus datos son suyos",
  "sec.data.desc": "Usted es propietario de los datos que envía a AMMP. Todo está disponible mediante nuestra API REST y exportación masiva en formatos abiertos, durante el contrato y a la salida. No vendemos datos de clientes ni los usamos para entrenar modelos de terceros.",

  "sec.access.title": "Control de acceso y cifrado",
  "sec.access.desc": "Los datos se cifran en tránsito y en reposo. El acceso sigue el principio de mínimo privilegio, con permisos por rol en el producto, opciones de inicio de sesión único y acceso interno auditado limitado a los ingenieros que lo necesitan.",

  "sec.subprocessors.title": "Subencargados del tratamiento",
  "sec.subprocessors.desc": "La lista actual de subencargados, el servicio que presta cada uno y su ubicación de tratamiento está disponible a petición. Publicaremos aquí la lista completa una vez revisada.",

  "sec.roadmap.title": "En la hoja de ruta",
  "sec.roadmap.desc": "SOC 2 Tipo II está en estudio por la demanda de los equipos de compras estadounidenses. Si es un requisito bloqueante en su evaluación, díganoslo y le contaremos en qué punto está el trabajo.",

  "sec.cta.title": "¿Dudas de seguridad antes de comprar?",
  "sec.cta.desc": "Envíenos su cuestionario de seguridad o su evaluación de proveedores. Lo respondemos nosotros, sin intermediarios comerciales.",
  "sec.cta.button": "Contactar con el equipo",
};

const pt: Dict = {
  "sec.meta.title": "Segurança e confiança | Monitorização certificada ISO 27001 | AMMP",
  "sec.meta.desc": "Como a AMMP protege os dados do seu portfólio: certificação ISO/IEC 27001:2022, alojamento e residência de dados, disponibilidade, cifragem, controlo de acesso e exportação.",
  "sec.hero.eyebrow": "Segurança e confiança",
  "sec.hero.title": "Como protegemos os dados do seu portfólio",
  "sec.hero.subtitle": "A AMMP é o sistema de registo de milhares de centrais solares e de armazenamento. Esta página explica como esses dados são guardados, protegidos e devolvidos.",
  "sec.badge.iso": "ISO/IEC 27001:2022",

  "sec.iso.title": "Certificação ISO/IEC 27001:2022",
  "sec.iso.desc": "A AMMP Technologies opera um sistema de gestão de segurança da informação auditado de forma independente e certificado segundo a ISO/IEC 27001:2022. O âmbito cobre a plataforma AMMP, a sua infraestrutura cloud e os processos com que a construímos e operamos.",
  "sec.iso.cta": "Pedir o certificado",

  "sec.hosting.title": "Infraestrutura e residência de dados",
  "sec.hosting.desc": "A AMMP corre sobre infraestrutura cloud gerida, com os dados do seu portfólio alojados na União Europeia. Uma região nos EUA está no roadmap para clientes com requisitos de residência nacional. Diga-nos a sua restrição e confirmamos o que é possível hoje.",

  "sec.uptime.title": "Disponibilidade e níveis de serviço",
  "sec.uptime.desc": "A plataforma foi construída para operação contínua, com redundância e failover automático entre zonas de disponibilidade. Os compromissos de nível de serviço, incluindo a disponibilidade alvo e os tempos de resposta do suporte, são acordados no seu contrato.",

  "sec.data.title": "Os seus dados são seus",
  "sec.data.desc": "É proprietário dos dados que envia para a AMMP. Tudo fica disponível através da nossa API REST e de exportação em massa em formatos abertos, durante o contrato e na saída. Não vendemos dados de clientes nem os usamos para treinar modelos de terceiros.",

  "sec.access.title": "Controlo de acesso e cifragem",
  "sec.access.desc": "Os dados são cifrados em trânsito e em repouso. O acesso segue o princípio do menor privilégio, com permissões por papel no produto, opções de início de sessão único e acesso interno auditado limitado aos engenheiros que dele precisam.",

  "sec.subprocessors.title": "Subcontratantes",
  "sec.subprocessors.desc": "A lista atual de subcontratantes, o serviço prestado por cada um e a respetiva localização de tratamento está disponível mediante pedido. Publicaremos aqui a lista completa depois de revista.",

  "sec.roadmap.title": "No roadmap",
  "sec.roadmap.desc": "A SOC 2 Tipo II está em estudo devido à procura das equipas de compras nos EUA. Se for um requisito bloqueante na sua avaliação, diga-nos e partilhamos o ponto de situação.",

  "sec.cta.title": "Dúvidas de segurança antes de comprar?",
  "sec.cta.desc": "Envie-nos o seu questionário de segurança ou avaliação de fornecedores. Respondemos nós, sem camada comercial pelo meio.",
  "sec.cta.button": "Falar com a equipa",
};

export const securityTranslations: Record<Language, Dict> = { en, es, pt };

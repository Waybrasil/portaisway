/**
 * ============================================================
 *  data.js — Portais Internos · Way Concessões
 * ============================================================
 *
 *  COMO EDITAR
 *  -----------
 *  Cada base está em uma seção separada dentro do array BASES.
 *  Dentro de cada base há um array `portals` com os portais daquela base.
 *
 *  Cada portal tem 3 campos:
 *    name  → Nome exibido na tela
 *    url   → Link de acesso (substitua "#" pela URL real)
 *    icon  → Ícone Font Awesome 6  (https://fontawesome.com/icons)
 *
 *  ADICIONAR um portal:
 *    Copie uma linha existente e cole dentro do array `portals` da base desejada.
 *    Exemplo:
 *      { name: "NOVO SISTEMA", url: "https://meusite.com.br", icon: "fa-solid fa-gear" },
 *
 *  REMOVER um portal:
 *    Apague a linha correspondente dentro do array `portals` da base.
 *
 *  ADICIONAR uma nova base:
 *    Copie um bloco inteiro { id, name, description, color, icon, portals: [...] }
 *    e cole antes do fechamento do array BASES.
 *    Escolha uma cor hex exclusiva para `color`.
 *
 *  ÍCONES DISPONÍVEIS (exemplos):
 *    fa-solid fa-user-tie          → Pessoa com gravata
 *    fa-solid fa-venus-mars        → Gênero
 *    fa-solid fa-list-check        → Checklist
 *    fa-solid fa-headset           → Atendimento
 *    fa-solid fa-triangle-exclamation → Alerta / SIRIEF
 *    fa-solid fa-network-wired     → Intranet
 *    fa-solid fa-chart-line        → Gráfico
 *    fa-solid fa-file-contract     → Contrato
 *    fa-solid fa-gear              → Configurações
 *    fa-solid fa-truck             → Frota
 *    (busque mais em: https://fontawesome.com/icons?s=solid)
 * ============================================================
 */

const BASES = [

  // ============================================================
  //  WAY 262 — Concessão BR-262 MG
  // ============================================================
  {
    id: "way262",
    name: "Way 262",
    description: "Concessão BR-262 MG",
    color: "#1a56db",           // Azul
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "http://portalweb.way262.com.br/web/app/rh/portalmeurh/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://186.230.48.62:8082/",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way 262 abaixo desta linha ──
      { name: "CHECKLIST",
        url:  "http://checklist.way306.com.br:8091/CheckList_Way262/app3_Login/",
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "http://192.168.100.138:8091/Atendimentos/app2_Login/",
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way 262 ────────────────────────────

    ]
  },

  // ============================================================
  //  WAY 153 — Concessão BR-153
  // ============================================================
  {
    id: "way153",
    name: "Way 153",
    description: "Concessão BR-153",
    color: "#047857",           // Verde
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "https://portalweb.way153.com.br/web/app/RH/PortalMeuRH/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://portalweb.way153.com.br:8082",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way 153 abaixo desta linha ──
      { name: "CHECKLIST",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way 153 ────────────────────────────

    ]
  },

  // ============================================================
  //  WAY 112 — Concessão BR-112
  // ============================================================
  {
    id: "way112",
    name: "Way 112",
    description: "Concessão BR-112",
    color: "#b45309",           // Âmbar
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "https://portalweb.way112.com.br/Web/App/RH/PortalMeuRH/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://186.230.48.61:8081/",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way 112 abaixo desta linha ──
      { name: "CHECKLIST",
        url:  "http://checklist.way306.com.br:8091/CheckList/app3_Login/",
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "http://192.168.100.138:8091/Atendimentos/app2_Login/",
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way 112 ────────────────────────────

    ]
  },

  // ============================================================
  //  WAY 306 — Concessão BR-306
  // ============================================================
  {
    id: "way306",
    name: "Way 306",
    description: "Concessão BR-306",
    color: "#6d28d9",           // Roxo
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://186.230.48.61:8082/",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way 306 abaixo desta linha ──
      { name: "CHECKLIST",
        url:  "http://checklist.way306.com.br:8091/CheckList/app3_Login/",
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "http://192.168.100.138:8091/Atendimentos/app2_Login/",
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way 306 ────────────────────────────

    ]
  },

  // ============================================================
  //  WAY 364 — Concessão BR-364
  // ============================================================
  {
    id: "way364",
    name: "Way 364",
    description: "Concessão BR-364",
    color: "#be123c",           // Vermelho
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "https://portalweb.way364.com.br:8081/web/app/RH/PortalMeuRH/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://portalweb.way364.com.br:8082",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way 364 abaixo desta linha ──
      { name: "CHECKLIST",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way 364 ────────────────────────────

    ]
  },

  // ============================================================
  //  MIGRA — Grupo Migra
  // ============================================================
  {
    id: "migra",
    name: "Migra",
    description: "Grupo Migra",
    color: "#0e7490",           // Ciano
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "http://portalweb.migrabr.com.br/Web/App/RH/PortalMeuRH/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "http://186.230.48.62:8081/",
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Migra abaixo desta linha ───
      { name: "CHECKLIST",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Migra ──────────────────────────────

    ]
  },

  // ============================================================
  //  WAY BRASIL — Holding Nacional
  // ============================================================
  {
    id: "waybrasil",
    name: "Way Brasil",
    description: "Holding Nacional",
    color: "#15803d",           // Verde escuro
    icon: "fa-solid fa-road",
    portals: [

      { name: "MEU RH",
        url:  "https://portalweb.grupowaybrasil.com.br/web/app/RH/PortalMeuRH/#/login",
        icon: "fa-solid fa-user-tie" },

      { name: "GENERO",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-venus-mars" },

      // ── Adicione novos portais da Way Brasil abaixo desta linha
      { name: "CHECKLIST",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-list-check" },

      { name: "ATENDIMENTO",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-headset" },

      { name: "SIRIEF",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-triangle-exclamation" },

      { name: "INTRANET",
        url:  "#",              // TODO: inserir URL
        icon: "fa-solid fa-network-wired" },

      { name: "PULSUS",
        url:  "https://app.pulsus.mobi/login",
        icon: "fa-solid fa-mobile-screen" },
      // ── Fim dos portais da Way Brasil ─────────────────────────

    ]
  }

  // ============================================================
  //  NOVA BASE — copie o bloco acima e cole aqui se precisar
  // ============================================================

];

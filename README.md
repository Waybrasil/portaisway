# 🛣️ Portais Internos — Way Concessões

Site estático responsivo para centralizar os links de acesso aos sistemas internos de cada base operacional da Way Concessões, publicado via **GitHub Pages**.

---

## ✅ Funcionalidades Implementadas

| Recurso | Status |
|---|---|
| Listagem de bases com cards visuais | ✅ |
| Filtro rápido por base (barra de filtros) | ✅ |
| Busca em tempo real (nome do portal / base) | ✅ |
| Modal de confirmação antes de abrir link | ✅ |
| Layout responsivo (desktop / tablet / mobile) | ✅ |
| Indicador de cor exclusivo por base | ✅ |
| Contador de portais por base | ✅ |
| Stats globais (total de bases e portais) | ✅ |
| Animação de entrada dos cards | ✅ |
| Compatível com GitHub Pages (100% estático) | ✅ |

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          → Página principal
├── css/
│   └── style.css       → Estilos (responsivo, dark header, cards)
├── js/
│   ├── data.js         → Dados das bases e portais (editar aqui!)
│   └── app.js          → Lógica de renderização, filtros e modal
└── README.md
```

---

## 🏢 Bases Cadastradas

| ID | Nome | Descrição | Cor |
|---|---|---|---|
| `way262` | Way 262 | Concessão BR-262 MG | Azul |
| `way153` | Way 153 | Concessão BR-153 | Verde |
| `way112` | Way 112 | Concessão BR-112 | Âmbar |
| `way306` | Way 306 | Concessão BR-306 | Roxo |
| `way364` | Way 364 | Concessão BR-364 | Vermelho |
| `migra` | Migra | Grupo Migra | Ciano |
| `waybrasil` | Way Brasil | Holding Nacional | Verde escuro |

---

## ✏️ Como Adicionar / Editar Portais

Edite o arquivo **`js/data.js`**.

### Adicionar um portal a uma base existente

```js
// Encontre a base pelo campo `id` e adicione no array `portals`
{
  name: "Nome do Sistema",
  url:  "https://seu-sistema.interno.com",
  icon: "fa-solid fa-chart-line"   // ícone do Font Awesome 6
}
```

### Adicionar uma nova base

```js
{
  id:          "novaid",
  name:        "Nome da Base",
  description: "Descrição curta",
  color:       "#1a56db",          // cor hexadecimal exclusiva
  icon:        "fa-solid fa-road", // ícone Font Awesome 6
  portals: [
    { name: "Sistema X", url: "https://...", icon: "fa-solid fa-gear" }
  ]
}
```

---

## 🚀 Deploy no GitHub Pages

1. Faça o push de todos os arquivos para um repositório GitHub (branch `main`).
2. Vá em **Settings → Pages**.
3. Em **Source**, selecione `Deploy from a branch → main / (root)`.
4. Aguarde 1–2 minutos e acesse a URL gerada (ex.: `https://seuusuario.github.io/portais-way`).

---

## 🔮 Próximos Passos Recomendados

- [ ] Substituir todas as `url: "#"` pelas URLs reais dos sistemas internos
- [ ] Adicionar favicon personalizado (`<link rel="icon">`)
- [ ] Incluir campo `tag` nos portais (ex.: "Produção", "Homologação")
- [ ] Adicionar modo escuro (dark mode) com toggle
- [ ] Proteger acesso com autenticação simples (ex.: `htaccess` ou solução JS)
- [ ] Adicionar seção de "Acessados Recentemente" usando `localStorage`

---

*Uso interno — Way Concessões*

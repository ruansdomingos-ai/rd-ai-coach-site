# Gerador de Piadas com API Externa

## 🎭 O que é?

Um componente React interativo que gera piadas aleatórias consumindo a **JokeAPI v2** em tempo real.

## 🚀 Features

- ✅ Piadas aleatórias de múltiplos gêneros
- ✅ Suporte a dois tipos: uma linha ou duas partes
- ✅ Animações suaves com Framer Motion
- ✅ Histórico de piadas vistas
- ✅ Contador de piadas visualizadas
- ✅ Loading state com spinner animado
- ✅ Error handling robusto
- ✅ Interface responsiva
- ✅ Scroll automático do histórico

## 🏗️ Estrutura do Código

```typescript
interface Joke {
  id: number           // ID sequencial
  setup: string        // Primeira parte ou piada completa
  delivery: string     // Segunda parte (se aplicável)
  type: string         // 'twopart' ou 'single'
}
```

## 🔌 API Utilizada

**JokeAPI v2** - https://v2.jokeapi.dev

```bash
# Endpoint
GET https://v2.jokeapi.dev/joke/Any

# Resposta (duas partes)
{
  "type": "twopart",
  "setup": "Why did the chicken cross the road?",
  "delivery": "To get to the other side!",
  "error": false
}

# Resposta (uma linha)
{
  "type": "single",
  "joke": "Why did the scarecrow win an award?",
  "error": false
}
```

## 📖 Como Usar

### Opção 1: No seu projeto

```bash
# Copie o arquivo
cp components/JokeGenerator.tsx seu-projeto/components/

# Importe em qualquer página
import JokeGenerator from '@/components/JokeGenerator'

export default function Page() {
  return <JokeGenerator />
}
```

### Opção 2: Route completa

```bash
# Já está em /jokes
http://localhost:3000/jokes
```

## 🎨 Customização

### Mudar cores

```typescript
// Altere as classes Tailwind:
className="bg-gradient-to-r from-accent to-primary" // cor do botão
className="text-accent" // cor do texto destaque
```

### Filtrar por gênero

```typescript
// Altere a URL da API:
const response = await fetch('https://v2.jokeapi.dev/joke/Programming')

// Gêneros disponíveis:
// - Any (padrão, todos)
// - Programming
// - Miscellaneous
// - Knock-knock
// - Dark
// - Pun
// - Spooky
// - Christmas
```

### Adicionar filtro de conteúdo

```typescript
// Remover piadas ofensivas:
const response = await fetch(
  'https://v2.jokeapi.dev/joke/Any?safe-mode'
)
```

### Combinar gêneros

```typescript
// Programação OU Miscellaneous:
const response = await fetch(
  'https://v2.jokeapi.dev/joke/Programming,Miscellaneous'
)
```

## 📊 Estados da Aplicação

### 1. Inicial
```
Botão "Gerar Piada Aleatória" ativo
Nenhuma piada mostrada
Histórico vazio
```

### 2. Carregando
```
Botão desabilitado com spinner
"Carregando piada..."
```

### 3. Sucesso
```
Piada exibida com animação
Histórico atualizado
Contador incrementado
```

### 4. Erro
```
Mensagem de erro em vermelho
Botão continua ativo para tentar novamente
```

## 🔄 Fluxo de Dados

```
Clique no botão
    ↓
setLoading(true)
    ↓
Fetch API (JokeAPI)
    ↓
Processar resposta
    ↓
Criar objeto Joke
    ↓
setJoke(newJoke)
setJokes([...jokes])
setJokeCount(count + 1)
    ↓
setLoading(false)
    ↓
Render atualizado
```

## 🎯 Casos de Uso

1. **Blog/Site de Humor** - Widget de piadas aleatórias
2. **App Social** - Compartilhar piadas com amigos
3. **Learning Project** - Aprender sobre APIs externas
4. **Comedy Website** - Gerador contínuo de conteúdo
5. **Chatbot** - Integrar piadas em bot do Discord

## 💡 Extensões Possíveis

### 1. Compartilhar piada
```typescript
const shareJoke = () => {
  const text = `${joke.setup} ${joke.delivery}`
  navigator.share({ text })
}
```

### 2. Favoritos
```typescript
const [favorites, setFavorites] = useState<Joke[]>([])
const addFavorite = () => setFavorites([...favorites, joke])
```

### 3. Copy para clipboard
```typescript
const copyToClipboard = () => {
  navigator.clipboard.writeText(joke.setup + ' ' + joke.delivery)
}
```

### 4. Salvar em localStorage
```typescript
useEffect(() => {
  localStorage.setItem('jokes', JSON.stringify(jokes))
}, [jokes])
```

### 5. Integrar com banco de dados
```typescript
const saveFavorite = async (joke: Joke) => {
  await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(joke)
  })
}
```

## 🐛 Troubleshooting

### "Error na conexão"
- Verifique sua internet
- Verifique se a API está online
- Tente em outro navegador

### Piadas não aparecem
- Verifique o console (F12)
- Confirme que a URL da API está correta
- Teste a API diretamente: https://v2.jokeapi.dev/joke/Any

### Performance lenta
- Limite o tamanho do histórico (max 20 piadas)
- Use virtualização para listas longas
- Implemente debounce

## 📱 Responsividade

✅ Mobile (320px+)
✅ Tablet (768px+)
✅ Desktop (1024px+)

## 🎬 Animações

- Fade-in na entrada
- Scale ao renderizar piada
- Bounce do botão hover
- Slide-up do histórico
- Stagger dos itens da lista

## 📈 Performance

- **Tempo de fetch**: ~200-500ms
- **Tamanho da resposta**: ~1-2KB
- **Bundle size**: ~5KB (componente)
- **Sem dependências externas** (além de React + Framer Motion)

## 🔐 Segurança

✅ Nenhum dado sensível armazenado
✅ API pública sem autenticação necessária
✅ CORS habilitado na JokeAPI
✅ Validação de resposta antes de render

## 🚀 Deploy

```bash
# Pronto para Vercel, Netlify, etc
npm run build
npm start

# Ou direto no Vercel
git push
# Vercel detecta automaticamente
```

## 📚 Recursos

- [JokeAPI Docs](https://jokeapi.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [React Hooks](https://react.dev/reference/react)

## 💬 Suporte

Tem dúvidas? Verifique:
1. Console do navegador (F12)
2. Network tab para ver requisição
3. Teste a API diretamente
4. Confirme que está usando HTTPS

---

**Desenvolvido com ❤️ para trazer risadas!** 😂

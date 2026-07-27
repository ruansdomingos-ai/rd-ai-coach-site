# RD AI COACH - Guia Rápido

## 🚀 Quick Start (5 minutos)

```bash
# 1. Clone
git clone https://github.com/ruansdomingos-ai/rd-ai-coach-site.git
cd rd-ai-coach-site

# 2. Instale
npm install

# 3. Rode
npm run dev

# 4. Abra
http://localhost:3000
```

## 📋 O que fazer depois

### 1. Personalize o WhatsApp
Edite `components/sections/Hero.tsx` - linha com `window.open('https://wa.me/...`

### 2. Adicione seu Calendly
Edite qualquer arquivo com `handleCalendly()` e troque a URL

### 3. Mude as cores (opcional)
Edite `tailwind.config.ts` no objeto `colors:`

### 4. Deploy na Vercel
```bash
git push origin main
# Depois acesse vercel.com e conecte o repositório
```

## 🎨 Seções do Site

| Seção | Arquivo | Descrição |
|-------|---------|----------|
| Hero | `components/sections/Hero.tsx` | Topo com título e mockup |
| Problemas | `components/sections/Problem.tsx` | 3 cards de pain points |
| App Demo | `components/sections/DemoApp.tsx` | Simulação do app mobile |
| Dashboard | `components/sections/DemoDashboard.tsx` | Painel do gestor |
| Calculadora | `components/sections/Calculator.tsx` | ROI em tempo real |
| Footer | `components/sections/Footer.tsx` | Rodapé |

## 📊 Componentes Interativos

### MobileAppDemo (`components/MobileAppDemo.tsx`)
- 4 abas: Home, Treino, Mensagens, Plano
- Dados fictícios realistas
- Animações ao trocar aba

### DashboardDemo (`components/DashboardDemo.tsx`)
- 4 cards com stats
- Gráfico com Recharts
- Lista de alunos em risco
- Botões de ação

### ROICalculator (`components/ROICalculator.tsx`)
- 3 sliders: Alunos, Ticket, Churn Rate
- Cálculos em tempo real
- 5 cards com resultados
- Animações aos mostrar resultados

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor (porta 3000)

# Produção
npm run build        # Build otimizado
npm start            # Inicia produção localmente

# Linting
npm run lint         # Verifica erros

# Deploy
git push origin main # Vercel detecta automaticamente
```

## 🎯 Checklist Antes de Ir Live

- [ ] WhatsApp link atualizado
- [ ] Calendly link atualizado
- [ ] Testado em 3 celulares
- [ ] Testado em 2 navegadores
- [ ] Calculadora testada
- [ ] Domínio configurado
- [ ] Analytics configurado (opcional)

## 📱 Testes de Mobile

```bash
# Teste responsividade
npm run dev
# Abra DevTools (F12)
# Clique em Toggle device toolbar (Ctrl+Shift+M)
# Teste em iPhone 12, iPhone 13, Samsung Galaxy
```

## 🐛 Problemas Comuns

**Port 3000 já em uso?**
```bash
npm run dev -- -p 3001
```

**Mudanças não aparecem?**
```bash
Ctrl+C (parar)
npm run dev (reiniciar)
```

**Módulo não encontrado?**
```bash
rm -rf node_modules
npm install
```

## ���� Dicas

1. Use `useInView` do Framer Motion para animações ao scroll
2. Todos os links com `target="_blank"` têm `rel="noopener"`
3. Cores estão em `tailwind.config.ts`
4. Fontes em `app/layout.tsx`
5. Gradientes em `tailwind.config.ts`

## 📞 Suporte

Dúvidas? 
- Email: contato@rdai.com
- WhatsApp: (31) 97364-9974

---

**Pronto? Deploy agora! 🚀**

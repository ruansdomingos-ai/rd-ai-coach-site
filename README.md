# RD AI COACH - Website de Apresentação

Site interativo para apresentar o RD AI COACH para donos de academia. Construído com Next.js 14, TailwindCSS, Shadcn/UI e Framer Motion.

## 🚀 Características

- ✅ **Next.js 14** com App Router
- ✅ **TailwindCSS** para styling
- ✅ **Framer Motion** para animações suaves
- ✅ **Shadcn/UI** para componentes acessíveis
- ✅ **Responsivo** para mobile/tablet/desktop
- ✅ **Calculadora de ROI** funcional com cálculos reais
- ✅ **Demo Interativa** do app mobile
- ✅ **Dashboard** simulado com gráficos
- ✅ **Pronto para Vercel**

## 📋 Seções do Site

### 1. Hero
- Título principal com destaque em IA
- Sub-título explicativo
- 2 CTAs: "Agendar Demonstração" e "Ver Demo do App"
- Imagem mockup do celular
- Fundo com gradiente animado

### 2. O Problema e a Solução
- 3 cards com ícones animados
- Descrição dos desafios (Perde Aluno, Perde Horário, Perde Tempo)
- Card central com a solução

### 3. Demo do App (Visão do Aluno)
- Mockup de celular iPhone funcional
- 4 abas interativas: Home, Treino, Mensagens, Plano
- Dados fictícios mas realistas
- Animações suaves ao trocar de aba

### 4. Demo do Dashboard (Visão do Gestor)
- Grid com 4 cards principais
- Integração com Recharts para gráficos
- Dados fictícios simulando situação real
- Interações hover

### 5. Calculadora de ROI
- 3 sliders: Alunos Ativos, Ticket Médio, Taxa de Cancelamento
- Cálculos em tempo real
- 5 resultados animados: Perda Mensal, Perda Inadimplência, Perda Anual, Recuperação, ROI
- CTA para agendar demonstração

### 6. Footer
- Links de navegação
- Redes sociais
- Copyright

## 🛠️ Instalação Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/ruansdomingos-ai/rd-ai-coach-site.git
cd rd-ai-coach-site
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure variáveis de ambiente** (opcional)
Crie um arquivo `.env.local`:
```bash
# Seu Calendly URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/seu-url
```

4. **Rode o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Abra no navegador**
```
http://localhost:3000
```

## 🏗️ Estrutura de Pastas

```
rd-ai-coach-site/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Seção Hero
│   │   ├── Problem.tsx     # Seção de Problemas
│   │   ├── DemoApp.tsx     # Seção de Demo do App
│   │   ├── DemoDashboard.tsx # Seção do Dashboard
│   │   ├── Calculator.tsx  # Seção da Calculadora
│   │   └── Footer.tsx      # Rodapé
│   ├── PhoneMockup.tsx     # Mockup do celular (estático)
│   ├── MobileAppDemo.tsx   # Demo interativa do app
│   ├── DashboardDemo.tsx   # Demo interativa do dashboard
│   └── ROICalculator.tsx   # Calculadora de ROI
├── public/
│   └── favicon.ico
├── tailwind.config.ts      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
├── next.config.js          # Configuração Next.js
├── package.json            # Dependências
└── README.md               # Este arquivo
```

## 🎨 Cores

- **Roxo Primário**: `#6D28D9`
- **Preto**: `#0A0A0A`
- **Acento**: `#8B5CF6`
- **Cinza Secundário**: `#1F2937`

## 📦 Build e Deploy

### Build Local
```bash
npm run build
npm run start
```

### Deploy na Vercel

1. **Push para GitHub**
```bash
git add .
git commit -m "Primeira versão do site"
git push origin main
```

2. **Conecte no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione o repositório `rd-ai-coach-site`
   - Clique em "Deploy"

3. **Configure domínio personalizado** (opcional)
   - No painel do Vercel, vá para "Domains"
   - Adicione seu domínio
   - Configure os DNS records

## 🔧 Customização

### Mudar WhatsApp Link
Edite o arquivo `components/sections/Hero.tsx`:
```typescript
const handleCalendly = () => {
  window.open('https://wa.me/5531973649974?text=Oi%20Ruan', '_blank')
}
```

### Mudar Calendly Link
Edite qualquer seção com:
```typescript
window.open('https://seu-calendly-url.com', '_blank')
```

### Mudar Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: '#6D28D9',  // Roxo
  dark: '#0A0A0A',     // Preto
  secondary: '#1F2937', // Cinza
  accent: '#8B5CF6',   // Acento
}
```

## 📊 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animações
- **Recharts** - Gráficos
- **Radix UI** - Componentes acessíveis
- **Vercel** - Hosting e deployment

## 📱 Responsividade

O site é totalmente responsivo:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

Testado em:
- ✅ iPhone 12/13/14/15
- ✅ Samsung Galaxy
- ✅ iPad
- ✅ Chrome, Firefox, Safari

## 🎯 Otimizações

- ✅ Code splitting automático
- ✅ Image optimization
- ✅ CSS minificado
- ✅ JavaScript minificado
- ✅ Lazy loading de componentes
- ✅ SEO-friendly

## 📝 Checklist de Deploy

Antes de ir para produção:

- [ ] Atualizar WhatsApp link
- [ ] Atualizar Calendly link
- [ ] Revisar copy (textos)
- [ ] Testar em mobile
- [ ] Testar calculadora
- [ ] Verificar animações
- [ ] Configurar domínio
- [ ] Adicionar analytics (GA4/Hotjar)
- [ ] Testar formulários
- [ ] Backup do repositório

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Erro: "Tailwind not working"
```bash
npm run build
npm run dev
```

## 📚 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Recharts Docs](https://recharts.org/)

## 👨‍💻 Autor

**Ruan S. Domingos**
- Email: contato@rdai.com
- WhatsApp: (31) 97364-9974
- GitHub: [@ruansdomingos-ai](https://github.com/ruansdomingos-ai)

## 📄 Licença

MIT - Livre para usar em qualquer projeto

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Precisa de ajuda?

- 📧 Email: contato@rdai.com
- 📱 WhatsApp: (31) 97364-9974
- 🐙 GitHub Issues: [Abrir issue](https://github.com/ruansdomingos-ai/rd-ai-coach-site/issues)

---

**Desenvolvido com ❤️ para aumentar o faturamento de academias**

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/06f10c05-a160-4c52-8dec-a21835005e0c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/06f10c05-a160-4c52-8dec-a21835005e0c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/06f10c05-a160-4c52-8dec-a21835005e0c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Site Luiz Almeida Eventos

Um site moderno para o negócio de eventos corporativos e institucionais de Luiz Almeida.

## Tecnologias Utilizadas

- Vite
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI

## Deploy

O site está disponível online através do Netlify:

- **URL de Produção**: [https://luiz-almeida-eventos.netlify.app](https://luiz-almeida-eventos.netlify.app)

## Instalação e Execução

Para executar o projeto localmente:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build
```

## Configuração dos Vídeos

Para que os vídeos funcionem corretamente, siga estas instruções:

1. Crie os seguintes vídeos na pasta `public/videos/`:
   - `hero-video.mp4` - Vídeo de fundo da seção hero
   - `services-video.mp4` - Vídeo da seção de serviços
   - `portfolio-1.mp4` a `portfolio-7.mp4` - Vídeos do portfólio

2. Recomendações para os vídeos:
   - Use formatos MP4 com codificação H.264 para melhor compatibilidade
   - Otimize os vídeos para web (tamanho recomendado: até 5MB por vídeo)
   - Resolução recomendada: 1280x720 (HD) ou 1920x1080 (Full HD)
   - Duração recomendada: 10-30 segundos por vídeo

3. Se os vídeos não forem adicionados:
   - O site continuará funcionando normalmente
   - Imagens estáticas do Unsplash serão exibidas como fallback
   - Não é necessário adicionar essas imagens manualmente, elas são carregadas automaticamente

4. Para adicionar seus próprios vídeos:
   - Mantenha os nomes de arquivo consistentes conforme indicado acima
   - Ou altere os caminhos nos componentes correspondentes

## Configuração do EmailJS

Para que o formulário de contato envie e-mails para o endereço configurado, siga estas instruções:

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)

2. Crie um serviço de e-mail (por exemplo, Gmail, Outlook, etc.)

3. Crie um template de e-mail com os seguintes parâmetros:
   - `from_name`: Nome do remetente
   - `from_email`: E-mail do remetente
   - `phone`: Telefone do remetente
   - `event_type`: Tipo de evento
   - `message`: Mensagem do remetente
   - `to_email`: E-mail do destinatário (contato.lhalmeida@gmail.com)

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

5. Substitua os valores pelas suas credenciais do EmailJS:
   - `seu_service_id`: ID do serviço criado no EmailJS
   - `seu_template_id`: ID do template criado no EmailJS
   - `sua_public_key`: Chave pública da sua conta EmailJS

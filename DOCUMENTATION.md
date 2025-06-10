# Empire Corporation - Website Documentation

## Visão Geral

Este documento fornece instruções detalhadas para gerenciar e atualizar o site da Empire Corporation. O site foi desenvolvido usando Next.js e Tailwind CSS, com foco em geração de leads para serviços de cobertura/telhados.

## Estrutura do Site

O site contém as seguintes páginas principais:

1. **Home** - Página inicial com seções de destaque, serviços e formulário de contato
2. **About Us** - Informações sobre a empresa, história, missão e valores
3. **Services** - Visão geral dos serviços oferecidos
   - Páginas individuais para cada serviço específico
4. **Our Work** - Galeria de projetos realizados (preparada para adição de fotos)
5. **Testimonials** - Depoimentos de clientes
6. **Contact** - Informações de contato e formulário para solicitação de orçamentos

## Como Hospedar o Site na Hostinger

### Requisitos

- Conta na Hostinger com hospedagem ativa
- Acesso ao painel de controle da Hostinger
- Domínio configurado (empireccorp.com)

### Passos para Deploy

1. **Acesse o Painel de Controle da Hostinger**
   - Faça login na sua conta Hostinger
   - Navegue até o painel de hospedagem

2. **Configure o Node.js**
   - Verifique se sua hospedagem suporta Node.js
   - Configure a versão do Node.js para 18.x ou superior

3. **Upload dos Arquivos**
   - Opção 1: Upload via FTP
     - Use um cliente FTP (como FileZilla)
     - Conecte-se ao seu servidor usando as credenciais fornecidas pela Hostinger
     - Faça upload da pasta `.next`, `public`, `package.json` e `next.config.js` para o diretório raiz

   - Opção 2: Upload via Painel de Controle
     - Compacte os arquivos em um arquivo ZIP
     - Faça upload do arquivo ZIP através do gerenciador de arquivos da Hostinger
     - Extraia os arquivos no diretório raiz

4. **Configuração do Ambiente**
   - Crie um arquivo `.env` na raiz do projeto (se necessário)
   - Configure as variáveis de ambiente necessárias

5. **Instalação de Dependências e Inicialização**
   - Acesse o terminal SSH da Hostinger
   - Navegue até o diretório do projeto
   - Execute `npm install --production`
   - Execute `npm run start` ou configure o script de inicialização conforme as instruções da Hostinger

6. **Configuração de Domínio**
   - No painel da Hostinger, configure o domínio empireccorp.com para apontar para o diretório do site

## Como Atualizar o Conteúdo do Site

### Adicionando Fotos de Trabalhos

Para adicionar novas fotos à galeria "Our Work":

1. **Prepare as Imagens**
   - Redimensione as imagens para um tamanho adequado (recomendado: 1200x800 pixels)
   - Otimize as imagens para web (formatos .jpg ou .webp)
   - Nomeie os arquivos de forma descritiva (ex: "residential-roof-boston-2025.jpg")

2. **Upload das Imagens**
   - Faça upload das imagens para a pasta `/public/images/projects/`
   - Use o gerenciador de arquivos da Hostinger ou FTP

3. **Atualização do Código**
   - Edite o arquivo `/src/app/our-work/page.tsx`
   - Localize o array `projects` no início do arquivo
   - Adicione um novo objeto ao array seguindo o formato existente:
   ```javascript
   {
     id: 7, // Incremente o ID
     title: 'Título do Projeto',
     location: 'Localização, Estado',
     description: 'Descrição detalhada do projeto realizado.',
     image: '/images/projects/nome-do-arquivo.jpg', // Caminho para a imagem
   }
   ```
   - Substitua o placeholder pela referência à imagem real:
   ```javascript
   <Image 
     src={project.image}
     alt={project.title}
     layout="fill"
     objectFit="cover"
   />
   ```

### Adicionando Depoimentos

Para adicionar novos depoimentos de clientes:

1. **Edite o arquivo `/src/app/testimonials/page.tsx`**
2. **Localize o array `testimonials` no início do arquivo**
3. **Adicione um novo objeto ao array seguindo o formato existente:**
   ```javascript
   {
     id: 5, // Incremente o ID
     name: 'Nome do Cliente',
     location: 'Cidade, Estado',
     type: 'Tipo de Cliente (ex: Residencial, Comercial)',
     quote: 'Texto do depoimento do cliente.',
     imagePlaceholder: 'Client Avatar', // Ou caminho para foto real
   }
   ```

### Atualizando Informações de Contato

Para atualizar informações de contato:

1. **Edite os seguintes arquivos:**
   - `/src/components/Header.tsx` - Para o número de telefone no cabeçalho
   - `/src/app/contact/page.tsx` - Para informações na página de contato
   - `/src/components/Footer.tsx` - Para informações no rodapé

2. **Localize as informações de contato e substitua com os novos dados**

## Gerenciamento de Leads

O site está configurado para capturar leads através dos formulários de contato. Atualmente, os dados são enviados para o endpoint `/api/contact`, que pode ser configurado para:

1. **Enviar E-mails de Notificação**
   - Edite o arquivo `/src/app/api/contact/route.ts`
   - Configure um serviço de envio de e-mails como SendGrid, Resend ou similar
   - Adicione suas credenciais de API e configure o destinatário

2. **Integração com CRM**
   - O endpoint pode ser modificado para enviar dados para um CRM
   - Adicione a lógica de integração no arquivo `/src/app/api/contact/route.ts`

3. **Armazenamento em Banco de Dados**
   - Para uma solução mais robusta, configure um banco de dados
   - Modifique o endpoint para salvar os dados no banco

## Manutenção e Atualizações

### Atualizações de Segurança

Recomenda-se manter as dependências do projeto atualizadas:

1. **Acesse o diretório do projeto via SSH**
2. **Execute `npm outdated` para verificar pacotes desatualizados**
3. **Execute `npm update` para atualizar pacotes**
4. **Reinicie o servidor após atualizações importantes**

### Backup Regular

Recomenda-se fazer backup regular do site:

1. **Backup de Arquivos**
   - Use o painel da Hostinger para criar backups
   - Ou faça download via FTP de todo o diretório do site

2. **Backup de Dados**
   - Se estiver usando banco de dados, faça backup regularmente

## Suporte e Contato

Para suporte técnico ou dúvidas sobre o site, entre em contato com o desenvolvedor.

---

© 2025 Empire Corporation. Todos os direitos reservados.

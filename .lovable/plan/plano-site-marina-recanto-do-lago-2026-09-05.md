# Plano — Site Marina Recanto do Lago

Site institucional de **página única** para a Marina Recanto do Lago (Caldas Novas, GO), inspirado no estilo de brmarinas.com.br: visual náutico elegante com fotos de impacto, em **português e inglês** com seletor de idioma.

## Público-alvo
Donos de embarcações e turistas do lago/represa que procuram guarda de barcos e hospedagem.

## Estrutura da página (âncoras)
1. **Hero** — foto aérea do lago em tela cheia, "Bem-vindo à Marina Recanto do Lago", chamada "Guarda de barcos e hotelaria à beira do lago", botões: "Fale no WhatsApp" e "Nossos serviços".
2. **A Marina** — texto institucional + foto; destaques em números (vagas, anos de atuação, capacidade).
3. **Serviços** — cards com ícones:
   - Guarda de barcos (berços e pátio seco)
   - Lançamento e retirada de embarcações
   - Hotelaria / hospedagem à beira do lago
   - Segurança e vigilância 24h
   (lista de serviços detalhada sujeita a confirmação — textos serão genéricos e editáveis)
4. **Galeria** — grade de fotos do lago/marina (imagens geradas como placeholder; trocar pelas fotos reais do Instagram @marinarecantodolago quando disponíveis).
5. **Hotelaria** — seção dedicada com fotos e texto sobre a hospedagem + CTA de reserva via WhatsApp.
6. **Localização** — endereço (Av. das Garças Qd. D, Lt. 10, Recanto das Garças, Caldas Novas – GO, 75690-000) com botão "Ver no Google Maps".
7. **Contato / Rodapé** — telefones com links clicáveis: (62) 99902-1112 e (64) 99279-3756 (WhatsApp), link do Instagram, endereço e formulário simples de contato (mailto).

## Design
- **Logo enviada pelo usuário** (âncora em hexágono, degradê azul→verde, texto cinza-escuro) usada no topo, no rodapé e como base do favicon.
- Paleta derivada da logo: azul-petróleo/verde-água em degradê como cores de destaque, cinza-escuro para textos, fundo claro — visual náutico elegante, com moldura de destaque no hero (referência BR Marinas), mas na identidade da marca Recanto do Lago.
- Seções alternando fundo claro/foto, animações suaves de entrada ao rolar.
- Totalmente responsivo (celular em primeiro lugar), botão flutuante de WhatsApp.

## Bilíngue PT/EN
- Seletor de idioma (bandeiras PT/EN) no topo, conteúdo PT-BR e EN traduzidos via dicionário local (sem backend). Português como padrão.

## Imagens
- ~6 imagens geradas por IA (foto aérea de lago com barcos, píer, barco guardado em pátio, quarto de hospedagem à beira do lago etc.) como placeholder até receber fotos reais.

## Técnico
- Rota `src/routes/index.tsx` com componentes em `src/components/`.
- SEO: head() próprio (título, description, og tags) em PT.
- Sem backend/banco de dados neste momento — conteúdo estático editável.

## Fora de escopo (futuro, se quiser)
- Reservas online com calendário e pagamento
- Área do cliente / boletos
- Blog ou notícias

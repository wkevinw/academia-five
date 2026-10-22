/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DA ACADEMIA FIVE
 * ============================================================
 *  Todos os textos, contatos, planos, modalidades e links da
 *  landing page estão aqui. Altere este arquivo e a página
 *  inteira é atualizada, sem procurar em outros lugares.
 *
 *  Valores entre colchetes ou zerados são PLACEHOLDERS:
 *  substitua pelos dados oficiais antes de publicar.
 * ============================================================
 */

export const brand = {
  name: 'Academia Five',
  shortName: 'Five',
  // Arquivo original da logomarca. Coloque o arquivo em /public
  // com este nome (ou altere o caminho). Deixe vazio ('') para
  // exibir o nome em texto até a logo ser adicionada.
  logo: '',
  logoAlt: 'Academia Five',
  // Largura x altura reais do arquivo da logo (evita "pulos" no carregamento)
  logoWidth: 160,
  logoHeight: 48,
};

export const seo = {
  title: 'Academia Five | Musculação, funcional e personal trainer',
  description:
    'Treine, evolua e supere seus limites na Academia Five. Estrutura moderna, professores qualificados e planos para todos os objetivos. Agende sua aula experimental.',
  url: '', // ex.: 'https://www.academiafive.com.br'
  ogImage: '', // ex.: '/images/og.jpg' (1200x630)
  themeColor: '#121316',
  locale: 'pt_BR',
};

export const contact = {
  // Somente números, com DDI + DDD. Ex.: '5511999999999'.
  // Enquanto vazio, os botões de WhatsApp levam para a seção de contato.
  whatsapp: '',
  whatsappDisplay: '(00) 00000-0000',
  whatsappMessage: 'Olá! Vim pelo site e quero saber mais sobre a Academia Five.',
  phone: '', // ex.: '+551130000000'
  phoneDisplay: '(00) 0000-0000',
  email: '',
  instagram: '', // ex.: 'https://instagram.com/usuario'
  instagramDisplay: '@instagram_da_five',
  facebook: '',
  tiktok: '',
  address: {
    street: 'Rua [a definir], 000',
    district: 'Bairro',
    city: 'Cidade',
    state: 'UF',
    zip: '00000-000',
  },
  // Link "Como chegar" (Google Maps) e URL de incorporação do mapa.
  // No Google Maps: Compartilhar > Incorporar um mapa > copiar o "src" do iframe.
  mapsLink: '',
  mapsEmbed: '',
  hours: [
    { days: 'Segunda a sexta', time: '00h às 00h' },
    { days: 'Sábado', time: '00h às 00h' },
    { days: 'Domingo e feriados', time: '00h às 00h' },
  ],
};

/**
 * Destinos dos botões.
 * - '#secao'   → rola até a seção da página
 * - 'whatsapp' → abre o WhatsApp com a mensagem definida (ou a do contato)
 * - 'https://…' → link externo
 */
export const ctas = {
  enroll: { label: 'Matricule-se', href: 'whatsapp', message: 'Olá! Quero me matricular na Academia Five.' },
  start: { label: 'Comece agora', href: 'whatsapp', message: 'Olá! Quero começar a treinar na Academia Five.' },
  plans: { label: 'Conheça nossos planos', href: '#planos' },
  contact: { label: 'Fale conosco', href: '#contato' },
  visit: { label: 'Venha treinar', href: '#contato' },
  trial: { label: 'Faça uma aula experimental', href: 'whatsapp', message: 'Olá! Quero agendar uma aula experimental na Academia Five.' },
  ctaEnroll: { label: 'Quero me matricular', href: 'whatsapp', message: 'Olá! Quero me matricular na Academia Five.' },
  ctaWhatsapp: { label: 'Falar no WhatsApp', href: 'whatsapp' },
};

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Academia', href: '#academia' },
  { label: 'Planos', href: '#planos' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  eyebrow: 'Academia Five',
  // O trecho entre [colchetes] recebe o destaque em laranja.
  title: 'Seu melhor resultado [começa aqui.]',
  subtitle: 'Treine, evolua e supere seus limites na Academia Five.',
  // Foto de fundo (recomendado: 2400px de largura, JPG/WebP ~250 KB).
  // Ex.: '/images/hero.jpg'. Vazio = fundo gráfico provisório.
  image: '',
  imageAlt: 'Aluno treinando na Academia Five',
  highlights: ['Aula experimental', 'Professores qualificados', 'Planos flexíveis'],
};

export const about = {
  eyebrow: 'A Academia',
  title: 'Por que treinar na [Five?]',
  text:
    'Um espaço pensado para quem quer resultado de verdade: estrutura completa, equipe presente e um ambiente que dá vontade de voltar todos os dias.',
  image: '', // ex.: '/images/academia.jpg'
  imageAlt: 'Ambiente interno da Academia Five',
  features: [
    { icon: 'dumbbell', title: 'Equipamentos de qualidade', text: 'Aparelhos modernos e bem conservados para treinar com segurança e eficiência.' },
    { icon: 'spark', title: 'Ambiente moderno', text: 'Espaço amplo, iluminado e organizado para você focar só no treino.' },
    { icon: 'medal', title: 'Professores qualificados', text: 'Equipe capacitada para orientar a execução e ajustar seu treino.' },
    { icon: 'target', title: 'Treinos para cada objetivo', text: 'Hipertrofia, emagrecimento, condicionamento ou saúde: o caminho é seu.' },
    { icon: 'chart', title: 'Acompanhamento profissional', text: 'Evolução acompanhada de perto para você não parar no meio do caminho.' },
    { icon: 'heart', title: 'Ambiente motivador', text: 'Energia boa, música certa e gente com o mesmo foco que você.' },
  ],
};

export const plans = {
  eyebrow: 'Planos',
  title: 'Escolha o plano [ideal para você]',
  subtitle: 'Opções para diferentes rotinas e objetivos. Fale com a gente e encontre o melhor formato.',
  currency: 'R$',
  // Observação exibida abaixo dos cards
  note: 'Valores e benefícios demonstrativos. Consulte as condições vigentes na recepção ou pelo WhatsApp.',
  items: [
    {
      name: 'Mensal',
      price: '00,00',
      period: '/mês',
      description: 'Liberdade para começar sem compromisso longo.',
      benefits: ['Acesso à área de musculação', 'Avaliação inicial', 'Orientação dos professores'],
      featured: false,
      cta: { label: 'Matricule-se', href: 'whatsapp', message: 'Olá! Tenho interesse no plano Mensal.' },
    },
    {
      name: 'Semestral',
      price: '00,00',
      period: '/mês',
      description: 'Constância para ver o resultado aparecer.',
      benefits: ['Tudo do plano Mensal', 'Reavaliação periódica', 'Acesso às modalidades coletivas'],
      featured: true,
      badge: 'Mais escolhido',
      cta: { label: 'Matricule-se', href: 'whatsapp', message: 'Olá! Tenho interesse no plano Semestral.' },
    },
    {
      name: 'Anual',
      price: '00,00',
      period: '/mês',
      description: 'O melhor custo-benefício para quem leva a sério.',
      benefits: ['Tudo do plano Semestral', 'Condição especial de valor', 'Benefícios exclusivos para alunos'],
      featured: false,
      cta: { label: 'Matricule-se', href: 'whatsapp', message: 'Olá! Tenho interesse no plano Anual.' },
    },
  ],
};

/**
 * Modalidades (DEMONSTRATIVAS). Para adicionar, remover ou reordenar,
 * edite apenas esta lista. `image` é opcional (ex.: '/images/musculacao.jpg').
 * `featured: true` exibe a modalidade em card grande com foto (ideal: 2);
 * as demais aparecem em cards compactos logo abaixo.
 */
export const modalities = {
  eyebrow: 'Modalidades',
  title: 'Treine do [seu jeito.]',
  subtitle: 'Escolha a atividade que combina com você ou monte sua rotina misturando tudo.',
  items: [
    { name: 'Musculação', featured: true, tag: 'Peso livre e máquinas', icon: 'dumbbell', text: 'Força, hipertrofia e definição com orientação em todos os treinos.', image: '' },
    { name: 'Treinamento funcional', featured: true, tag: 'Condicionamento', icon: 'bolt', text: 'Movimentos dinâmicos para condicionamento, agilidade e resistência.', image: '' },
    { name: 'Personal Trainer', icon: 'user', text: 'Atenção individual e treino planejado de acordo com seu objetivo.', image: '' },
    { name: 'Cardio', icon: 'heart', text: 'Esteiras, bikes e elípticos para queimar calorias e ganhar fôlego.', image: '' },
    { name: 'Treino de força', icon: 'medal', text: 'Foco em cargas e técnica para evoluir em performance.', image: '' },
    { name: 'Outras modalidades', icon: 'spark', text: 'Novas atividades em breve. Pergunte na recepção.', image: '' },
  ],
};

/**
 * Fotos da estrutura. Substitua `image` pelos arquivos reais em /public/images.
 * `size`: 'large' | 'tall' | 'wide' | 'full' | '' (controla o mosaico no desktop).
 */
export const facilities = {
  eyebrow: 'Estrutura',
  title: 'Uma estrutura preparada para [sua evolução.]',
  subtitle: 'Cada ambiente da Five foi pensado para você treinar com conforto, segurança e motivação.',
  items: [
    { label: 'Área de musculação', image: '', size: 'large' },
    { label: 'Equipamentos', image: '', size: 'tall' },
    { label: 'Espaço funcional', image: '', size: '' },
    { label: 'Recepção', image: '', size: '' },
    { label: 'Ambiente interno', image: '', size: 'full' },
  ],
};

/**
 * UNIDADES. Para adicionar, remover ou editar uma unidade, altere só esta lista.
 * Textos entre [colchetes] são PLACEHOLDERS: troque pelos dados reais.
 *
 * - status: 'open' (em funcionamento) | 'soon' (em implantação)
 * - image: foto da fachada, ex.: '/images/unidade-01.jpg' (1600 x 1000 px, horizontal)
 * - mapsUrl: link do Google Maps da unidade. Vazio = botão "Ver localização" desativado.
 * - cta: destino do botão "Conhecer unidade" (mesmo formato de `ctas`)
 * - Unidade 'soon': se o endereço ainda não puder ser divulgado, deixe
 *   `address` vazio e preencha só `region` (bairro/região).
 */
export const units = {
  eyebrow: 'Unidades',
  title: 'Encontre a Five [mais perto de você.]',
  subtitle: 'Escolha sua unidade e venha fazer parte da Academia Five.',
  items: [
    {
      label: 'Unidade 01',
      status: 'open',
      name: '[Nome da unidade 01]',
      address: '[Rua/Avenida, número]',
      neighborhood: '[Bairro]',
      city: '[Cidade]',
      state: 'MG',
      hours: '[Horário de funcionamento]',
      image: '',
      mapsUrl: '',
      cta: { label: 'Conhecer unidade', href: 'whatsapp', message: 'Olá! Quero conhecer a Unidade 01 da Academia Five.' },
    },
    {
      label: 'Unidade 02',
      status: 'open',
      name: '[Nome da unidade 02]',
      address: '[Rua/Avenida, número]',
      neighborhood: '[Bairro]',
      city: '[Cidade]',
      state: 'MG',
      hours: '[Horário de funcionamento]',
      image: '',
      mapsUrl: '',
      cta: { label: 'Conhecer unidade', href: 'whatsapp', message: 'Olá! Quero conhecer a Unidade 02 da Academia Five.' },
    },
    {
      label: 'Em breve',
      status: 'soon',
      badge: 'Nova Five',
      name: '[Nome da nova unidade]',
      headline: 'Uma nova Five está chegando.',
      text: 'Estamos preparando mais um espaço para você treinar, evoluir e superar seus limites.',
      address: '',
      region: '[Região/Bairro da nova unidade]',
      city: '[Cidade]',
      state: 'MG',
      image: '', // foto futura da fachada ou imagem da obra
      mapsUrl: '',
      cta: { label: 'Quero saber quando inaugurar', href: 'whatsapp', message: 'Olá! Quero ser avisado(a) quando a nova unidade da Academia Five inaugurar.' },
    },
  ],
};

export const ctaBanner = {
  title: 'Bora treinar?',
  text: 'Venha conhecer a Academia Five e dê o próximo passo para alcançar seus objetivos.',
};

export const contactSection = {
  eyebrow: 'Contato',
  title: 'Fale com a [Five]',
  subtitle: 'Tire dúvidas, agende sua aula experimental ou venha nos fazer uma visita.',
};

export const footer = {
  tagline: 'Treine, evolua e supere seus limites.',
};

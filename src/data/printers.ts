
export interface PrinterSpec {
  label: string;
  value: string;
}

export interface Printer {
  id: string;
  model: string;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  specs: PrinterSpec[];
}

export const PRINTERS: Printer[] = [
  {
    id: "bm5110adw",
    model: "BM5110ADW",
    title: "BM5110ADW multifuncional laser monocromática",
    image: "https://i.postimg.cc/jjjMqCwS/Foto1-BM5110ADW.jpg",
    shortDesc: "Multifuncional laser monocromática de alta velocidade para grupos de trabalho exigentes.",
    fullDesc: "A série BM5110ADW oferece desempenho excepcional com alta velocidade de impressão e digitalização. Projetada para ambientes de escritório ocupados, ela combina durabilidade com baixos custos operacionais.",
    specs: [
      { label: "Velocidade de Impressão", value: "Até 40 ppm (A4)" },
      { label: "Resolução", value: "1200 x 1200 dpi" },
      { label: "Memória", value: "512 MB" },
      { label: "Processador", value: "1.2 GHz" },
      { label: "Conectividade", value: "USB, Ethernet, Wi-Fi" },
      { label: "Ciclo Mensal Máximo", value: "100.000 páginas" }
    ]
  },
  {
    id: "bm5100adw",
    model: "BM5100ADW",
    title: "BM5100ADW multifuncional laser monocromática",
    image: "https://i.postimg.cc/nLL3VMjM/Foto2-BM5100ADW.jpg",
    shortDesc: "Equilíbrio perfeito entre custo e performance para sua empresa.",
    fullDesc: "A BM5100ADW é uma multifuncional robusta que atende todas as necessidades de cópia, impressão e digitalização com eficiência e alta qualidade.",
    specs: [
      { label: "Velocidade de Impressão", value: "Até 40 ppm (A4)" },
      { label: "Funções", value: "Imprimir, Copiar, Digitalizar" },
      { label: "Duplex", value: "Automático" },
      { label: "Capacidade de Papel", value: "250 folhas" },
      { label: "Linguagem de Impressão", value: "PCL5e, PCL6, PS, PDF" }
    ]
  },
  {
    id: "bp5100dw",
    model: "BP5100DW",
    title: "BP5100DW Impressora laser mono",
    image: "https://i.postimg.cc/fbb8Wkty/Foto3-BP5100DW.jpg",
    shortDesc: "Impressora laser monocromática compacta e poderosa.",
    fullDesc: "Focada puramente em impressão de alta qualidade e volume, a BP5100DW é a escolha ideal para quem precisa de agilidade e confiabilidade no dia a dia.",
    specs: [
      { label: "Velocidade", value: "40 ppm" },
      { label: "Primeira Impressão", value: "Menos de 6.9s" },
      { label: "Conexão", value: "USB, Rede Cabeada, Wi-Fi" },
      { label: "Volume Mensal Rec.", value: "4.000 páginas" }
    ]
  },
  {
    id: "p3305dw",
    model: "P3305DW",
    title: "P3305DW Impressora laser monocromática",
    image: "https://i.postimg.cc/7LQm5D0k/Foto4-P3305DW.jpg",
    shortDesc: "Eficiência e versatilidade em um design compacto.",
    fullDesc: "A série P3305DW oferece impressão duplex automática e conectividade sem fio estável, perfeita para pequenos escritórios.",
    specs: [
      { label: "Velocidade", value: "33 ppm" },
      { label: "Interface", value: "Wi-Fi, USB, Ethernet" },
      { label: "Duplex", value: "Sim" },
      { label: "Tamanho de Papel", value: "A4, A5, Carta, Ofício" }
    ]
  },
  {
    id: "m7105dw",
    model: "M7105DW",
    title: "M7105DW Multifuncional Laser Monocromática",
    image: "https://i.postimg.cc/9fNJDVZ2/Foto5-M7105DW.jpg",
    shortDesc: "Solução completa 3 em 1 para pequenos e médios negócios.",
    fullDesc: "A M7105DW combina impressão, cópia e digitalização em um único dispositivo eficiente com suporte a rede e Wi-Fi.",
    specs: [
      { label: "Velocidade", value: "33 ppm" },
      { label: "ADF", value: "50 folhas" },
      { label: "Digitalização para", value: "E-mail, FTP, PC, iOS/Android" },
      { label: "NFC", value: "Sim" }
    ]
  },
  {
    id: "m7310dw",
    model: "M7310DW",
    title: "M7310DW Multifuncional Laser Monocromática",
    image: "https://i.postimg.cc/3wbnk7mY/Foto6-M7310DW.jpg",
    shortDesc: "Alta produtividade com tela de toque inteligente.",
    fullDesc: "Com uma interface de usuário intuitiva e digitalização rápida, a M7310DW eleva a produtividade operacional do seu escritório.",
    specs: [
      { label: "Velocidade", value: "33 ppm" },
      { label: "Painel", value: "Touch Screen de 3.5 polegadas" },
      { label: "Memória", value: "512 MB" },
      { label: "Scanner", value: "Cis" }
    ]
  },
  {
    id: "p3010dw",
    model: "P3010DW",
    title: "P3010DW Impressora Laser Monocromática",
    image: "https://i.postimg.cc/jjkZDKPR/Foto7-P3010DW.jpg",
    shortDesc: "Simplicidade e eficácia para impressão em preto e branco.",
    fullDesc: "Uma impressora confiável que entrega resultados nítidos e constantes, com baixo custo por página.",
    specs: [
      { label: "Velocidade", value: "30 ppm" },
      { label: "Conectividade", value: "Wi-Fi e USB" },
      { label: "Primeira Página", value: "7.8s" },
      { label: "Bandeja", value: "250 folhas" }
    ]
  },
  {
    id: "m6700dw",
    model: "M6700DW",
    title: "M6700DW Multifuncional Laser Monocromática",
    image: "https://i.postimg.cc/yNrvDBcV/Foto-8-M6700DW.jpg",
    shortDesc: "Funcionalidade avançada em um formato compacto.",
    fullDesc: "Ideal para escritórios domésticos ou pequenas empresas que precisam de versatilidade sem ocupar muito espaço.",
    specs: [
      { label: "Velocidade", value: "30 ppm" },
      { label: "Funções", value: "Impressão, Cópia, Scanner" },
      { label: "Wi-Fi", value: "Sim" },
      { label: "Duplex", value: "Automático" }
    ]
  },
  {
    id: "p2509w",
    model: "P2509W",
    title: "P2509W Impressora Laser Monocromática",
    image: "https://i.postimg.cc/8Cnt7DMp/Foto9-P2509W.jpg",
    shortDesc: "A impressora Wi-Fi mais acessível e prática.",
    fullDesc: "Compacta, elegante e fácil de configurar. Perfeita para estudantes e profissionais que trabalham em casa.",
    specs: [
      { label: "Velocidade", value: "22 ppm" },
      { label: "Conexão", value: "Wi-Fi e USB 2.0" },
      { label: "Design", value: "Compacto (Space Saving)" },
      { label: "Ciclo Mensal", value: "15.000 páginas" }
    ]
  },
  {
    id: "m6559nw",
    model: "M6559NW",
    title: "M6559NW Multifuncional Laser Monocromática",
    image: "https://i.postimg.cc/ZqDVWZp5/Foto10-M6559NW.jpg",
    shortDesc: "Multifuncional acessível com rede e Wi-Fi.",
    fullDesc: "Digitalize e imprima de qualquer lugar com suporte a dispositivos móveis e conectividade variada.",
    specs: [
      { label: "Velocidade", value: "22 ppm" },
      { label: "ADF", value: "35 folhas" },
      { label: "Funções", value: "Cópia / Impressão / Scanner" },
      { label: "Memória", value: "128 MB" }
    ]
  }
];

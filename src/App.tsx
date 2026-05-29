/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Printer, 
  PenTool, 
  Truck, 
  Building2, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  FileText,
  Package,
  Award,
  ArrowLeft,
  Check,
  ShoppingCart
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import PrintersPage from "./pages/PrintersPage";
import PrinterDetailPage from "./pages/PrinterDetailPage";
import { PRINTERS } from "./data/printers";

const NAV_LINKS = [
  { name: "Início", href: "/#home" },
  { name: "Outsourcing", href: "/#outsourcing" },
  { name: "Papelaria", href: "/#papelaria" },
  { name: "Suprimentos", href: "/#suprimentos" },
  { name: "Impressoras", href: "/#venda-impressoras" },
  { name: "Sobre Nós", href: "/#sobre" },
  { name: "Contato", href: "/#contato" },
];

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function Header({ scrolled, isMenuOpen, setIsMenuOpen }: { scrolled: boolean, isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) {
  return (
    <header 
      className="fixed top-0 z-50 w-full bg-white/95 py-3 shadow-md backdrop-blur-md transition-all duration-300"
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://lh3.googleusercontent.com/d/1ZZXALGSbXcM4p489tEl0p0CjB3N13yzQ" 
            alt="A6 Tecnology Logo" 
            className="h-[52px] md:h-[72px] w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold transition-colors text-neutral-gray hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/551141633085" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 text-center flex items-center justify-center shadow-md shadow-primary/25"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="block md:hidden pb-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-slate-900" />
          ) : (
            <Menu className="text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full bg-white p-6 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            <div className="mb-2 flex items-center gap-2 border-b pb-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1ZZXALGSbXcM4p489tEl0p0CjB3N13yzQ" 
                alt="A6 Tecnology Logo" 
                className="h-[58px] w-auto"
              />
            </div>
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-neutral-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/551141633085" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 rounded-lg bg-primary py-3 font-semibold text-white text-center block shadow-lg shadow-primary/25"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#6f7072] py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-12 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1GKH4AcEqVl3ecalSO0COPXv7jrlZhBNm" 
              alt="A6 Tecnology Logo" 
              className="h-[62px] w-auto"
            />
          </Link>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-white/80 hover:text-white">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-1 text-sm text-white/80">
            <p>© {new Date().getFullYear()} A6 Tecnology. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6 text-sm text-white/80">
            <p>
              Site criado por: <a href="https://www.rvbrands.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">RV Brands</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PlansPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-6xl">Nossos Planos</h1>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-gray">
            Escolha o modelo de franquia que melhor se adapta à demanda da sua empresa. 
            Transparência e previsibilidade para o seu negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50"
          >
            <div className="mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Printer size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="mb-2 text-xl md:text-2xl font-bold text-slate-900 leading-tight">Franquia de cópia ilimitada</h3>
            <p className="mb-8 text-sm md:text-base text-neutral-gray">Ideal para empresas com alto volume de impressão que buscam custo fixo mensal garantido.</p>
            
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Impressões sem limites mensais</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Equipamentos de alta performance inclusive</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Suprimentos (Toners) inclusos</span>
              </li>
            </ul>
            
            <button className="mt-auto rounded-xl bg-slate-900 py-4 font-bold text-white transition-all hover:bg-neutral-gray text-center">
              Solicitar Proposta
            </button>
          </motion.div>

          {/* Plan 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="flex flex-col rounded-3xl border-2 border-primary bg-white p-6 md:p-8 shadow-2xl shadow-primary/10"
          >
            <div className="mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-secondary text-white">
              <FileText size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="mb-2 text-xl md:text-2xl font-bold text-slate-900 leading-tight">Franquia de cópias por unidade</h3>
            <p className="mb-8 text-sm md:text-base text-neutral-gray">Perfeito para quem deseja pagar exatamente pelo que consome, com controle total por página impressa.</p>
            
            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Cobrança por página (unidade)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Relatórios detalhados de uso</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={14} />
                </div>
                <span className="text-slate-700">Suporte incluso independente do volume</span>
              </li>
            </ul>
            
            <button className="mt-auto rounded-xl bg-primary py-4 font-bold text-white transition-all hover:opacity-90 text-center">
              Solicitar Proposta
            </button>
          </motion.div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto rounded-2xl bg-slate-50 p-8 border-l-4 border-primary">
          <h4 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
            <CheckCircle2 className="text-primary" /> Observação Importante
          </h4>
          <p className="text-lg text-neutral-gray italic">
            "Os planos estão inclusos no contrato: Técnico Especializado a disposição para manutenção com veículo próprio para atender a empresa."
          </p>
        </div>
      </div>
    </div>
  );
}

function SuprimentosPage() {
  const WHATSAPP_LINK = "https://wa.me/551141633085";

  const products = [
    { name: "Toner Compatível PANTUM PD-219", description: "Alto rendimento, ótimo custo-benefício e durabilidade garantida.", icon: <Package className="h-24 w-24 text-primary opacity-80" /> },
    { name: "Toner Original HP 85A", description: "Qualidade profissional e confiabilidade HP para suas impressões.", icon: <Package className="h-24 w-24 text-secondary opacity-80" /> },
    { name: "Toner Brother TN-1060", description: "Excelente custo-benefício, ideal para o dia a dia do seu escritório.", icon: <Package className="h-24 w-24 text-blue-500 opacity-80" /> },
    { name: "Toner Lexmark 504H", description: "Capacidade para volumes maiores com altíssima durabilidade.", icon: <Package className="h-24 w-24 text-green-600 opacity-80" /> },
    { name: "Toner Kyocera TK-1175", description: "Rendimento superior para escritórios de grande porte e empresas.", icon: <Package className="h-24 w-24 text-red-600 opacity-80" /> },
    { name: "Toner Samsung D111S", description: "Impressões nítidas, duradouras e alta economia de suprimentos.", icon: <Package className="h-24 w-24 text-indigo-600 opacity-80" /> },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>

        {/* Header / Banner */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-6xl">Nossos Suprimentos</h1>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
          <p className="mx-auto mt-6 mb-12 max-w-2xl text-lg text-neutral-gray">
            As melhores marcas e a mais alta qualidade para garantir que suas impressões não parem.
          </p>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1PEC0bQaJvuKZrmVFCAT5cG1rriEjs3wH" 
              alt="Mesa de escritório com impressora Pantum e toner" 
              className="w-full h-auto object-cover md:h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Carousel de Marcas */}
        <div className="relative mb-24 overflow-hidden rounded-3xl bg-slate-50 py-12 border border-slate-100 shadow-inner">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent"></div>
          
          <h3 className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-slate-400">Marcas Parceiras</h3>
          
          <div className="flex">
            <motion.div
              className="flex gap-20 whitespace-nowrap px-4 opacity-40 grayscale items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-20">
                  <span className="text-3xl font-black tracking-tighter">PANTUM</span>
                  <span className="text-3xl font-bold font-serif italic">HP</span>
                  <span className="text-3xl font-bold uppercase tracking-wider">Brother</span>
                  <span className="text-3xl font-semibold tracking-tight">Lexmark</span>
                  <span className="text-3xl font-bold">KYOCERA</span>
                  <span className="text-3xl font-black tracking-widest text-slate-800">SAMSUNG</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Listagem de Produtos */}
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Suprimentos em Destaque</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
            >
              <div className="flex h-56 w-full items-center justify-center bg-slate-50/80 p-6 border-b border-slate-100">
                {product.icon}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="mb-3 text-lg md:text-xl font-bold leading-tight text-slate-900">{product.name}</h3>
                <p className="mb-8 text-sm md:text-base text-neutral-gray">{product.description}</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-slate-900 hover:shadow-lg hover:shadow-slate-900/20"
                >
                  <ShoppingCart size={18} />
                  Comprar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-white">
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1yz9zqtOo8yQjOGFdA64ObDqtcbwnQZ4E" 
            alt="Banner Home A6 Tecnology" 
            className="h-full w-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="container relative mx-auto flex h-full items-center px-6">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
                  Eficiência e Tecnologia para sua <span className="text-secondary">Empresa.</span>
                </h1>
                <p className="mb-8 text-base text-slate-300 md:text-xl px-4 md:px-0">
                  Locação de impressoras de alta performance e suprimentos de papelaria corporativa. 
                  Soluções sob medida para hospitais, prefeituras e grandes corporações.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center px-6 md:px-0">
                  <Link to="/planos" className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/30">
                    Conheça Nossos Planos <ChevronRight size={20} />
                  </Link>
                  <a href="#contato" className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                    Falar com Consultor
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: <Truck className="w-8 h-8 md:w-10 md:h-10" />, title: "Frota Própria", desc: "Logística exclusiva para entregas rápidas." },
              { icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />, title: "Sede Própria", desc: "Estrutura sólida e barracão para estoque." },
              { icon: <Users className="w-8 h-8 md:w-10 md:h-10" />, title: "Técnicos Certificados", desc: "Profissionais treinados e certificados." },
              { icon: <Award className="w-8 h-8 md:w-10 md:h-10" />, title: "Revenda Autorizada", desc: "Parceria oficial com marcas como PANTUM." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 flex justify-center text-primary">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-base md:text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm md:text-base text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outsourcing Section */}
      <section id="outsourcing" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Outsourcing de Impressão</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-gray">
              Reduza custos em até 40% com nossa gestão completa de ativos de impressão. 
              Aluguel de equipamentos modernos e suporte técnico imediato.
            </p>

            {/* Printer Categories Icons */}
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-16">
              {[
                { 
                  img: "https://a6technology.com.br/impressora-icon-1.png", 
                  label: "Impressora monocromática" 
                },
                { 
                  img: "https://a6technology.com.br/impressora-icon-2.png", 
                  label: "Impressora colorida" 
                },
                { 
                  img: "https://a6technology.com.br/impressora-icon-3.png", 
                  label: "Multifuncional monocromática" 
                },
                { 
                  img: "https://a6technology.com.br/impressora-icon-4.png", 
                  label: "Multifuncional colorida" 
                },
                { 
                  img: "https://a6technology.com.br/impressora-icon-5.png", 
                  label: "Impressora A3" 
                },
                { 
                  img: "https://a6technology.com.br/impressora-icon-6.png", 
                  label: "Impressora A0 térmica" 
                }
              ].map((cat, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center transition-transform group-hover:scale-110">
                    <img 
                      src={cat.img} 
                      alt={cat.label} 
                      className="h-full w-full object-contain transition-all duration-300 group-hover:grayscale" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="max-w-[100px] md:max-w-[140px] text-center text-[10px] md:text-sm font-medium text-neutral-gray transition-colors group-hover:text-primary leading-tight">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {[
              {
                title: "Órgãos Públicos",
                desc: "Soluções robustas para prefeituras e secretarias, garantindo transparência e economia.",
                icon: <Building2 className="text-primary" size={32} />,
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Hospitais",
                desc: "Impressão de exames e documentos com alta precisão e disponibilidade 24/7.",
                icon: <CheckCircle2 className="text-primary" size={32} />,
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Empresas & Indústria",
                desc: "Gestão inteligente para escritórios e parques industriais de qualquer porte.",
                icon: <Printer className="text-primary" size={32} />,
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50 transition-all"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-secondary/10">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-neutral-gray">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/planos" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/30">
              Nossos Planos Outsourcing <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Suprimentos Section */}
      <section id="suprimentos" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">Suprimentos</h2>
              <p className="mb-8 text-base md:text-lg text-neutral-gray">
                Mantenha sua produtividade com suprimentos originais e compatíveis de alta performance. 
                Especialistas em Toners PANTUM e multimarcas.
              </p>
              
              <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Printer className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900">Toners Laser</h3>
                    <p className="text-sm md:text-base text-neutral-gray">
                      Ampla linha de toners originais e compatíveis de alta performance, monocromáticos e coloridos.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Nossos Diferenciais</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <Award className="text-primary w-5 h-5" />, title: "Revenda PANTUM", items: "Distribuidor Autorizado Oficial" },
                  { icon: <Truck className="text-primary w-5 h-5" />, title: "Entrega Expressa", items: "Logística ágil com frota própria" },
                ].map((category, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-slate-50 p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-900">{category.title}</h4>
                      <p className="text-[10px] md:text-sm text-neutral-gray/70">{category.items}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/suprimentos" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:opacity-90 shadow-lg shadow-primary/20 text-center w-full md:w-auto">
                Consultar Suprimentos
              </Link>
            </div>
            
            <div className="relative w-full lg:w-1/2">
              <img 
                src="https://lh3.googleusercontent.com/d/1PEC0bQaJvuKZrmVFCAT5cG1rriEjs3wH" 
                alt="Suprimentos de Impressão A6" 
                className="w-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-2xl bg-secondary p-4 md:p-8 text-white shadow-xl">
                <p className="text-2xl md:text-4xl font-bold">100%</p>
                <p className="text-[10px] md:text-sm font-medium opacity-80 uppercase">Original Garantido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papelaria Section */}
      <section id="papelaria" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">Papelaria Corporativa</h2>
              <p className="mb-8 text-base md:text-lg text-neutral-gray">
                Fornecemos uma linha completa de materiais de escritório para garantir que sua equipe tenha 
                todas as ferramentas necessárias para a produtividade diária.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <FileText className="text-primary w-5 h-5" />, title: "Papel Sulfite", items: "A4, A3, Coloridos e Especiais" },
                  { icon: <PenTool className="text-primary w-5 h-5" />, title: "Escrita & Corretivos", items: "Canetas, Réguas, Corretivos, Lápis" },
                  { icon: <Package className="text-primary w-5 h-5" />, title: "Organização", items: "Pastas, Envelopes, Grampeadores e Clips" },
                  { icon: <Award className="text-primary w-5 h-5" />, title: "Qualidade Garantida", items: "Trabalhamos com as melhores marcas" },
                ].map((category, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-900">{category.title}</h4>
                      <p className="text-[10px] md:text-sm text-neutral-gray/70">{category.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative w-full lg:w-1/2">
              <img 
                src="https://a6technology.com.br/imagens-fixas/papelaria-a6.jpg" 
                alt="A6 Technology" 
                className="w-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-2xl bg-primary p-4 md:p-8 text-white shadow-xl">
                <p className="text-2xl md:text-4xl font-bold">500+</p>
                <p className="text-[10px] md:text-sm font-medium opacity-80 uppercase">Itens de Papelaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venda de Impressoras Section */}
      <section id="venda-impressoras" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl uppercase">Venda de Impressoras</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
            
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-gray px-4">
              Conheça nossa linha de impressoras Pantum. Tecnologia de ponta, 
              conectividade e o melhor custo-benefício para o seu negócio.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {PRINTERS.slice(0, 3).map((printer, index) => (
              <motion.div 
                key={printer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="mb-6 md:mb-8 flex h-48 md:h-64 w-full items-center justify-center overflow-hidden">
                  <img 
                    src={printer.image} 
                    alt={printer.model} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center w-full">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">{printer.title}</h4>
                  
                  <Link 
                    to={`/impressoras/${printer.id}`}
                    className="block w-full rounded-lg border-2 border-slate-900 bg-transparent py-3 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white text-sm md:text-base"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/venda-impressoras" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-bold text-white transition-all hover:bg-neutral-gray shadow-lg hover:shadow-primary/20"
            >
              Todas Impressoras <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="sobre" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Nossa Estrutura</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-primary mb-6"></div>
            <p className="mx-auto max-w-3xl text-base md:text-lg text-neutral-gray px-4">
              Com investimentos constantes em inovação e tecnologia, construímos uma base sólida para oferecer o melhor em soluções de impressão e gestão de documentos. Nossa infraestrutura de ponta nos permite atender com agilidade, qualidade e excelência a todos os tipos de demandas coorporativas, garantindo resultados excepcionais em cada projeto.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="Sede Própria A6 Tecnology" 
                className="h-[300px] md:h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 md:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 md:gap-3 text-secondary mb-2">
                  <Building2 size={20} />
                  <span className="font-bold tracking-widest uppercase text-[10px] md:text-sm">Sede Própria</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Infraestrutura Completa</h3>
                <p className="text-xs md:text-base text-slate-300">Contamos com sede própria e barracão amplo para armazenamento seguro de todo o estoque de papelaria e equipamentos.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1SkOjigYANP4hHQ2YYqFjoJiUo5LqjVnD" 
                alt="Frota Própria A6 Tecnology" 
                className="h-[300px] md:h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 md:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-2 md:gap-3 text-secondary mb-2">
                  <Truck size={20} />
                  <span className="font-bold tracking-widest uppercase text-[10px] md:text-sm">Logística Ágil</span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Frota Própria</h3>
                <p className="text-xs md:text-base text-slate-300">Garantimos a entrega de suprimentos e manutenção de equipamentos com agilidade através de nossa frota exclusiva.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-8 md:gap-12 rounded-3xl bg-slate-100 p-6 md:p-12 lg:flex-row shadow-sm border border-slate-200">
            <div className="w-full lg:w-1/2">
              <img 
                src="/a6-tecnicos.jpg" 
                alt="A6 Technology" 
                className="w-full rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 text-secondary mb-3 md:mb-4">
                <Users size={24} />
                <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Nossa Equipe</span>
              </div>
              <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-bold text-slate-900 leading-tight">Comprometimento em cada entrega</h3>
              <p className="mb-6 md:mb-8 text-base md:text-lg text-neutral-gray">
                Nossa equipe é uniformizada e altamente capacitada para oferecer le melhor suporte técnico 
                e atendimento comercial do mercado. Valorizamos a parceria e a confiança de nossos clientes.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">15+</p>
                  <p className="text-xs md:text-sm text-neutral-gray/70">Anos de Mercado</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">300+</p>
                  <p className="text-xs md:text-sm text-neutral-gray/70">Clientes Ativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-4xl">Nossos Clientes</h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-primary/50"></div>
          </div>
          
          <div className="relative overflow-hidden w-full">
            <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            
            <div className="flex">
              <motion.div
                className="flex gap-8 md:gap-12 whitespace-nowrap px-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...Array(2)].map((_, arrayIdx) => (
                  <div key={arrayIdx} className="flex gap-8 md:gap-12 items-center">
                    {[
                      "1xKhDoxS7j_ZtKw3g-A4lV4lJ_sCdcCOJ",
                      "1O9uIjBc0ARU4Ve1ac6B5HZn4L_ha6Jfk",
                      "1ECl0K3rRh9Tq1E_6sDrWpjMjFd0fzuLM",
                      "1Qh5Me7A2UYpYG9Jz4WZa47aJq3tvpp96",
                      "1d2xWXJZ7lAVCC8vpTYWtsWULpKctyXUm",
                      "112eXVvP2ApYP6NMCjm7VVFQXjpi1YCuT",
                      "15cG1l6FDuktGDcoA6gJVabUq49W46SOs"
                    ].map((id, i) => (
                      <div key={i} className="flex h-20 w-32 md:h-28 md:w-52 items-center justify-center transition-all duration-300">
                        <img 
                          src={`https://lh3.googleusercontent.com/d/${id}`} 
                          alt={`Cliente ${i + 1}`} 
                          className="max-h-full max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="bg-secondary p-8 md:p-12 text-white lg:w-1/3">
                <h3 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold">Informações de Contato</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-bold">Telefone</p>
                      <p className="opacity-80">(11) 4163-3085</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-bold">E-mail</p>
                      <p className="opacity-80">contato@a6tecnology.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-bold">Endereço</p>
                      <p className="opacity-80">
                        Av. Anápolis 100, Beathaville 1, Barueri/SP<br />
                        CEP: 06404-250 - Sala 415 - 4° Andar
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="mb-4 font-bold">Siga-nos</p>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                      <span className="font-bold">In</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                      <span className="font-bold">Ig</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                      <span className="font-bold">Fb</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:w-2/3">
                <h3 className="mb-8 text-3xl font-bold text-slate-900">Envie uma Mensagem</h3>
                <form className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-gray">Nome Completo</label>
                    <input type="text" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-secondary focus:bg-white" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-gray">E-mail Corporativo</label>
                    <input type="email" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-secondary focus:bg-white" placeholder="email@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-gray">Telefone</label>
                    <input type="tel" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-secondary focus:bg-white" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-gray">Assunto</label>
                    <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-secondary focus:bg-white">
                      <option>Outsourcing de Impressão</option>
                      <option>Papelaria Corporativa</option>
                      <option>Suprimentos (Toners)</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-neutral-gray">Mensagem</label>
                    <textarea rows={4} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-secondary focus:bg-white" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button className="rounded-lg bg-[#f39221] py-4 font-bold text-white transition-all hover:opacity-90 md:col-span-2">
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20 selection:text-primary">
        <Header 
          scrolled={scrolled} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planos" element={<PlansPage />} />
            <Route path="/suprimentos" element={<SuprimentosPage />} />
            <Route path="/venda-impressoras" element={<PrintersPage />} />
            <Route path="/impressoras/:id" element={<PrinterDetailPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/551141633085"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 md:bottom-8 md:right-8"
          title="Fale Conosco no WhatsApp"
          id="whatsapp-floating-btn"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </Router>
  );
}

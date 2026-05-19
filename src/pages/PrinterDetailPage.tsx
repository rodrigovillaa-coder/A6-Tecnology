
import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PRINTERS } from "../data/printers";
import { ArrowLeft, CheckCircle2, Phone, ShoppingCart } from "lucide-react";
import { useEffect } from "react";

export default function PrinterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const printer = PRINTERS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!printer) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Impressora não encontrada</h1>
        <Link to="/venda-impressoras" className="text-primary hover:underline">Voltar para lista</Link>
      </div>
    );
  }

  const WHATSAPP_LINK = `https://wa.me/551141633085?text=Olá! Tenho interesse na impressora Pantum ${printer.model}`;

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link 
          to="/venda-impressoras" 
          className="mb-8 inline-flex items-center gap-2 text-neutral-gray hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={20} /> Voltar para Impressoras
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50">
          <div className="flex flex-col lg:flex-row">
            {/* Image side */}
            <div className="bg-white p-8 lg:w-1/2 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={printer.image} 
                alt={printer.model} 
                className="max-h-[500px] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-16 lg:w-1/2">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary uppercase tracking-wider">
                Pantum Series
              </span>
              <h1 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">{printer.model}</h1>
              <p className="mb-8 text-lg text-neutral-gray leading-relaxed">
                {printer.fullDesc}
              </p>

              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                {printer.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{spec.label}</span>
                    <span className="font-medium text-slate-700">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:opacity-90 shadow-lg shadow-green-200"
                >
                  <Phone size={20} /> Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Detailed Section (Placeholder or summary) */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Características em Destaque</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Alta Performance", desc: "Equipamento projetado para manter a produtividade constante." },
              { title: "Custo-Benefício", desc: "Baixo custo por página impressa com suprimentos de alto rendimento." },
              { title: "Conectividade", desc: "Suporte completo para Wi-Fi, Ethernet e dispositivos móveis." }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <div className="mb-4 text-primary">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-neutral-gray">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

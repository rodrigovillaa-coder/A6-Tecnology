
import { motion } from "motion/react";
import { PRINTERS } from "../data/printers";
import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";

export default function PrintersPage() {
  const WHATSAPP_LINK = "https://wa.me/551141633085?text=Olá! Gostaria de solicitar um orçamento para impressoras.";

  return (
    <section className="py-24 bg-white min-h-screen pt-32">
      <div className="container mx-auto px-6">
        {/* Banner Topo */}
        <div className="w-full mb-12 overflow-hidden rounded-3xl shadow-lg border border-slate-100">
          <img 
            src="https://i.postimg.cc/nr6MnpbD/CM2100ADW-03.jpg" 
            alt="Banner Venda de Impressoras" 
            className="w-full h-auto max-h-[500px] object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl uppercase">Nossas Impressoras</h1>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-[#f39221]"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-gray">
            Selecione o modelo ideal para o seu negócio. Temos soluções desde uso doméstico até alta produtividade corporativa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRINTERS.map((printer, index) => (
            <motion.div 
              key={printer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="mb-8 flex h-64 w-full items-center justify-center overflow-hidden">
                <img 
                  src={printer.image} 
                  alt={printer.model} 
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center w-full flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex-1">{printer.title}</h3>
                
                <Link 
                  to={`/impressoras/${printer.id}`}
                  className="w-full rounded-lg border-2 border-slate-900 bg-transparent py-3 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white flex items-center justify-center gap-2"
                >
                  Saiba Mais <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão de Orçamento no final */}
        <div className="mt-16 flex justify-center">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:opacity-90 shadow-lg shadow-green-200 text-lg"
          >
            <Phone size={20} /> Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

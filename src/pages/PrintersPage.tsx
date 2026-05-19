
import { motion } from "motion/react";
import { PRINTERS } from "../data/printers";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PrintersPage() {
  return (
    <section className="py-24 bg-white min-h-screen pt-32">
      <div className="container mx-auto px-6">
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
      </div>
    </section>
  );
}

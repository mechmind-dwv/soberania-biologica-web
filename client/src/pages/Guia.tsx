import { Link } from "wouter";
import { useState } from "react";

interface Category {
  id: string;
  title: string;
  icon: string;
  tips: Array<{
    title: string;
    description: string;
    priority: "crítica" | "alta" | "media";
  }>;
}

export default function Guia() {
  const [selectedCategory, setSelectedCategory] = useState<string>("alimentacion");

  const categories: Category[] = [
    {
      id: "alimentacion",
      title: "Alimentación",
      icon: "🍽️",
      tips: [
        {
          title: "Evita alimentos en envases de plástico",
          description: "El BPA y ftalatos migran del plástico al alimento, especialmente si está caliente o graso. Compra en vidrio, acero inoxidable o cartón.",
          priority: "crítica"
        },
        {
          title: "No recalientes comida en plástico",
          description: "El calor acelera la migración de EDCs. Usa vidrio o cerámica para calentar. Nunca uses microondas con plástico.",
          priority: "crítica"
        },
        {
          title: "Elige alimentos ecológicos certificados",
          description: "Reducen exposición a pesticidas (glifosato, ftalatos). Prioriza: manzanas, fresas, espinacas, nectarinas, melocotones.",
          priority: "alta"
        },
        {
          title: "Filtra el agua potable",
          description: "Los PFAS están en el agua del grifo. Usa filtros de carbón activado o sistemas de ósmosis inversa. Evita botellas de plástico.",
          priority: "crítica"
        },
        {
          title: "Evita alimentos ultraprocesados",
          description: "Contienen ftalatos en envases y aditivos químicos. Cocina en casa con ingredientes frescos.",
          priority: "alta"
        },
        {
          title: "No consumas conservas en latas",
          description: "La mayoría de latas están revestidas con BPA. Usa vidrio o cartón.",
          priority: "alta"
        }
      ]
    },
    {
      id: "hogar",
      title: "Hogar",
      icon: "🏠",
      tips: [
        {
          title: "Reemplaza productos de limpieza químicos",
          description: "Usa vinagre, bicarbonato de sodio, jabón natural. Los productos químicos contienen ftalatos en fragancias.",
          priority: "alta"
        },
        {
          title: "Evita ambientadores y velas perfumadas",
          description: "Contienen ftalatos ocultos bajo 'fragancia'. Usa aceites esenciales puros o plantas.",
          priority: "media"
        },
        {
          title: "No uses teflon o teflón (PFOA)",
          description: "Los PFAS nunca se degradan. Usa acero inoxidable, hierro fundido o cerámica.",
          priority: "crítica"
        },
        {
          title: "Reemplaza muebles con retardantes de fuego",
          description: "Los retardantes contienen EDCs. Busca muebles sin tratamientos químicos.",
          priority: "media"
        },
        {
          title: "Ventila regularmente",
          description: "Los EDCs se evaporan de plásticos y muebles. Abre ventanas 15-20 minutos diarios.",
          priority: "media"
        },
        {
          title: "Evita plásticos en el dormitorio",
          description: "Durante el sueño, inhalas vapores de EDCs. Usa sábanas de algodón orgánico, colchones naturales.",
          priority: "alta"
        }
      ]
    },
    {
      id: "cuidado-personal",
      title: "Cuidado Personal",
      icon: "🧴",
      tips: [
        {
          title: "Evita cosméticos con 'fragancia' o 'parfum'",
          description: "Término legal para ocultar ftalatos. Busca productos sin fragancia sintética.",
          priority: "crítica"
        },
        {
          title: "No uses protectores solares químicos",
          description: "Contienen EDCs que se absorben por la piel. Usa protectores minerales (óxido de zinc, dióxido de titanio).",
          priority: "alta"
        },
        {
          title: "Reemplaza desodorantes antitranspirantes",
          description: "Contienen aluminio y ftalatos. Usa desodorantes naturales sin antitranspirante.",
          priority: "media"
        },
        {
          title: "Evita champús y acondicionadores comerciales",
          description: "Llenos de ftalatos, parabenos y EDCs. Usa champú sólido o natural.",
          priority: "alta"
        },
        {
          title: "No uses productos con parabenos",
          description: "Miméticos de estrógeno. Lee etiquetas: evita metilparabeno, propilparabeno, butilparabeno.",
          priority: "alta"
        },
        {
          title: "Evita esmalte de uñas y removedor",
          description: "Contienen ftalatos y disolventes neurotóxicos. Si lo usas, hazlo en espacios ventilados.",
          priority: "media"
        }
      ]
    },
    {
      id: "ropa-textiles",
      title: "Ropa & Textiles",
      icon: "👕",
      tips: [
        {
          title: "Compra ropa de algodón orgánico",
          description: "El algodón convencional se trata con pesticidas. Busca certificación GOTS (Global Organic Textile Standard).",
          priority: "alta"
        },
        {
          title: "Evita ropa 'resistente a manchas'",
          description: "Tratada con PFAS. Estos químicos nunca se degradan y se acumulan en tu cuerpo.",
          priority: "crítica"
        },
        {
          title: "No uses ropa 'impermeable'",
          description: "Tratada con PFAS. Opta por materiales naturales que respiren.",
          priority: "alta"
        },
        {
          title: "Lava ropa nueva antes de usarla",
          description: "Elimina residuos químicos de tinturas y tratamientos.",
          priority: "media"
        },
        {
          title: "Evita ropa con etiquetas de plástico",
          description: "Contienen ftalatos. Retíralas inmediatamente.",
          priority: "media"
        },
        {
          title: "Elige zapatos de cuero natural o lona",
          description: "El plástico sintético libera EDCs. Evita zapatos de PVC.",
          priority: "media"
        }
      ]
    },
    {
      id: "ninos",
      title: "Protección de Niños",
      icon: "👶",
      tips: [
        {
          title: "Evita juguetes de plástico",
          description: "Los niños los muerden, ingieren EDCs. Usa madera, metal o caucho natural.",
          priority: "crítica"
        },
        {
          title: "No uses botellas de plástico para bebés",
          description: "El BPA migra al agua caliente. Usa vidrio o acero inoxidable.",
          priority: "crítica"
        },
        {
          title: "Evita pañales con fragancias",
          description: "Contienen ftalatos en contacto directo con la piel del bebé.",
          priority: "alta"
        },
        {
          title: "No uses chupetes de plástico",
          description: "Usa silicona de grado médico o caucho natural.",
          priority: "alta"
        },
        {
          title: "Compra ropa infantil orgánica",
          description: "La piel de los niños es más permeable. Evita químicos tóxicos.",
          priority: "alta"
        },
        {
          title: "Evita productos con 'BPA-free'",
          description: "Sustitutos como BPS son igual de tóxicos. Busca vidrio o acero.",
          priority: "crítica"
        }
      ]
    },
    {
      id: "compras",
      title: "Estrategia de Compras",
      icon: "🛒",
      tips: [
        {
          title: "Lee TODAS las etiquetas",
          description: "Busca: BPA, ftalatos, parabenos, PFAS, 'fragancia', 'parfum'.",
          priority: "alta"
        },
        {
          title: "Evita tickets de compra térmicos",
          description: "Están revestidos con BPA. Pide factura digital.",
          priority: "media"
        },
        {
          title: "Compra en tiendas ecológicas certificadas",
          description: "Tienen estándares más altos. Busca sellos: GOTS, ECOCERT, NATRUE.",
          priority: "media"
        },
        {
          title: "Apoya marcas independientes",
          description: "Las 11 corporaciones controlan el 90% del mercado. Busca alternativas locales.",
          priority: "media"
        },
        {
          title: "Cuestiona el 'greenwashing'",
          description: "'Natural', 'eco', 'green' no son regulados. Busca certificaciones oficiales.",
          priority: "alta"
        },
        {
          title: "Compra a granel",
          description: "Reduce plástico y EDCs. Lleva tus propios recipientes.",
          priority: "media"
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "crítica": return "border-destructive bg-destructive text-background";
      case "alta": return "border-foreground bg-foreground text-background";
      case "media": return "border-foreground";
      default: return "border-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-4 border-foreground">
        <div className="container py-6 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="toxemia-bracket">[</div>
              <h1 className="text-2xl font-black uppercase">TOXEMIA</h1>
              <div className="toxemia-bracket">]</div>
            </a>
          </Link>
        </div>
      </header>

      <main className="container py-16 md:py-24">
        {/* Title */}
        <section className="mb-16 md:mb-24">
          <h1 className="toxemia-heading text-5xl md:text-7xl mb-8">
            Desobediencia<br />Química
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-8">
            Guía práctica del Dr. Nicolás Olea para reducir exposición a disruptores endocrinos en alimentación, hogar y productos de cuidado personal.
          </p>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            No podemos esperar a que la ley nos proteja. La ley llega 20 años tarde. Protégete hoy.
          </p>
        </section>

        {/* Category Navigation */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 border-4 font-black text-center transition-all ${
                  selectedCategory === cat.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-foreground hover:bg-muted"
                }`}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-xs md:text-sm uppercase">{cat.title}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Category Content */}
        {currentCategory && (
          <section className="mb-16 md:mb-24">
            <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">{currentCategory.title}</h2>
            
            <div className="space-y-6 md:space-y-8">
              {currentCategory.tips.map((tip, idx) => (
                <div key={idx} className={`toxemia-card border-4 ${getPriorityColor(tip.priority)}`}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <span className={`inline-block px-3 py-1 font-black text-xs uppercase border-2 ${getPriorityColor(tip.priority)}`}>
                        {tip.priority}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="toxemia-heading text-xl md:text-2xl mb-3">{tip.title}</h3>
                      <p className="text-base md:text-lg font-semibold leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Principles */}
        <section className="mb-16 md:mb-24 border-4 border-foreground bg-foreground text-background p-8 md:p-12">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8 text-background">Principios Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Vidrio > Plástico", desc: "Siempre que sea posible, elige vidrio, acero inoxidable o cerámica." },
              { title: "Fresco > Procesado", desc: "Alimentos frescos tienen menos EDCs que ultraprocesados." },
              { title: "Orgánico > Convencional", desc: "Reduce pesticidas y químicos de síntesis." },
              { title: "Natural > Sintético", desc: "Materiales naturales liberan menos EDCs." },
              { title: "Ventilación > Acumulación", desc: "Abre ventanas. Los EDCs se evaporan de plásticos." },
              { title: "Acción > Espera", desc: "No esperes a que la ley cambie. Cambia hoy." }
            ].map((principle, idx) => (
              <div key={idx} className="border-4 border-background p-6">
                <h3 className="font-black text-lg mb-2">{principle.title}</h3>
                <p className="font-semibold">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8">Recursos del Dr. Olea</h2>
          <div className="toxemia-card">
            <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
              Estas recomendaciones están basadas en investigaciones del Dr. Nicolás Olea y su equipo en la Universidad de Granada. Para más información:
            </p>
            <ul className="space-y-3 text-base md:text-lg font-semibold">
              <li>📚 Libro: "Libérate de Tóxicos" - Dr. Nicolás Olea</li>
              <li>🔬 Investigación: Universidad de Granada - Grupo de Investigación en Disruptores Endocrinos</li>
              <li>🌐 Proyecto INMA: Estudio de cohorte sobre exposición a EDCs en embarazo</li>
              <li>📖 Publicaciones: +300 artículos científicos sobre EDCs y salud</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center border-t-4 border-foreground pt-8">
          <Link href="/">
            <a className="toxemia-button">Volver al Inicio</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

import { Link } from "wouter";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: "prohibicion" | "retraso" | "descubrimiento" | "lobby";
  region: string;
}

export default function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: 1996,
      title: "Descubrimiento: BPA es disruptor endocrino",
      description: "Dr. Nicolás Olea publica primer estudio demostrando que el BPA actúa como disruptor endocrino a dosis bajas. La industria comienza a financiar estudios contradictorios.",
      type: "descubrimiento",
      region: "España"
    },
    {
      year: 2003,
      title: "Lobby bloquea regulación de BPA",
      description: "La industria química presiona a la FDA (EE.UU.) para no regular el BPA. Financian 100+ estudios que niegan los riesgos.",
      type: "lobby",
      region: "EE.UU."
    },
    {
      year: 2008,
      title: "Estudio: BPA causa enfermedad cardiovascular",
      description: "Estudio de Lang et al. en Environmental Health Perspectives vincula BPA con enfermedad cardiovascular, diabetes y obesidad. La industria lo ignora.",
      type: "descubrimiento",
      region: "Internacional"
    },
    {
      year: 2010,
      title: "Prohibición parcial de BPA en biberones (UE)",
      description: "La UE prohíbe BPA en biberones y chupetes. Pero permite BPA en miles de otros productos. La industria celebra: pueden seguir vendiendo BPA en envases de alimentos.",
      type: "prohibicion",
      region: "UE"
    },
    {
      year: 2011,
      title: "Prohibición parcial de BPA en biberones (EE.UU.)",
      description: "FDA prohíbe BPA en biberones y botellas de agua. Pero permite BPA en latas de alimentos, botellas de plástico y miles de productos.",
      type: "prohibicion",
      region: "EE.UU."
    },
    {
      year: 2013,
      title: "Estudio: Autismo y contaminación química",
      description: "Volk et al. demuestran 3x mayor prevalencia de autismo en áreas con contaminación química. Correlación clara con exposición a EDCs.",
      type: "descubrimiento",
      region: "EE.UU."
    },
    {
      year: 2015,
      title: "Endocrine Society: Consenso sobre EDCs",
      description: "La Endocrine Society publica declaración científica: EDCs alteran desarrollo hormonal y cerebral. Requieren regulación urgente. La industria lo ignora.",
      type: "descubrimiento",
      region: "Internacional"
    },
    {
      year: 2015,
      title: "CEO: Lobby químico bloqueó regulaciones",
      description: "Corporate Europe Observatory publica informe documentando cómo la industria química bloqueó regulaciones sobre EDCs en la UE durante décadas.",
      type: "lobby",
      region: "UE"
    },
    {
      year: 2017,
      title: "Estudio: Reducción de espermatozoides",
      description: "Levine et al. publican meta-análisis: 40% reducción en recuento de espermatozoides en últimas 4 décadas. Correlación con exposición a EDCs.",
      type: "descubrimiento",
      region: "Internacional"
    },
    {
      year: 2018,
      title: "Retraso: Regulación de ftalatos en UE",
      description: "La UE retrasa regulación de ftalatos 5 años más. Lobby químico presiona exitosamente. Millones de niños continúan expuestos.",
      type: "retraso",
      region: "UE"
    },
    {
      year: 2020,
      title: "Libro: 'Libérate de Tóxicos'",
      description: "Dr. Nicolás Olea publica 'Libérate de Tóxicos'. Síntesis de 30 años de investigación. Acceso público a la verdad sobre EDCs.",
      type: "descubrimiento",
      region: "España"
    },
    {
      year: 2021,
      title: "CDC: 97% de estadounidenses con PFAS",
      description: "CDC publica que 97% de estadounidenses tienen PFAS detectables en sangre. Bioacumulación masiva. La industria continúa produciendo PFAS.",
      type: "descubrimiento",
      region: "EE.UU."
    },
    {
      year: 2022,
      title: "Retraso: Prohibición de PFAS",
      description: "La UE retrasa prohibición de PFAS. Lobby de corporaciones químicas presiona exitosamente. PFAS continúan contaminando agua y alimentos.",
      type: "retraso",
      region: "UE"
    },
    {
      year: 2023,
      title: "Prohibición parcial de PFAS (UE)",
      description: "La UE finalmente prohíbe algunos PFAS. Pero permite otros. La industria ya está preparando sustitutos igual de tóxicos.",
      type: "prohibicion",
      region: "UE"
    },
    {
      year: 2024,
      title: "Retraso: Regulación de BPA en alimentos",
      description: "La EFSA retrasa nuevamente regulación de BPA en envases de alimentos. Presión de lobby. Millones continúan expuestos.",
      type: "retraso",
      region: "UE"
    },
    {
      year: 2025,
      title: "Hoy: La lucha continúa",
      description: "Después de 30 años de ciencia sólida, el BPA sigue en miles de productos. Los ftalatos se ocultan bajo 'fragancia'. Los PFAS contaminan el agua. La industria gana. Nuestros hijos pierden.",
      type: "retraso",
      region: "Global"
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case "prohibicion": return "bg-foreground text-background";
      case "retraso": return "bg-destructive text-background";
      case "descubrimiento": return "bg-background border-4 border-foreground";
      case "lobby": return "bg-background border-4 border-destructive";
      default: return "bg-muted";
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case "prohibicion": return "✅ Prohibición";
      case "retraso": return "⏸️ Retraso";
      case "descubrimiento": return "🔬 Descubrimiento";
      case "lobby": return "💰 Lobby";
      default: return type;
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
            Timeline de<br />Regulaciones
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-8">
            Cronología de prohibiciones, retrasos regulatorios y descubrimientos científicos sobre disruptores endocrinos.
          </p>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            30 años de ciencia sólida. 30 años de retrasos. La industria gana. Nuestros hijos pierden.
          </p>
        </section>

        {/* Legend */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Prohibición", type: "prohibicion" },
              { label: "Retraso", type: "retraso" },
              { label: "Descubrimiento", type: "descubrimiento" },
              { label: "Lobby", type: "lobby" }
            ].map((item, idx) => (
              <div key={idx} className={`p-3 border-4 border-foreground text-center font-black text-sm ${getTypeColor(item.type)}`}>
                {getTypeLabel(item.type)}
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16 md:mb-24">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-1 bg-foreground transform md:-translate-x-1/2"></div>

            {/* Events */}
            <div className="space-y-12 md:space-y-16">
              {events.map((event, idx) => (
                <div key={idx} className={`relative pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:ml-1/2 md:pl-8"}`}>
                  {/* Dot on timeline */}
                  <div className={`absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-4 border-background transform md:-translate-x-1/2 -translate-x-1/2 ${getTypeColor(event.type)}`}></div>

                  {/* Card */}
                  <div className={`toxemia-card border-4 ${getTypeColor(event.type)}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl md:text-6xl font-black flex-shrink-0">{event.year}</div>
                      <div className="flex-grow">
                        <span className={`inline-block px-3 py-1 font-black text-xs uppercase border-2 border-foreground mb-3 ${getTypeColor(event.type)}`}>
                          {getTypeLabel(event.type)}
                        </span>
                        <h3 className="toxemia-heading text-xl md:text-2xl">{event.title}</h3>
                      </div>
                    </div>

                    <p className="text-base md:text-lg font-semibold leading-relaxed mb-4">{event.description}</p>

                    <p className="text-xs font-black text-muted-foreground uppercase">{event.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-16 md:mb-24 bg-foreground text-background p-8 md:p-12 border-4 border-foreground">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8 text-background">El Patrón: Ciencia vs. Poder</h2>
          <div className="space-y-6">
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              <strong>1996-2008:</strong> Científicos descubren que los EDCs son tóxicos. La industria financia estudios contradictorios.
            </p>
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              <strong>2008-2015:</strong> Evidencia se acumula. Consenso científico internacional. La industria presiona a reguladores.
            </p>
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              <strong>2015-2025:</strong> Regulaciones llegan 20 años tarde. Prohibiciones parciales. Sustitutos tóxicos. La industria continúa ganando.
            </p>
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              <strong>2025-?:</strong> La próxima generación nace en un entorno aún más contaminado. La lucha continúa.
            </p>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8">Lecciones Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "La Ciencia No Basta",
                desc: "30 años de investigación sólida no han sido suficientes. El poder financiero supera la verdad científica."
              },
              {
                title: "El Lobby Funciona",
                desc: "La industria química ha bloqueado regulaciones exitosamente durante décadas. El dinero compra reguladores."
              },
              {
                title: "Las Prohibiciones Llegan Tarde",
                desc: "Cuando finalmente se prohíbe algo, ya ha causado daño masivo. Millones han sido expuestos."
              },
              {
                title: "Los Sustitutos Son Iguales",
                desc: "Cuando prohíben un químico, la industria lo reemplaza con otro igual de tóxico pero no regulado."
              },
              {
                title: "No Podemos Esperar",
                desc: "La ley llega 20 años tarde. Nuestros hijos no pueden esperar. Debemos actuar ahora."
              },
              {
                title: "La Resistencia Es Necesaria",
                desc: "La única forma de cambio es presión colectiva. Cartas, peticiones, denuncias públicas, demandas legales."
              }
            ].map((insight, idx) => (
              <div key={idx} className="toxemia-card border-4">
                <h3 className="toxemia-heading text-xl md:text-2xl mb-3">{insight.title}</h3>
                <p className="text-base md:text-lg font-semibold leading-relaxed">{insight.desc}</p>
              </div>
            ))}
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

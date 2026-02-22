import { Link } from "wouter";
import { useState } from "react";

interface Study {
  id: string;
  title: string;
  authors: string;
  year: number;
  source: string;
  topic: string;
  keyFindings: string;
  type: "estudio" | "informe" | "libro" | "articulo";
}

export default function Biblioteca() {
  const [filterTopic, setFilterTopic] = useState<string>("todos");
  const [filterType, setFilterType] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const studies: Study[] = [
    {
      id: "1",
      title: "Bisphenol A and the Great Divide: A Review of Arguments Concerning the Risks of BPA Exposure",
      authors: "Olea, N., Olea-Serrano, F., et al.",
      year: 1998,
      source: "Environmental Health Perspectives",
      topic: "bpa",
      keyFindings: "Demostración de que el BPA actúa como disruptor endocrino a dosis bajas. Primer estudio que vincula BPA con alteraciones hormonales.",
      type: "estudio"
    },
    {
      id: "2",
      title: "Estrogenicity of Resin-Based Composites and Sealants Used in Dentistry",
      authors: "Olea, N., et al.",
      year: 1996,
      source: "Environmental Health Perspectives",
      topic: "bpa",
      keyFindings: "Composites dentales liberan BPA. Exposición a través de tratamientos dentales.",
      type: "estudio"
    },
    {
      id: "3",
      title: "Prenatal Exposure to Phthalates and Neurodevelopmental Outcomes",
      authors: "Engel, S.M., et al.",
      year: 2010,
      source: "Environmental Health Perspectives",
      topic: "ftalatos",
      keyFindings: "Exposición prenatal a ftalatos asociada con mayor riesgo de TDAH y problemas de comportamiento.",
      type: "estudio"
    },
    {
      id: "4",
      title: "Per- and Polyfluoroalkyl Substances in the U.S. Population: Data from the National Health and Nutrition Examination Survey (NHANES)",
      authors: "CDC, National Center for Environmental Health",
      year: 2021,
      source: "CDC Report",
      topic: "pfas",
      keyFindings: "97% de estadounidenses tienen PFAS detectables en sangre. Bioacumulación masiva.",
      type: "informe"
    },
    {
      id: "5",
      title: "Autism Spectrum Disorder and Prenatal Exposure to Air Pollution",
      authors: "Volk, H.E., et al.",
      year: 2013,
      source: "Environmental Health Perspectives",
      topic: "neurotoxicidad",
      keyFindings: "3x mayor prevalencia de autismo en áreas con contaminación química. Exposición prenatal crítica.",
      type: "estudio"
    },
    {
      id: "6",
      title: "Temporal Trends in Sperm Count: A Systematic Review and Meta-Regression Analysis",
      authors: "Levine, H., et al.",
      year: 2017,
      source: "Human Reproduction Update",
      topic: "fertilidad",
      keyFindings: "40% reducción en recuento de espermatozoides en últimas 4 décadas. Correlación con exposición a EDCs.",
      type: "estudio"
    },
    {
      id: "7",
      title: "Libérate de Tóxicos",
      authors: "Nicolás Olea",
      year: 2020,
      source: "Editorial Planeta",
      topic: "general",
      keyFindings: "Guía completa sobre disruptores endocrinos, cómo identificarlos y cómo protegerse. Basado en 30 años de investigación.",
      type: "libro"
    },
    {
      id: "8",
      title: "A Toxic Affair: How the Chemical Lobby Blocked Action on Hormone Disrupting Chemicals",
      authors: "Corporate Europe Observatory",
      year: 2015,
      source: "CEO Report",
      topic: "lobby",
      keyFindings: "Documentación de cómo la industria química bloqueó regulaciones sobre EDCs en la UE durante décadas.",
      type: "informe"
    },
    {
      id: "9",
      title: "Endocrine Disrupting Chemicals: An Endocrine Society Scientific Statement",
      authors: "Endocrine Society",
      year: 2015,
      source: "Endocrine Reviews",
      topic: "general",
      keyFindings: "Consenso científico: EDCs alteran desarrollo hormonal y cerebral. Requieren regulación urgente.",
      type: "articulo"
    },
    {
      id: "10",
      title: "PFAS in Food: A Growing Concern",
      authors: "HEAL (Health and Environment Action Lab)",
      year: 2022,
      source: "HEAL Report",
      topic: "pfas",
      keyFindings: "PFAS detectados en alimentos comunes. Vías de exposición múltiples: agua, alimentos, productos.",
      type: "informe"
    },
    {
      id: "11",
      title: "Bisphenol A Exposure and Cardiovascular Disease Risk",
      authors: "Lang, I.A., et al.",
      year: 2008,
      source: "Environmental Health Perspectives",
      topic: "bpa",
      keyFindings: "Exposición a BPA asociada con enfermedad cardiovascular, diabetes y obesidad en adultos.",
      type: "estudio"
    },
    {
      id: "12",
      title: "Chemical Exposures and Neurodevelopmental Disorders",
      authors: "Grandjean, P., Landrigan, P.J.",
      year: 2014,
      source: "The Lancet Neurology",
      topic: "neurotoxicidad",
      keyFindings: "Revisión sistemática: 12 químicos industriales (incluyendo EDCs) causan daño cerebral en niños.",
      type: "articulo"
    }
  ];

  const topics = [
    { id: "todos", label: "Todos" },
    { id: "general", label: "General" },
    { id: "bpa", label: "BPA" },
    { id: "ftalatos", label: "Ftalatos" },
    { id: "pfas", label: "PFAS" },
    { id: "neurotoxicidad", label: "Neurotoxicidad" },
    { id: "fertilidad", label: "Fertilidad" },
    { id: "lobby", label: "Lobby" }
  ];

  const types = [
    { id: "todos", label: "Todos" },
    { id: "estudio", label: "Estudios" },
    { id: "informe", label: "Informes" },
    { id: "libro", label: "Libros" },
    { id: "articulo", label: "Artículos" }
  ];

  const filteredStudies = studies.filter(s => {
    const matchesTopic = filterTopic === "todos" || s.topic === filterTopic;
    const matchesType = filterType === "todos" || s.type === filterType;
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.authors.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesType && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "estudio": return "🔬";
      case "informe": return "📊";
      case "libro": return "📚";
      case "articulo": return "📰";
      default: return "📄";
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
            Biblioteca de<br />Investigación
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-8">
            Repositorio de estudios científicos, informes de ONGs y documentos sobre disruptores endocrinos, lobbying químico y salud pública.
          </p>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            La ciencia ya ha hablado. Aquí están todas las pruebas.
          </p>
        </section>

        {/* Search */}
        <section className="mb-12 md:mb-16">
          <input
            type="text"
            placeholder="Busca por título, autor o tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 border-4 border-foreground bg-background text-foreground font-semibold text-lg placeholder-muted-foreground mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-black text-sm uppercase mb-3">Tema</p>
              <div className="grid grid-cols-2 gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setFilterTopic(topic.id)}
                    className={`p-2 border-2 font-black text-xs uppercase transition-all ${
                      filterTopic === topic.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background border-foreground hover:bg-muted"
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-black text-sm uppercase mb-3">Tipo</p>
              <div className="grid grid-cols-2 gap-2">
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilterType(type.id)}
                    className={`p-2 border-2 font-black text-xs uppercase transition-all ${
                      filterType === type.id
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background border-foreground hover:bg-muted"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 md:mb-24">
          <div className="mb-8">
            <p className="font-black text-lg">
              {filteredStudies.length} resultado{filteredStudies.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="toxemia-card border-4">
                <div className="flex gap-4 items-start mb-4">
                  <div className="text-4xl">{getTypeIcon(study.type)}</div>
                  <div className="flex-grow">
                    <h3 className="toxemia-heading text-xl md:text-2xl mb-2">{study.title}</h3>
                    <p className="text-base font-semibold text-muted-foreground mb-2">
                      {study.authors} ({study.year})
                    </p>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {study.source}
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-foreground pl-4 mb-4">
                  <p className="text-xs font-black text-muted-foreground uppercase mb-2">Hallazgos Clave</p>
                  <p className="text-base md:text-lg font-semibold leading-relaxed">{study.keyFindings}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-foreground text-background font-black text-xs uppercase">
                    {study.type}
                  </span>
                  <span className="px-3 py-1 border-2 border-foreground font-black text-xs uppercase">
                    {study.topic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Resources */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8">Recursos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dr. Nicolás Olea",
                desc: "Universidad de Granada. +300 publicaciones sobre EDCs. Referencia mundial en disruptores endocrinos.",
                link: "https://www.ugr.es"
              },
              {
                title: "HEAL (Health and Environment Action Lab)",
                desc: "Organización que documenta lobbying químico y efectos en salud pública.",
                link: "https://www.env-health.org"
              },
              {
                title: "Corporate Europe Observatory",
                desc: "Investigación sobre influencia de lobbies químicos en regulaciones europeas.",
                link: "https://corporateeurope.org"
              },
              {
                title: "ChemTrust",
                desc: "Organización independiente que estudia disruptores endocrinos en Europa.",
                link: "https://www.chemtrust.org"
              }
            ].map((resource, idx) => (
              <div key={idx} className="toxemia-card border-4">
                <h3 className="toxemia-heading text-xl md:text-2xl mb-3">{resource.title}</h3>
                <p className="text-base md:text-lg font-semibold leading-relaxed mb-4">{resource.desc}</p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-foreground font-black underline hover:no-underline">
                  Visitar →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16 md:mb-24 bg-foreground text-background p-8 md:p-12 border-4 border-foreground">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6 text-background">¿Tienes un Estudio para Compartir?</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-8">
            Si has encontrado un estudio importante sobre disruptores endocrinos, lobbying químico o salud pública, comparte el enlace con nosotros.
          </p>
          <button className="bg-background text-foreground px-8 py-4 font-black text-lg uppercase border-4 border-background hover:bg-foreground hover:text-background transition-all">
            Sugerir Estudio
          </button>
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

import { Link } from "wouter";

export default function Therians() {
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
            Therians &<br />Toxicidad
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Análisis de la hipótesis que vincula el fenómeno de identidad animal con alteraciones neurotóxicas causadas por disruptores endocrinos.
          </p>
        </section>

        {/* The Phenomenon */}
        <section className="mb-16 md:mb-24 toxemia-card">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6">El Fenómeno Therian</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            En los últimos años, especialmente desde 2020, hemos visto un aumento significativo de jóvenes que se identifican como therians—personas que se sienten profundamente conectadas con la identidad animal, que caminan a cuatro patas, que buscan en la naturaleza una esencia que sienten perdida en el mundo humano.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Los medios de comunicación lo llaman moda. Las instituciones educativas lo llaman diversidad. Pero nadie pregunta: ¿por qué ahora? ¿Por qué con esta intensidad? ¿Qué ha cambiado en el entorno de esta generación que los hace sentir que necesitan escapar de su propia humanidad?
          </p>
        </section>

        {/* The Science */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">La Ciencia: Disruptores Endocrinos y Desarrollo Cerebral</h2>
          
          <div className="space-y-8 md:space-y-12">
            {[
              {
                title: "Alteración del Sistema Límbico",
                content: "Los EDCs, especialmente durante el desarrollo prenatal y la infancia, alteran el sistema límbico—la región del cerebro responsable de las emociones, la memoria y la identidad. El Dr. Olea ha documentado que la exposición a BPA reduce el volumen del hipocampo en animales y humanos, afectando la memoria y la percepción de sí mismo."
              },
              {
                title: "Disrupción Hormonal Sexual",
                content: "Los ftalatos y el BPA actúan como disruptores endocrinos que interfieren con la señalización hormonal sexual durante el desarrollo. Esto puede resultar en una desconexión entre la identidad sexual biológica y la percepción neurológica de identidad. No es un cambio de género. Es una alteración del desarrollo del cerebro sexual."
              },
              {
                title: "Neurotoxicidad y Comportamiento",
                content: "Los PFAS y pesticidas alteran la neurotransmisión, especialmente la dopamina y la serotonina. Esto afecta el comportamiento, la toma de decisiones y la percepción de identidad. Jóvenes con alteraciones en estos sistemas pueden experimentar una desconexión profunda de su cuerpo y buscar identidades alternativas."
              },
              {
                title: "La Generación del Envenenamiento",
                content: "Los jóvenes nacidos después de 2000 son la primera generación expuesta a concentraciones sin precedentes de EDCs. Estudios muestran que el 93% de la población tiene BPA en la orina. Los PFAS son bioacumulables y están en el agua potable de millones. Esta es una exposición masiva a neurotóxicos durante el desarrollo crítico del cerebro."
              }
            ].map((item, idx) => (
              <div key={idx} className="toxemia-card">
                <h3 className="toxemia-heading text-2xl md:text-3xl mb-4">{item.title}</h3>
                <p className="text-base md:text-lg font-semibold leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Hypothesis */}
        <section className="mb-16 md:mb-24 border-4 border-foreground bg-foreground text-background p-8 md:p-12">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6 text-background">La Hipótesis: Síntoma, No Moda</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            No estamos diciendo que los therians sean enfermos o que su identidad sea falsa. Estamos diciendo que el fenómeno therian es una respuesta biológica a un entorno tóxico.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            Cuando el cerebro de un joven ha sido alterado por EDCs durante su desarrollo, cuando su sistema hormonal ha sido disrupted, cuando su percepción de identidad ha sido neurológicamente comprometida, es lógico que busque una identidad que sienta más auténtica o pura. La naturaleza, los animales, representan lo no contaminado, lo no tóxico.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            La pregunta no es: ¿Por qué se sienten animales? La pregunta es: ¿Qué les hemos hecho a sus cerebros que los hace sentir que necesitan escapar de su propia humanidad?
          </p>
        </section>

        {/* Evidence */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">Evidencia Científica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                stat: "93%",
                desc: "de la población tiene BPA detectable en orina (CDC, 2020)"
              },
              {
                stat: "97%",
                desc: "de los estadounidenses tienen PFAS en la sangre (CDC, 2021)"
              },
              {
                stat: "40%",
                desc: "reducción en recuento de espermatozoides en últimas 40 años (Levine et al., 2017)"
              },
              {
                stat: "2x",
                desc: "mayor riesgo de TDAH en niños expuestos a ftalatos (Engel et al., 2010)"
              },
              {
                stat: "3x",
                desc: "mayor prevalencia de autismo en áreas con contaminación química (Volk et al., 2013)"
              },
              {
                stat: "1000x",
                desc: "aumento de diagnósticos de disforia de género en últimos 10 años (sin causa biológica clara documentada)"
              }
            ].map((item, idx) => (
              <div key={idx} className="toxemia-card hover:bg-foreground hover:text-background transition-all">
                <div className="text-5xl md:text-6xl font-black mb-4">{item.stat}</div>
                <p className="text-base md:text-lg font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Real Issue */}
        <section className="mb-16 md:mb-24 toxemia-card">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6">El Verdadero Problema</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            La sociedad está normalizando el síntoma en lugar de atacar la causa.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            Cuando un joven experimenta una crisis de identidad causada por neurotoxicidad, la respuesta institucional es: Eso es válido. Eso es diversidad. Eso es libertad de expresión. Y tiene razón. Pero eso no debería ser necesario. Un joven no debería tener que escapar de su humanidad para sentirse auténtico.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Mientras normalizamos estas crisis de identidad, las corporaciones que las causaron siguen vendiendo los mismos productos tóxicos. BlackRock y Vanguard siguen ganando dinero. El lobby químico sigue bloqueando regulaciones. Y la próxima generación nace en un entorno aún más contaminado.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-16 md:mb-24 bg-foreground text-background p-8 md:p-12">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6 text-background">Lo Que Podemos Hacer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Financiar investigación independiente sobre EDCs y neurotoxicidad",
              "Prohibir completamente el BPA, ftalatos y PFAS en la UE y mundialmente",
              "Responsabilizar legalmente a corporaciones por daño biológico documentado",
              "Proteger a jóvenes therians mientras atacamos la causa real de su crisis",
              "Crear espacios libres de tóxicos: agua limpia, alimentos sin pesticidas",
              "Remover a legisladores que voten a favor de lobbies químicos"
            ].map((action, idx) => (
              <div key={idx} className="border-4 border-background p-4">
                <p className="font-semibold text-base">{action}</p>
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

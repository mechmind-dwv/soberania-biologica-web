import { Link } from "wouter";

export default function Manifiesto() {
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

      {/* Main Content */}
      <main className="container py-16 md:py-24">
        {/* Title */}
        <section className="mb-16 md:mb-24">
          <h1 className="toxemia-heading text-5xl md:text-7xl mb-8">
            Manifiesto de<br />Soberanía Biológica
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
            Declaración fundamentada en investigaciones del Dr. Nicolás Olea sobre la conexión entre disruptores endocrinos, normalización del daño biológico y crisis de identidad.
          </p>
        </section>

        {/* Preamble */}
        <section className="mb-16 md:mb-24 toxemia-card">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6">Preámbulo</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            Vivimos en una era de envenenamiento químico silencioso. No es una conspiración. Es ciencia documentada. Durante más de tres décadas, el Dr. Nicolás Olea y su equipo en la Universidad de Granada han demostrado que nuestros cuerpos están saturados de disruptores endocrinos (EDCs): bisfenol A, ftalatos, PFAS, pesticidas.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Estos químicos no solo alteran nuestras hormonas. Alteran nuestro cerebro. Alteran nuestro comportamiento. Alteran quiénes somos. Y la industria lo sabe. Pero la industria ha elegido normalizar el daño en lugar de detenerlo.
          </p>
        </section>

        {/* Core Principles */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">Principios Fundamentales</h2>
          
          <div className="space-y-8 md:space-y-12">
            {[
              {
                num: "I",
                title: "El Derecho a una Biología No Alterada",
                content: "Toda persona tiene el derecho fundamental a desarrollarse sin la interferencia de químicos tóxicos. Este derecho es anterior a cualquier regulación. Es un derecho biológico, no político."
              },
              {
                num: "II",
                title: "La Ciencia No Miente, El Poder Sí",
                content: "La evidencia científica es clara: los disruptores endocrinos alteran el desarrollo cerebral y hormonal. Las corporaciones químicas lo saben desde los años 90. Han elegido financiar la duda científica en lugar de eliminar los tóxicos."
              },
              {
                num: "III",
                title: "La Normalización del Daño Es Un Crimen",
                content: "Cuando la sociedad acepta que la degradación biológica es 'normal' o 'una moda', la responsabilidad corporativa desaparece. Esto es intencional. Es una estrategia de poder."
              },
              {
                num: "IV",
                title: "La Identidad Sin Biología Es Una Ilusión",
                content: "Si nuestro cerebro está siendo alterado por químicos, ¿somos realmente libres de elegir quiénes somos? La verdadera libertad de identidad requiere una biología protegida."
              },
              {
                num: "V",
                title: "La Soberanía Biológica Es Soberanía Política",
                content: "Recuperar el control sobre nuestro cuerpo y nuestras hormonas es un acto de resistencia política. No es anti-progreso. Es pro-vida."
              }
            ].map((principle, idx) => (
              <div key={idx} className="toxemia-card">
                <div className="flex gap-6 items-start">
                  <div className="text-5xl md:text-6xl font-black flex-shrink-0">{principle.num}</div>
                  <div>
                    <h3 className="toxemia-heading text-2xl md:text-3xl mb-4">{principle.title}</h3>
                    <p className="text-base md:text-lg font-semibold leading-relaxed">{principle.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Connection */}
        <section className="mb-16 md:mb-24 border-4 border-foreground bg-foreground text-background p-8 md:p-12">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6 text-background">La Hipótesis: EDCs y Crisis de Identidad</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            Observamos un fenómeno sin precedentes: jóvenes que se identifican como animales (therians), que buscan en la naturaleza una esencia que sienten perdida. Los medios lo llaman "moda". Las instituciones lo llaman "diversidad".
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
            Pero, ¿y si es un síntoma? ¿Y si es la respuesta de una generación cuya biología ha sido alterada por un entorno tóxico?
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Los disruptores endocrinos alteran el desarrollo del sistema nervioso central. Alteran la percepción de identidad sexual. Alteran el comportamiento. No es especulación. Es neurobiología documentada. La pregunta no es si los EDCs pueden causar estos cambios. La pregunta es: ¿cuánto tiempo vamos a permitir que sigan haciéndolo?
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">Compromisos Colectivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Exigir prohibición total de disruptores endocrinos en la UE y a nivel mundial",
              "Responsabilizar legalmente a corporaciones por daño biológico documentado",
              "Financiar investigación independiente sobre EDCs y neurotoxicidad",
              "Proteger a denunciantes y científicos que exponen la verdad",
              "Remover a legisladores que voten a favor de lobbies químicos",
              "Crear espacios libres de tóxicos: agua, alimentos, productos de cuidado personal"
            ].map((commitment, idx) => (
              <div key={idx} className="toxemia-card hover:bg-foreground hover:text-background transition-all">
                <p className="text-base md:text-lg font-semibold">{commitment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signature */}
        <section className="text-center border-t-4 border-foreground pt-12">
          <p className="text-lg md:text-xl font-black uppercase mb-8">
            Firmado por la Resistencia Biológica
          </p>
          <Link href="/">
            <a className="toxemia-button">Volver al Inicio</a>
          </Link>
        </section>
      </main>
    </div>
  );
}

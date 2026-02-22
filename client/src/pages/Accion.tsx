import { Link } from "wouter";
import { useState } from "react";

interface Campaign {
  id: string;
  title: string;
  description: string;
  target: string;
  demand: string;
  template: string;
  icon: string;
}

export default function Accion() {
  const [selectedCampaign, setSelectedCampaign] = useState<string>("1");
  const [letterText, setLetterText] = useState<string>("");

  const campaigns: Campaign[] = [
    {
      id: "1",
      title: "Prohibición Total de BPA",
      description: "Exigir a la Comisión Europea prohibición total del Bisfenol A en todos los productos",
      target: "Comisión Europea - Dirección de Salud Pública",
      demand: "Prohibición total del BPA en la UE",
      template: `Estimados miembros de la Comisión Europea,

Le escribo para exigir la prohibición total del Bisfenol A (BPA) en todos los productos de consumo en la Unión Europea.

El BPA es un disruptor endocrino documentado que:
- Está presente en el 93% de la población europea
- Altera el desarrollo hormonal y cerebral
- Causa problemas de fertilidad, metabolismo y comportamiento
- Ha sido prohibido en biberones y chupetes, pero sigue en miles de productos

La ciencia es clara. El Dr. Nicolás Olea y su equipo han demostrado durante 30 años que el BPA es tóxico a dosis bajas. Otros países ya han actuado. Es hora de que Europa lo haga.

Exijo:
1. Prohibición total del BPA en todos los productos de consumo
2. Prohibición de sustitutos (BPS, BPF) que son igual de tóxicos
3. Responsabilidad legal para corporaciones que continúen usando BPA
4. Financiamiento de investigación independiente sobre EDCs

La salud de nuestros hijos no es negociable.

Atentamente,
[Tu nombre]`,
      icon: "⚖️"
    },
    {
      id: "2",
      title: "Prohibición de PFAS",
      description: "Campaña para prohibir los químicos eternos (PFAS) que nunca se degradan",
      target: "Parlamento Europeo - Comisión de Medio Ambiente",
      demand: "Prohibición de PFAS en la UE",
      template: `Estimados diputados del Parlamento Europeo,

Le escribo para exigir la prohibición inmediata de todos los PFAS (per- y polyfluoroalquil sustancias) en la Unión Europea.

Los PFAS son "químicos eternos" que:
- Nunca se degradan en el medio ambiente
- Se bioacumulan en el cuerpo humano
- Están en el 97% de la población estadounidense
- Alteran el sistema inmune, hormonal y reproductivo
- Contaminan el agua potable de millones de europeos

Estos químicos fueron creados por corporaciones que conocían sus riesgos. Ahora están en nuestro cuerpo, en nuestro agua, en nuestros alimentos.

Exijo:
1. Prohibición total de PFAS en la UE
2. Investigación obligatoria de suelos y agua contaminados
3. Responsabilidad corporativa por daño ambiental
4. Financiamiento de desintoxicación para poblaciones afectadas

No podemos esperar más.

Atentamente,
[Tu nombre]`,
      icon: "💧"
    },
    {
      id: "3",
      title: "Regulación de Ftalatos",
      description: "Exigir prohibición de ftalatos en todos los productos de consumo",
      target: "Agencias de Protección del Consumidor",
      demand: "Prohibición de ftalatos en productos de consumo",
      template: `Estimados funcionarios de Protección del Consumidor,

Le escribo para exigir la prohibición inmediata de ftalatos en todos los productos de consumo.

Los ftalatos son disruptores endocrinos que:
- Se ocultan bajo el término "fragancia" en etiquetas
- Alteran la fertilidad y el desarrollo sexual
- Afectan especialmente a bebés y niños
- Están en cosméticos, juguetes, ropa y alimentos
- Son sustitutos de otros EDCs prohibidos

El término "fragancia" permite a las corporaciones ocultar ftalatos sin revelarlos. Esto es fraude al consumidor.

Exijo:
1. Prohibición total de ftalatos en productos de consumo
2. Transparencia obligatoria: listar todos los ingredientes, incluyendo "fragancia"
3. Multas severas para corporaciones que violen esta norma
4. Retirada de productos que contengan ftalatos

Los consumidores tienen derecho a saber qué están comprando.

Atentamente,
[Tu nombre]`,
      icon: "🚫"
    },
    {
      id: "4",
      title: "Presión a Minoristas",
      description: "Campaña para que grandes minoristas dejen de vender productos con EDCs",
      target: "Grandes cadenas de distribución",
      demand: "Eliminación de productos con EDCs de las tiendas",
      template: `Estimados directivos de [Nombre de la tienda],

Le escribo como cliente para exigir que dejen de vender productos que contienen disruptores endocrinos.

Ustedes venden:
- Botellas de plástico con BPA
- Cosméticos con ftalatos
- Ropa tratada con PFAS
- Juguetes para bebés con EDCs

Mientras ustedes ganan dinero, nuestros hijos están siendo envenenados. Esto es inaceptable.

Exijo que:
1. Dejen de vender productos que contienen BPA, ftalatos y PFAS
2. Creen una sección "Libre de EDCs" con productos seguros
3. Transparencia: etiqueten claramente qué productos contienen EDCs
4. Apoyen regulaciones que protejan a los consumidores

Si no actúan, cambiaré de tienda. Muchos otros harán lo mismo.

Atentamente,
[Tu nombre]`,
      icon: "🛒"
    },
    {
      id: "5",
      title: "Investigación Independiente",
      description: "Petición para financiar investigación independiente sobre EDCs",
      target: "Ministerios de Salud y Ciencia",
      demand: "Financiamiento de investigación independiente sobre EDCs",
      template: `Estimados ministros de Salud y Ciencia,

Le escribo para exigir financiamiento urgente de investigación independiente sobre disruptores endocrinos.

La industria química ha financiado estudios que contradicen la evidencia científica. Necesitamos investigación pública, transparente e independiente que:

1. Estudie la exposición real de la población a EDCs
2. Investigue los efectos neurológicos de EDCs en niños
3. Analice la conexión entre EDCs y crisis de identidad
4. Documente el daño biológico causado por corporaciones
5. Proponga soluciones de desintoxicación

El Dr. Nicolás Olea ha demostrado durante 30 años que los EDCs son tóxicos. Pero su investigación está subfinanciada. Mientras tanto, corporaciones gastan millones en desinformación.

Exijo:
1. Inversión de 100 millones de euros en investigación independiente sobre EDCs
2. Protección de científicos que publiquen hallazgos críticos
3. Acceso público a todos los datos de investigación
4. Colaboración internacional para estudiar EDCs

La salud de nuestros hijos depende de esto.

Atentamente,
[Tu nombre]`,
      icon: "🔬"
    },
    {
      id: "6",
      title: "Responsabilidad Corporativa",
      description: "Demanda legal contra corporaciones por daño biológico causado por EDCs",
      target: "Fiscalías y Juzgados",
      demand: "Acciones legales contra corporaciones por daño biológico",
      template: `Estimados fiscales y jueces,

Le escribo para exigir acciones legales contra corporaciones que han causado daño biológico masivo a través de disruptores endocrinos.

Las corporaciones químicas y alimentarias:
- Conocían desde los años 90 que sus productos contenían EDCs tóxicos
- Financiaron estudios falsos para negar los riesgos
- Bloquearon regulaciones a través de lobbying
- Continuaron vendiendo productos tóxicos sabiendo el daño

Esto es negligencia criminal. Esto es fraude. Esto es crimen contra la salud pública.

Exijo:
1. Investigación criminal de corporaciones que ocultaron riesgos de EDCs
2. Demandas civiles por daño biológico a la población
3. Indemnizaciones para víctimas de exposición a EDCs
4. Prohibición de venta de productos tóxicos
5. Prisión para ejecutivos que tomaron decisiones criminales

La justicia debe actuar. Nuestros hijos merecen justicia.

Atentamente,
[Tu nombre]`,
      icon: "⚔️"
    }
  ];

  const currentCampaign = campaigns.find(c => c.id === selectedCampaign);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterText);
    alert("Carta copiada al portapapeles");
  };

  const downloadLetter = () => {
    const element = document.createElement("a");
    const file = new Blob([letterText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `carta-toxemia-${selectedCampaign}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
            Acción<br />Colectiva
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-8">
            Herramientas para generar cartas a legisladores, peticiones y campañas de presión a minoristas y corporaciones.
          </p>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            La resistencia no es individual. Es colectiva. Usa estas herramientas para exigir cambio.
          </p>
        </section>

        {/* Campaign Selection */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8">Campañas Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => {
                  setSelectedCampaign(campaign.id);
                  setLetterText(campaign.template);
                }}
                className={`p-6 border-4 text-left transition-all ${
                  selectedCampaign === campaign.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-foreground hover:bg-muted"
                }`}
              >
                <div className="text-3xl mb-3">{campaign.icon}</div>
                <h3 className="font-black text-lg mb-2">{campaign.title}</h3>
                <p className="text-sm font-semibold">{campaign.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Campaign Details */}
        {currentCampaign && (
          <section className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Info Panel */}
              <div className="lg:col-span-1">
                <div className="toxemia-card border-4 mb-8">
                  <h3 className="toxemia-heading text-2xl mb-6">Detalles de la Campaña</h3>
                  
                  <div className="mb-6">
                    <p className="text-xs font-black text-muted-foreground uppercase mb-2">Objetivo</p>
                    <p className="text-base font-semibold">{currentCampaign.demand}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-black text-muted-foreground uppercase mb-2">Destinatario</p>
                    <p className="text-base font-semibold">{currentCampaign.target}</p>
                  </div>

                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase mb-2">Descripción</p>
                    <p className="text-base font-semibold">{currentCampaign.description}</p>
                  </div>
                </div>

                <div className="toxemia-card border-4 bg-foreground text-background">
                  <p className="font-black text-sm mb-4">Instrucciones:</p>
                  <ol className="space-y-2 text-sm font-semibold list-decimal list-inside">
                    <li>Personaliza la carta con tu nombre</li>
                    <li>Cópiala o descárgala</li>
                    <li>Envíala por correo, fax o entrega en persona</li>
                    <li>Comparte en redes sociales</li>
                    <li>Anima a otros a hacer lo mismo</li>
                  </ol>
                </div>
              </div>

              {/* Letter Editor */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <p className="font-black text-sm uppercase mb-3">Edita la carta</p>
                  <textarea
                    value={letterText}
                    onChange={(e) => setLetterText(e.target.value)}
                    className="w-full h-96 p-4 border-4 border-foreground bg-background text-foreground font-semibold text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 toxemia-button text-sm"
                  >
                    Copiar
                  </button>
                  <button
                    onClick={downloadLetter}
                    className="flex-1 toxemia-button text-sm"
                  >
                    Descargar
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex-1 toxemia-button text-sm"
                  >
                    Imprimir
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Impact Stats */}
        <section className="mb-16 md:mb-24 bg-foreground text-background p-8 md:p-12 border-4 border-foreground">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8 text-background">El Poder de la Acción Colectiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "1000+", desc: "Cartas enviadas = Presión política real" },
              { stat: "100+", desc: "Denuncias en redes = Visibilidad mediática" },
              { stat: "10+", desc: "Corporaciones presionadas = Cambio de políticas" }
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-background p-6">
                <div className="text-4xl font-black mb-3">{item.stat}</div>
                <p className="font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Share Section */}
        <section className="mb-16 md:mb-24 toxemia-card border-4">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6">Comparte Esta Campaña</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-8">
            La resistencia crece cuando se propaga. Comparte estas cartas con tu red. Etiqueta a amigos. Usa hashtags. Haz ruido.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-foreground text-background font-black uppercase border-2 border-foreground hover:bg-background hover:text-foreground transition-all">
              Compartir en X
            </button>
            <button className="px-6 py-3 bg-foreground text-background font-black uppercase border-2 border-foreground hover:bg-background hover:text-foreground transition-all">
              Compartir en Facebook
            </button>
            <button className="px-6 py-3 bg-foreground text-background font-black uppercase border-2 border-foreground hover:bg-background hover:text-foreground transition-all">
              Compartir por Email
            </button>
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

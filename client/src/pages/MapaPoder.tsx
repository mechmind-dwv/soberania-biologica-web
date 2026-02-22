import { Link } from "wouter";
import { useState } from "react";

interface Node {
  id: string;
  label: string;
  type: "fund" | "corporation" | "chemical" | "outcome";
  description: string;
}

interface Edge {
  source: string;
  target: string;
  label: string;
}

export default function MapaPoder() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes: Node[] = [
    // Fondos de Inversión
    { id: "blackrock", label: "BlackRock", type: "fund", description: "Mayor fondo de inversión mundial. Controla participaciones en todas las corporaciones químicas y alimentarias." },
    { id: "vanguard", label: "Vanguard", type: "fund", description: "Segundo mayor fondo de inversión. Socio de BlackRock en el control de mercados." },
    
    // Las 11 Corporaciones
    { id: "nestle", label: "Nestlé", type: "corporation", description: "Mayor empresa alimentaria. Productos en 190 países. Envases de plástico con BPA." },
    { id: "pepsico", label: "PepsiCo", type: "corporation", description: "Bebidas y snacks. Envases de plástico. Ftalatos en empaques." },
    { id: "unilever", label: "Unilever", type: "corporation", description: "Cosméticos, higiene, alimentos. Bisfenol A en botellas de champú." },
    { id: "mondelez", label: "Mondelēz", type: "corporation", description: "Snacks y chocolate. Envases con EDCs." },
    { id: "coca", label: "Coca-Cola", type: "corporation", description: "Bebidas. Botellas de plástico con BPA y PFAS." },
    { id: "bayer", label: "Bayer/Monsanto", type: "corporation", description: "Pesticidas, herbicidas. Glifosato. Ftalatos en productos químicos." },
    { id: "basf", label: "BASF", type: "corporation", description: "Químicos industriales. Productor de ftalatos y aditivos plásticos." },
    { id: "dow", label: "Dow Chemical", type: "corporation", description: "PFAS, plásticos. Productor de disruptores endocrinos." },
    { id: "dupont", label: "DuPont", type: "corporation", description: "Teflón (PFOA). Plásticos con EDCs." },
    { id: "jnj", label: "Johnson & Johnson", type: "corporation", description: "Cosméticos y cuidado personal. Ftalatos en fragancias." },
    { id: "procter", label: "Procter & Gamble", type: "corporation", description: "Higiene personal. Bisfenol A en envases." },
    
    // Disruptores Endocrinos
    { id: "bpa", label: "Bisfenol A (BPA)", type: "chemical", description: "Químico más estudiado. Altera desarrollo hormonal y cerebral. Presente en 93% de la población." },
    { id: "ftalatos", label: "Ftalatos", type: "chemical", description: "Suavizantes de plástico. Alteran fertilidad y desarrollo sexual. Prohibidos parcialmente en UE." },
    { id: "pfas", label: "PFAS (Químicos Eternos)", type: "chemical", description: "Nunca se degradan. Bioacumulables. Alteran sistema inmune y hormonal." },
    { id: "pesticidas", label: "Pesticidas (Glifosato)", type: "chemical", description: "Alteran microbioma y sistema hormonal. Presentes en alimentos convencionales." },
    { id: "bps", label: "Bisfenol S (BPS)", type: "chemical", description: "Sustituto 'seguro' del BPA. Igual de tóxico. No regulado." },
    
    // Outcomes
    { id: "outcome", label: "Crisis de Identidad & Neurotoxicidad", type: "outcome", description: "Alteración del desarrollo cerebral, percepción de identidad, comportamiento sexual, fertilidad." }
  ];

  const edges: Edge[] = [
    // BlackRock/Vanguard → Corporaciones
    { source: "blackrock", target: "nestle", label: "Accionista mayoritario" },
    { source: "blackrock", target: "pepsico", label: "Accionista mayoritario" },
    { source: "blackrock", target: "unilever", label: "Accionista mayoritario" },
    { source: "vanguard", target: "nestle", label: "Accionista mayoritario" },
    { source: "vanguard", target: "coca", label: "Accionista mayoritario" },
    { source: "vanguard", target: "bayer", label: "Accionista mayoritario" },
    
    // Corporaciones → EDCs
    { source: "nestle", target: "bpa", label: "Usa en envases" },
    { source: "nestle", target: "ftalatos", label: "Usa en plásticos" },
    { source: "pepsico", target: "bpa", label: "Usa en botellas" },
    { source: "coca", target: "pfas", label: "Usa en botellas" },
    { source: "unilever", target: "ftalatos", label: "Usa en fragancias" },
    { source: "bayer", target: "pesticidas", label: "Produce" },
    { source: "basf", target: "ftalatos", label: "Produce" },
    { source: "dow", target: "pfas", label: "Produce" },
    { source: "jnj", target: "ftalatos", label: "Usa en productos" },
    
    // EDCs → Outcome
    { source: "bpa", target: "outcome", label: "Altera desarrollo" },
    { source: "ftalatos", target: "outcome", label: "Altera hormonas" },
    { source: "pfas", target: "outcome", label: "Altera inmunidad" },
    { source: "pesticidas", target: "outcome", label: "Altera microbioma" },
    { source: "bps", target: "outcome", label: "Altera desarrollo" }
  ];

  const getNodeColor = (type: string) => {
    switch(type) {
      case "fund": return "bg-foreground text-background";
      case "corporation": return "bg-background border-4 border-foreground";
      case "chemical": return "bg-foreground text-background";
      case "outcome": return "bg-destructive text-background";
      default: return "bg-muted";
    }
  };

  const getNodePosition = (id: string, index: number) => {
    const positions: Record<string, [number, number]> = {
      // Fondos (arriba)
      blackrock: [15, 10],
      vanguard: [35, 10],
      
      // Corporaciones (medio)
      nestle: [5, 35],
      pepsico: [15, 35],
      unilever: [25, 35],
      mondelez: [35, 35],
      coca: [45, 35],
      bayer: [55, 35],
      basf: [65, 35],
      dow: [75, 35],
      dupont: [85, 35],
      jnj: [10, 50],
      procter: [20, 50],
      
      // EDCs (abajo)
      bpa: [15, 70],
      ftalatos: [30, 70],
      pfas: [45, 70],
      pesticidas: [60, 70],
      bps: [75, 70],
      
      // Outcome (abajo)
      outcome: [45, 90]
    };
    return positions[id] || [50, 50];
  };

  const selectedNodeData = nodes.find(n => n.id === selectedNode);

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
        <section className="mb-12">
          <h1 className="toxemia-heading text-5xl md:text-6xl mb-6">Mapa del Poder</h1>
          <p className="text-lg font-semibold max-w-3xl mb-8">
            Visualización de las conexiones entre fondos de inversión, corporaciones, disruptores endocrinos y sus efectos en la salud biológica.
          </p>
          <div className="toxemia-divider"></div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa */}
          <div className="lg:col-span-2 border-4 border-foreground p-8 bg-background overflow-auto" style={{ minHeight: "600px" }}>
            <div className="relative" style={{ width: "100%", height: "600px" }}>
              {/* SVG para conexiones */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                {edges.map((edge, idx) => {
                  const source = nodes.find(n => n.id === edge.source);
                  const target = nodes.find(n => n.id === edge.target);
                  if (!source || !target) return null;
                  
                  const [x1, y1] = getNodePosition(edge.source, 0);
                  const [x2, y2] = getNodePosition(edge.target, 0);
                  
                  return (
                    <line
                      key={idx}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                  );
                })}
              </svg>

              {/* Nodos */}
              <div className="relative w-full h-full">
                {nodes.map((node) => {
                  const [x, y] = getNodePosition(node.id, 0);
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 md:p-4 border-2 md:border-4 border-foreground font-black text-xs md:text-sm uppercase text-center hover:scale-110 transition-all ${getNodeColor(node.type)}`}
                      style={{ left: `${x}%`, top: `${y}%`, width: "80px" }}
                      title={node.description}
                    >
                      {node.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Panel de Información */}
          <div className="border-4 border-foreground p-8">
            <h3 className="toxemia-heading text-2xl mb-6">Información</h3>
            
            {selectedNodeData ? (
              <div>
                <div className={`p-4 mb-6 border-4 border-foreground ${getNodeColor(selectedNodeData.type)}`}>
                  <p className="font-black text-lg">{selectedNodeData.label}</p>
                </div>
                <p className="font-semibold leading-relaxed mb-6">{selectedNodeData.description}</p>
                
                {/* Conexiones */}
                <div className="mb-6">
                  <h4 className="toxemia-heading text-lg mb-3">Conexiones</h4>
                  <div className="space-y-2">
                    {edges
                      .filter(e => e.source === selectedNode || e.target === selectedNode)
                      .map((edge, idx) => {
                        const otherNodeId = edge.source === selectedNode ? edge.target : edge.source;
                        const otherNode = nodes.find(n => n.id === otherNodeId);
                        return (
                          <div key={idx} className="text-sm font-semibold border-l-4 border-foreground pl-3">
                            <p>{otherNode?.label}</p>
                            <p className="text-xs text-muted-foreground">{edge.label}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              <p className="font-semibold text-muted-foreground">Haz clic en un nodo para ver más información</p>
            )}

            {/* Leyenda */}
            <div className="border-t-4 border-foreground pt-6 mt-6">
              <h4 className="toxemia-heading text-lg mb-4">Leyenda</h4>
              <div className="space-y-3 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-foreground"></div>
                  <span>Fondos de Inversión</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-foreground"></div>
                  <span>Corporaciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-foreground"></div>
                  <span>Químicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-destructive"></div>
                  <span>Outcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t-4 border-foreground pt-8 text-center">
          <Link href="/">
            <a className="toxemia-button">Volver al Inicio</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

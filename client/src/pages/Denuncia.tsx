import { Link } from "wouter";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  claim: string;
  reality: string;
  edcs: string[];
  reports: number;
  severity: "crítica" | "alta" | "media";
}

export default function Denuncia() {
  const [filterCategory, setFilterCategory] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const products: Product[] = [
    {
      id: "1",
      name: "Botellas BPA-Free",
      brand: "Múltiples marcas",
      category: "bebidas",
      claim: "Sin BPA - 100% seguro",
      reality: "Contienen BPS o BPF (igual de tóxicos, no regulados)",
      edcs: ["BPS", "BPF"],
      reports: 342,
      severity: "crítica"
    },
    {
      id: "2",
      name: "Protector Solar Químico",
      brand: "Múltiples marcas",
      category: "cuidado-personal",
      claim: "Protección UV completa - Natural",
      reality: "Contiene oxibenzona, avobenzona (EDCs que se absorben por la piel)",
      edcs: ["Oxibenzona", "Avobenzona"],
      reports: 287,
      severity: "alta"
    },
    {
      id: "3",
      name: "Champú 'Sin Parabenos'",
      brand: "Múltiples marcas",
      category: "cuidado-personal",
      claim: "Sin parabenos - Seguro para toda la familia",
      reality: "Contiene ftalatos en 'fragancia' y otros EDCs sustitutos",
      edcs: ["Ftalatos", "Parabenos alternativos"],
      reports: 198,
      severity: "alta"
    },
    {
      id: "4",
      name: "Ropa 'Resistente a Manchas'",
      brand: "Múltiples marcas",
      category: "ropa",
      claim: "Tecnología anti-manchas - Durabilidad premium",
      reality: "Tratada con PFAS (químicos eternos que nunca se degradan)",
      edcs: ["PFAS", "PFOA"],
      reports: 156,
      severity: "crítica"
    },
    {
      id: "5",
      name: "Sartenes Antiadherentes",
      brand: "Teflon, Circulon, T-fal",
      category: "hogar",
      claim: "Tecnología antiadherente segura - Fácil de limpiar",
      reality: "Revestimiento de PFOA (PFAS) que se libera al calentar",
      edcs: ["PFOA", "PFAS"],
      reports: 421,
      severity: "crítica"
    },
    {
      id: "6",
      name: "Desodorante 'Natural'",
      brand: "Múltiples marcas",
      category: "cuidado-personal",
      claim: "Ingredientes naturales - Sin aluminio",
      reality: "Contiene ftalatos en fragancias y otros EDCs",
      edcs: ["Ftalatos"],
      reports: 203,
      severity: "media"
    },
    {
      id: "7",
      name: "Alimentos en Latas",
      brand: "Múltiples marcas",
      category: "alimentos",
      claim: "Conservación segura - Nutrientes preservados",
      reality: "Revestimiento interno de BPA que migra al alimento",
      edcs: ["BPA"],
      reports: 512,
      severity: "crítica"
    },
    {
      id: "8",
      name: "Pañales con 'Fragancia Suave'",
      brand: "Múltiples marcas",
      category: "bebes",
      claim: "Suavidad y frescura - Protección total",
      reality: "Fragancia contiene ftalatos en contacto con piel sensible",
      edcs: ["Ftalatos"],
      reports: 189,
      severity: "crítica"
    },
    {
      id: "9",
      name: "Productos de Limpieza 'Eco'",
      brand: "Múltiples marcas",
      category: "hogar",
      claim: "Fórmula ecológica - Segura para el hogar",
      reality: "Contiene ftalatos en fragancias y químicos tóxicos",
      edcs: ["Ftalatos"],
      reports: 167,
      severity: "media"
    },
    {
      id: "10",
      name: "Juguetes de Plástico",
      brand: "Múltiples marcas",
      category: "bebes",
      claim: "Seguro para bebés - Certificado",
      reality: "Contiene ftalatos y BPA que se liberan al masticar",
      edcs: ["Ftalatos", "BPA"],
      reports: 298,
      severity: "crítica"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "alimentos", label: "Alimentos" },
    { id: "bebidas", label: "Bebidas" },
    { id: "cuidado-personal", label: "Cuidado Personal" },
    { id: "hogar", label: "Hogar" },
    { id: "ropa", label: "Ropa" },
    { id: "bebes", label: "Bebés" }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = filterCategory === "todos" || p.category === filterCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.claim.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "crítica": return "bg-destructive text-background";
      case "alta": return "bg-foreground text-background";
      case "media": return "bg-background border-4 border-foreground";
      default: return "bg-muted";
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
            Productos<br />Engañosos
          </h1>
          <div className="toxemia-divider"></div>
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-3xl mb-8">
            Base de datos de productos que usan greenwashing y sustitutos tramposos para ocultar disruptores endocrinos.
          </p>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            Cuando dicen "BPA-free", "natural" o "eco", a menudo están usando químicos igual de tóxicos pero no regulados.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-12 md:mb-16">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Busca marca, producto o claim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border-4 border-foreground bg-background text-foreground font-semibold text-lg placeholder-muted-foreground"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`p-3 border-4 font-black text-center transition-all text-sm ${
                  filterCategory === cat.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16 md:mb-24">
          <div className="mb-6">
            <p className="font-black text-lg">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="toxemia-card border-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="toxemia-heading text-2xl md:text-3xl">{product.name}</h3>
                      <span className={`px-3 py-1 font-black text-xs uppercase border-2 border-foreground ${getSeverityColor(product.severity)}`}>
                        {product.severity}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-semibold text-muted-foreground mb-4">{product.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-muted-foreground">Denuncias</p>
                    <p className="text-3xl md:text-4xl font-black">{product.reports}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-foreground pl-4">
                    <p className="text-xs font-black text-muted-foreground uppercase mb-2">Lo que dicen</p>
                    <p className="text-base md:text-lg font-semibold">{product.claim}</p>
                  </div>
                  <div className="border-l-4 border-destructive pl-4">
                    <p className="text-xs font-black text-muted-foreground uppercase mb-2">La realidad</p>
                    <p className="text-base md:text-lg font-semibold">{product.reality}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black text-muted-foreground uppercase mb-3">Disruptores detectados</p>
                  <div className="flex flex-wrap gap-2">
                    {product.edcs.map((edc, idx) => (
                      <span key={idx} className="px-3 py-1 bg-foreground text-background font-black text-xs uppercase">
                        {edc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Report Section */}
        <section className="mb-16 md:mb-24 bg-foreground text-background p-8 md:p-12 border-4 border-foreground">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-6 text-background">¿Encontraste un Producto Engañoso?</h2>
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-8">
            La base de datos crece con denuncias ciudadanas. Si encuentras un producto con greenwashing o sustitutos tramposos, reporta aquí.
          </p>
          <button className="bg-background text-foreground px-8 py-4 font-black text-lg uppercase border-4 border-background hover:bg-foreground hover:text-background transition-all">
            Reportar Producto
          </button>
        </section>

        {/* Education */}
        <section className="mb-16 md:mb-24">
          <h2 className="toxemia-heading text-3xl md:text-4xl mb-8">Cómo Identificar Greenwashing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Palabra Clave: 'Fragancia'",
                desc: "Término legal para ocultar ftalatos. Si dice 'fragancia' o 'parfum', contiene EDCs."
              },
              {
                title: "El Truco del 'BPA-Free'",
                desc: "Reemplazaron BPA con BPS o BPF. Igual de tóxicos, pero no regulados."
              },
              {
                title: "Certificaciones Falsas",
                desc: "Busca certificaciones oficiales (GOTS, ECOCERT). 'Natural' y 'eco' no significan nada."
              },
              {
                title: "Ausencia de Ingredientes",
                desc: "Si no listan ingredientes, hay algo que ocultar. Desconfía."
              },
              {
                title: "Promesas Imposibles",
                desc: "'100% seguro' no existe. Todo tiene riesgo. Desconfía de promesas absolutas."
              },
              {
                title: "Marca Desconocida",
                desc: "Las 11 corporaciones controlan el 90%. Marcas 'nuevas' suelen ser subsidiarias."
              }
            ].map((item, idx) => (
              <div key={idx} className="toxemia-card border-4">
                <h3 className="toxemia-heading text-xl md:text-2xl mb-3">{item.title}</h3>
                <p className="text-base md:text-lg font-semibold">{item.desc}</p>
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

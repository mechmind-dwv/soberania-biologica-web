import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="border-b-4 border-foreground">
        <div className="container py-6 md:py-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="toxemia-bracket">[</div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">TOXEMIA</h1>
            <div className="toxemia-bracket">]</div>
          </div>
          <nav className="flex gap-4 md:gap-8">
            {isAuthenticated ? (
              <>
                <span className="text-sm md:text-base font-bold">{user?.name}</span>
                <button
                  onClick={logout}
                  className="toxemia-button text-xs md:text-sm px-4 md:px-6 py-2 md:py-3"
                >
                  Salir
                </button>
              </>
            ) : (
              <a
                href={getLoginUrl()}
                className="toxemia-button text-xs md:text-sm px-4 md:px-6 py-2 md:py-3"
              >
                Entrar
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-foreground py-16 md:py-24 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="toxemia-heading text-4xl md:text-6xl mb-6">
                Soberanía<br />Biológica
              </h2>
              <p className="text-base md:text-lg font-semibold leading-relaxed mb-8">
                Plataforma de denuncia colectiva sobre disruptores endocrinos, poder corporativo y la normalización del daño biológico.
              </p>
              <div className="flex gap-4">
                <Link href="/manifiesto">
                  <a className="toxemia-button text-sm md:text-base">Leer Manifiesto</a>
                </Link>
                <Link href="/mapa">
                  <a className="toxemia-button text-sm md:text-base bg-background text-foreground">Explorar Mapa</a>
                </Link>
              </div>
            </div>
            <div className="toxemia-card">
              <div className="text-6xl md:text-8xl font-black mb-4">⚠️</div>
              <h3 className="toxemia-heading text-2xl md:text-3xl mb-4">Crisis Silenciosa</h3>
              <p className="font-semibold">
                11 corporaciones controlan lo que comemos. BlackRock y Vanguard controlan a esas corporaciones. Y los disruptores endocrinos controlan nuestras hormonas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-12">Funcionalidades</h2>
          <div className="toxemia-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Manifiesto", desc: "Declaración fundamentada en ciencia" },
              { num: "02", title: "Mapa del Poder", desc: "Conexiones corporativas expuestas" },
              { num: "03", title: "Therians & Toxicidad", desc: "La hipótesis del daño biológico" },
              { num: "04", title: "Desobediencia Química", desc: "Guía práctica del Dr. Olea" },
              { num: "05", title: "Denuncia Ciudadana", desc: "Reporta greenwashing y engaños" },
              { num: "06", title: "Biblioteca", desc: "Estudios e informes científicos" },
            ].map((feature, idx) => (
              <div key={idx} className="border-4 border-foreground p-8 hover:bg-foreground hover:text-background transition-all">
                <div className="text-4xl font-black mb-4">{feature.num}</div>
                <h3 className="toxemia-heading text-xl mb-2">{feature.title}</h3>
                <p className="font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t-4 border-b-4 border-foreground bg-foreground text-background py-16 md:py-24 px-4">
        <div className="container text-center">
          <h2 className="toxemia-heading text-4xl md:text-5xl mb-6 text-background">
            Únete a la Resistencia
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-8 max-w-2xl mx-auto">
            La verdadera libertad no es elegir una identidad. Es tener el derecho a una biología no alterada por intereses comerciales.
          </p>
          {!isAuthenticated && (
            <a href={getLoginUrl()} className="inline-block bg-background text-foreground px-8 py-4 font-black text-lg uppercase tracking-tight border-4 border-background hover:bg-foreground hover:text-background hover:border-background transition-all">
              Registrarse Ahora
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground py-8 px-4">
        <div className="container text-center text-sm font-semibold">
          <p>TOXEMIA © 2026 | Plataforma de Denuncia Colectiva</p>
          <p className="mt-2">Fundamentada en investigaciones del Dr. Nicolás Olea</p>
        </div>
      </footer>
    </div>
  );
}

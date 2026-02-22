import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hola. Soy TOXEMIA AI, especialista en disruptores endocrinos. Puedo ayudarte a:\n\n• Identificar químicos peligrosos en etiquetas de productos\n• Explicar cómo los EDCs afectan tu salud y la de tus hijos\n• Interpretar estudios científicos sobre disruptores endocrinos\n• Responder preguntas sobre la hipótesis Therian-toxicidad\n• Sugerir alternativas seguras a productos tóxicos\n• Conectar síntomas con exposición a EDCs\n\n¿Qué quieres saber?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    "¿Qué es un disruptor endocrino?",
    "¿Cómo identifico BPA en etiquetas?",
    "¿Cuáles son los síntomas de exposición a EDCs?",
    "¿Qué relación hay entre EDCs y Therians?",
    "¿Qué alternativas seguras existen al BPA?",
    "¿Cómo protejo a mis hijos de EDCs?",
    "¿Qué son los PFAS y por qué son peligrosos?",
    "¿Cómo interpreto un estudio científico sobre EDCs?"
  ];

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, this would call the Forge API)
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        "bpa": "El BPA (Bisfenol A) es un disruptor endocrino que actúa como un estrógeno sintético en el cuerpo. Interfiere con el sistema hormonal, especialmente durante el desarrollo prenatal y la infancia. El Dr. Nicolás Olea ha demostrado que el BPA:\n\n• Altera el desarrollo del cerebro y el sistema reproductivo\n• Causa problemas de fertilidad en hombres y mujeres\n• Aumenta el riesgo de obesidad, diabetes y enfermedades cardiovasculares\n• Está presente en el 93% de la población mundial\n\nEl BPA se encuentra en: botellas de plástico, latas de alimentos, recibos térmicos, composites dentales y miles de productos de consumo.",
        "therian": "La hipótesis de TOXEMIA es que el fenómeno Therian (jóvenes que se identifican como animales) puede estar vinculado a alteraciones neurotóxicas causadas por disruptores endocrinos.\n\nCuando el cerebro en desarrollo es expuesto a EDCs:\n\n• El sistema límbico se altera (emociones, identidad, memoria)\n• Las hormonas sexuales se disrumpen (desconexión de identidad sexual)\n• La neurotransmisión se afecta (dopamina, serotonina alteradas)\n\nJóvenes con alteraciones en estos sistemas pueden experimentar una desconexión profunda de su cuerpo y buscar identidades alternativas. No es una moda. Es una respuesta biológica a un entorno tóxico.",
        "proteger": "Aquí están las formas más efectivas de proteger a tus hijos de EDCs:\n\n🍽️ ALIMENTACIÓN:\n• Compra alimentos en vidrio, no en plástico\n• Elige orgánico certificado\n• Filtra el agua potable\n• Evita alimentos ultraprocesados\n\n🏠 HOGAR:\n• Reemplaza sartenes teflón por acero inoxidable\n• Usa productos de limpieza naturales\n• Evita ambientadores y velas perfumadas\n• Ventila regularmente\n\n🧴 CUIDADO PERSONAL:\n• Evita cosméticos con 'fragancia'\n• Usa protector solar mineral\n• Elige ropa de algodón orgánico\n• Evita productos con parabenos\n\n👶 BEBÉS:\n• Usa botellas de vidrio o acero\n• Evita juguetes de plástico\n• Elige pañales sin fragancia\n• Compra ropa orgánica",
        "pfas": "Los PFAS (per- y polyfluoroalquil sustancias) son 'químicos eternos' que:\n\n• Nunca se degradan en el medio ambiente\n• Se bioacumulan en el cuerpo humano\n• Están en el 97% de la población estadounidense\n• Contaminan el agua potable de millones\n\nLos PFAS se encuentran en:\n• Ropa 'resistente a manchas'\n• Envases de comida rápida\n• Sartenes antiadherentes\n• Espumas contra incendios\n• Cosméticos\n\nLos PFAS alteran: sistema inmune, fertilidad, desarrollo fetal, metabolismo. No hay forma segura de exponerse a PFAS.",
        "alternativas": "Aquí están las alternativas seguras a productos tóxicos:\n\n🍽️ EN LUGAR DE PLÁSTICO:\n• Vidrio (botellas, tuppers, jarras)\n• Acero inoxidable (botellas, cubiertos)\n• Cerámica (platos, tazas)\n• Madera (tablas de cortar, cucharas)\n\n🍳 EN LUGAR DE TEFLÓN:\n• Acero inoxidable\n• Hierro fundido\n• Cerámica\n• Vidrio\n\n🧴 EN LUGAR DE COSMÉTICOS QUÍMICOS:\n• Aceites esenciales puros\n• Productos certificados GOTS\n• Marcas independientes sin fragancia\n• Ingredientes naturales verificados\n\n👕 EN LUGAR DE ROPA SINTÉTICA:\n• Algodón orgánico certificado\n• Lino\n• Lana merino\n• Evita 'resistente a manchas' y 'impermeable'",
        "default": "Esa es una excelente pregunta. Basándome en investigaciones del Dr. Nicolás Olea y consenso científico internacional:\n\nLos disruptores endocrinos son químicos que interfieren con el sistema hormonal. Actúan como hormonas sintéticas, alterando el desarrollo, reproducción, metabolismo y comportamiento.\n\nLos EDCs más comunes son:\n• BPA (Bisfenol A)\n• Ftalatos\n• PFAS\n• Pesticidas\n• Parabenos\n\nAfectan especialmente durante:\n• Embarazo\n• Infancia\n• Adolescencia\n\n¿Quieres saber más sobre alguno en particular?"
      };

      let response = responses.default;
      const lowerInput = text.toLowerCase();

      if (lowerInput.includes("bpa")) response = responses.bpa;
      else if (lowerInput.includes("therian")) response = responses.therian;
      else if (lowerInput.includes("proteg")) response = responses.proteger;
      else if (lowerInput.includes("pfas")) response = responses.pfas;
      else if (lowerInput.includes("alternativa")) response = responses.alternativas;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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

      <main className="flex-1 container py-8 flex flex-col">
        {/* Title */}
        <div className="mb-8">
          <h1 className="toxemia-heading text-4xl md:text-5xl mb-2">TOXEMIA AI</h1>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            Especialista en disruptores endocrinos
          </p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 flex flex-col border-4 border-foreground bg-background">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg font-semibold text-muted-foreground">
                  Inicia una conversación
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-2xl p-4 border-4 ${
                      message.role === "user"
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background border-foreground"
                    }`}
                  >
                    <p className="text-base font-semibold whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-2xl p-4 border-4 border-foreground bg-background">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-foreground rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-3 h-3 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-4 border-foreground p-6 space-y-4">
            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-xs font-black text-muted-foreground uppercase mb-3">Preguntas sugeridas</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {suggestedQuestions.slice(0, 4).map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(question)}
                      className="p-3 border-2 border-foreground font-semibold text-sm text-left hover:bg-foreground hover:text-background transition-all"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Field */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !isLoading) {
                    handleSendMessage(input);
                  }
                }}
                placeholder="Escribe tu pregunta..."
                className="flex-1 p-3 border-4 border-foreground bg-background text-foreground font-semibold placeholder-muted-foreground"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-foreground text-background font-black uppercase border-4 border-foreground hover:bg-background hover:text-foreground disabled:opacity-50 transition-all"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t-4 border-foreground pt-8 mt-8">
          <Link href="/">
            <a className="toxemia-button">Volver al Inicio</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Manifiesto from "./pages/Manifiesto";
import MapaPoder from "./pages/MapaPoder";
import Therians from "./pages/Therians";
import Guia from "./pages/Guia";
import Denuncia from "./pages/Denuncia";
import Biblioteca from "./pages/Biblioteca";
import Accion from "./pages/Accion";
import TimelinePage from "./pages/Timeline";
import Chatbot from "./pages/Chatbot";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/manifiesto"} component={Manifiesto} />
      <Route path={"/mapa"} component={MapaPoder} />
      <Route path={"/therians"} component={Therians} />
      <Route path={"/guia"} component={Guia} />
      <Route path={"/denuncia"} component={Denuncia} />
      <Route path={"/biblioteca"} component={Biblioteca} />
      <Route path={"/accion"} component={Accion} />
      <Route path={"/timeline"} component={TimelinePage} />
      <Route path={"/chatbot"} component={Chatbot} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router base="/jayagovind">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Routes />
        </TooltipProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
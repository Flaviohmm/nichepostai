import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Clock, TrendingUp } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-up">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-secondary-foreground">
                            Powered by AI • Feito para Nutricionistas
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100 leading-tight">
                        Gere posts perfeitos para Instagram de{" "}
                        <span className="text-gradient">nutricionistas</span> em segundos
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
                        Economize horas criando conteúdo. Nossa IA especializada cria legendas
                        otimizadas, hashtags estratégicas e sugestões de imagens que aumentam
                        seu engajamento.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
                        <Link to="/signup">
                            <Button variant="hero" size="xl" className="group">
                                Começar Grátis
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="#features">
                            <Button variant="heroOutline" size="xl">
                                Ver Funcionalidades
                            </Button>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-up animation-delay-400">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-sm">10 posts grátis/mês</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-sm">Resultados em segundos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="text-sm">+500% engajamento</span>
                        </div>
                    </div>
                </div>

                {/* Preview Mockup */}
                <div className="mt-16 md:mt-24 max-w-5xl mx-auto animate-fade-up animation-delay-400">
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur-2xl" />

                        {/* Mockup card */}
                        <div className="relative bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                            {/* Browser header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="px-4 py-1 rounded-full bg-background/80 text-xs text-muted-foreground">
                                        app.nichepostai.com
                                    </div>
                                </div>
                            </div>

                            {/* Content preview */}
                            <div className="p-6 md:p-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Form side */}
                                    <div className="space-y-4">
                                        <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                                        <div className="h-10 w-full bg-muted rounded-lg" />
                                        <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                                        <div className="h-10 w-full bg-muted rounded-lg" />
                                        <div className="h-12 w-full bg-gradient-primary rounded-lg shadow-soft" />
                                    </div>

                                    {/* Result side */}
                                    <div className="space-y-4 p-4 bg-accent/50 rounded-xl">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                            <div className="h-4 w-32 bg-primary/20 rounded" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-3 w-full bg-muted rounded" />
                                            <div className="h-3 w-full bg-muted rounded" />
                                            <div className="h-3 w-4/5 bg-muted rounded" />
                                            <div className="h-3 w-3/5 bg-muted rounded" />
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <div className="h-6 w-20 bg-primary/20 rounded-full" />
                                            <div className="h-6 w-24 bg-primary/20 rounded-full" />
                                            <div className="h-6 w-16 bg-primary/20 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

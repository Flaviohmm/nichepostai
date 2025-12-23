import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-8 flex items-center justify-center shadow-glow animate-float">
                        <Sparkles className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Pronto para{" "}
                        <span className="text-gradient">transformar</span> seu Instagram?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Junte-se a milhares de nutricionistas que já economizam horas toda semana
                        e aumentaram seu engajamento com o NichePost AI.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/signup">
                            <Button variant="hero" size="xl" className="group">
                                Começar Grátis Agora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <p className="text-muted-foreground text-sm mt-8">
                        ✨ 10 posts grátis • 🔒 Sem cartão de crédito • ⚡ Pronto em 30 segundos
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

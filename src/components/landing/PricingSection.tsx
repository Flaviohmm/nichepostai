import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
    {
        name: "Grátis",
        description: "Perfeito para começar",
        price: "R$0",
        period: "para sempre",
        icon: Sparkles,
        features: [
            "10 gerações por mês",
            "Legendas otimizadas",
            "Hashtags básicas",
            "1 tom de voz",
            "Histórico de 7 dias",
        ],
        cta: "Começar Grátis",
        popular: false,
    },
    {
        name: "Pro",
        description: "Para criadores sérios",
        price: "R$49",
        period: "/mês",
        icon: Zap,
        features: [
            "Gerações ilimitadas",
            "Todos os tons de voz",
            "Hashtags avançadas",
            "Sugestões de imagem",
            "Carrosséis e Stories",
            "Histórico ilimitado",
            "Exportar conteúdo",
            "Suporte prioritário",
        ],
        cta: "Assinar Pro",
        popular: true,
    },
    {
        name: "Premium",
        description: "Máxima produtividade",
        price: "R$99",
        period: "/mês",
        icon: Crown,
        features: [
            "Tudo do Pro",
            "Agendamento automático",
            "Análise de performance",
            "Templates exclusivos",
            "API de integração",
            "Múltiplas contas",
            "Consultoria mensal",
            "Suporte VIP 24/7",
        ],
        cta: "Assinar Premium",
        popular: false,
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                        <Crown className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-secondary-foreground">
                            Planos Flexíveis
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Escolha o plano{" "}
                        <span className="text-gradient">ideal para você</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Comece grátis e faça upgrade quando precisar. Cancele a qualquer momento.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative p-6 rounded-2xl border transition-all duration-300 ${plan.popular
                                    ? "bg-card border-primary shadow-glow scale-105"
                                    : "bg-card border-border hover:border-primary/30 hover:shadow-card"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold">
                                        Mais Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${plan.popular ? "bg-primary/20" : "bg-accent"
                                    }`}>
                                    <plan.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                    {plan.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-foreground">
                                    {plan.price}
                                </span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link to="/signup" className="block">
                                <Button
                                    variant={plan.popular ? "hero" : "outline"}
                                    className="w-full"
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Trust note */}
                <p className="text-center text-muted-foreground text-sm mt-8">
                    💳 Pagamento seguro via Stripe • Cancele quando quiser • Satisfação garantida
                </p>
            </div>
        </section>
    );
};

export default PricingSection;

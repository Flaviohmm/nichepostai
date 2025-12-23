import {
    Sparkles,
    Hash,
    Image,
    LayoutGrid,
    Clock,
    Users,
    Zap,
    Target
} from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Legendas Otimizadas",
        description: "IA especializada em nutrição cria textos persuasivos que conectam com seu público e geram engajamento.",
    },
    {
        icon: Hash,
        title: "Hashtags Estratégicas",
        description: "Hashtags pesquisadas e otimizadas para alcançar mais pessoas interessadas em saúde e nutrição.",
    },
    {
        icon: Image,
        title: "Sugestões de Imagem",
        description: "Descrições detalhadas para criar visuais perfeitos no Canva, Midjourney ou DALL-E.",
    },
    {
        icon: LayoutGrid,
        title: "Carrosséis & Stories",
        description: "Gere conteúdo completo para diferentes formatos do Instagram com um único clique.",
    },
    {
        icon: Clock,
        title: "Economize Tempo",
        description: "Crie em segundos o que levaria horas. Mais tempo para cuidar dos seus pacientes.",
    },
    {
        icon: Target,
        title: "Público Segmentado",
        description: "Personalize o tom e estilo para diferentes públicos: mulheres 30+, atletas, iniciantes.",
    },
    {
        icon: Users,
        title: "Tom de Voz Único",
        description: "Escolha entre motivacional, educativo, divertido ou científico para manter sua identidade.",
    },
    {
        icon: Zap,
        title: "Múltiplos Posts",
        description: "Gere até 10 variações por vez. Planeje sua semana de conteúdo em minutos.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-secondary-foreground">
                            Funcionalidades Poderosas
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Tudo que você precisa para{" "}
                        <span className="text-gradient">dominar o Instagram</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Ferramentas especializadas criadas para nutricionistas, coaches de saúde
                        e profissionais de fitness que querem crescer online.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

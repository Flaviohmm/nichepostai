import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dra. Camila Santos",
        role: "Nutricionista Esportiva",
        avatar: "CS",
        content: "O NichePost AI revolucionou minha produção de conteúdo. Antes eu passava horas criando posts, agora faço em minutos. Meu engajamento aumentou 300% no primeiro mês!",
        rating: 5,
    },
    {
        name: "Ricardo Mendes",
        role: "Coach de Emagrecimento",
        avatar: "RM",
        content: "Finalmente uma ferramenta que entende o nicho de nutrição! As legendas são profissionais e conectam de verdade com meus seguidores. Recomendo demais.",
        rating: 5,
    },
    {
        name: "Ana Paula Lima",
        role: "Nutricionista Clínica",
        avatar: "AL",
        content: "As hashtags sugeridas são incríveis. Meus posts começaram a aparecer para muito mais pessoas. Consegui 500 novos seguidores em 2 semanas!",
        rating: 5,
    },
    {
        name: "Dr. Fernando Costa",
        role: "Personal Trainer",
        avatar: "FC",
        content: "Uso o plano Pro e vale cada centavo. A variedade de tons de voz é perfeita para diferentes tipos de post. Minha agenda está lotada de clientes novos.",
        rating: 5,
    },
    {
        name: "Juliana Oliveira",
        role: "Nutricionista Funcional",
        avatar: "JO",
        content: "As sugestões de imagem são fantásticas! Combino com o Canva e crio posts lindos em minutos. Meus pacientes sempre elogiam meu conteúdo.",
        rating: 5,
    },
    {
        name: "Marcelo Dias",
        role: "Coach de Saúde",
        avatar: "MD",
        content: "O NichePost AI entende exatamente o que meu público quer ouvir. Os carrosséis educativos que crio são os posts com maior salvamento e compartilhamento.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm font-medium text-secondary-foreground">
                            Amado por Profissionais
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Veja o que nossos{" "}
                        <span className="text-gradient">usuários dizem</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Milhares de nutricionistas e coaches já transformaram sua presença
                        digital com o NichePost AI.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

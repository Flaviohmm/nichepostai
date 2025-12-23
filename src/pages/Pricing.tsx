import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim! Você pode cancelar sua assinatura a qualquer momento diretamente pelo dashboard. Seu plano continua ativo até o final do período pago.",
    },
    {
        question: "Como funciona o plano gratuito?",
        answer: "O plano gratuito oferece 10 gerações de conteúdo por mês, perfeito para experimentar a ferramenta. Você pode fazer upgrade a qualquer momento para desbloquear mais recursos.",
    },
    {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos cartões de crédito/débito (Visa, Mastercard, Amex) e PIX através do Stripe, nosso processador de pagamentos seguro.",
    },
    {
        question: "O conteúdo gerado é único?",
        answer: "Sim! Cada conteúdo é gerado de forma única pela IA, baseado nas suas especificações. Você recebe textos originais e personalizados para seu nicho.",
    },
    {
        question: "Posso usar para múltiplas contas do Instagram?",
        answer: "O plano Premium permite gerenciar múltiplas contas. Nos planos Grátis e Pro, você pode usar para uma conta principal.",
    },
    {
        question: "Vocês oferecem suporte?",
        answer: "Sim! Oferecemos suporte por email para todos os planos. Usuários Pro têm suporte prioritário e Premium têm acesso a suporte VIP 24/7.",
    },
];

const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Preços - NichePost AI</title>
                <meta name="description" content="Escolha o plano ideal para suas necessidades. Comece grátis com 10 posts por mês ou faça upgrade para recursos ilimitados." />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

                <main className="pt-16">
                    {/* Pricing Section */}
                    <PricingSection />

                    {/* FAQ Section */}
                    <section className="py-20 md:py-32 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                                    <MessageCircleQuestion className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-secondary-foreground">
                                        Perguntas Frequentes
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Dúvidas? Temos respostas!
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Confira as perguntas mais comuns sobre o NichePost AI.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {faqs.map((faq) => (
                                    <div
                                        key={faq.question}
                                        className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-shadow"
                                    >
                                        <h3 className="text-lg font-semibold text-foreground mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <CTASection />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Pricing;

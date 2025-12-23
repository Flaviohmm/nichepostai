import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Termos de Uso - NichePost AI</title>
                <meta name="description" content="Termos de uso do NichePost AI - Gerador de posts Instagram para nutricionistas." />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

                <main className="pt-24 pb-20">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            Termos de Uso
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground mb-8">
                                Última atualização: {new Date().toLocaleDateString('pt-BR')}
                            </p>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                                <p>
                                    Ao acessar e usar o NichePost AI, você concorda com estes Termos de Uso.
                                    Se você não concordar com algum termo, não deve usar nosso serviço.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
                                <p>
                                    O NichePost AI é uma plataforma de geração de conteúdo usando inteligência artificial,
                                    especializada em criar posts para Instagram voltados para nutricionistas,
                                    coaches de saúde e profissionais de fitness.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">3. Uso do Serviço</h2>
                                <p>Você concorda em:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Fornecer informações precisas ao se registrar</li>
                                    <li>Manter a segurança de sua conta e senha</li>
                                    <li>Não usar o serviço para fins ilegais ou não autorizados</li>
                                    <li>Não violar direitos de propriedade intelectual</li>
                                    <li>Não compartilhar acesso com terceiros</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">4. Conteúdo Gerado</h2>
                                <p>
                                    O conteúdo gerado pela IA é de sua propriedade após a geração. No entanto,
                                    você é responsável por revisar e verificar a precisão das informações antes de publicá-las,
                                    especialmente informações relacionadas à saúde e nutrição.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">5. Pagamentos e Reembolsos</h2>
                                <p>
                                    Os planos pagos são cobrados mensalmente. Você pode cancelar a qualquer momento,
                                    e seu acesso continuará até o final do período pago. Não oferecemos reembolsos por
                                    períodos parciais de uso.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitação de Responsabilidade</h2>
                                <p>
                                    O NichePost AI é fornecido "como está". Não garantimos que o serviço será ininterrupto,
                                    seguro ou livre de erros. Não somos responsáveis por danos indiretos, incidentais ou
                                    consequentes resultantes do uso do serviço.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">7. Alterações nos Termos</h2>
                                <p>
                                    Podemos modificar estes termos a qualquer momento. Notificaremos sobre mudanças
                                    significativas por email ou através do serviço. O uso continuado após as mudanças
                                    constitui aceitação dos novos termos.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">8. Contato</h2>
                                <p>
                                    Para questões sobre estes Termos de Uso, entre em contato conosco em:
                                    suporte@nichepostai.com
                                </p>
                            </section>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Terms;

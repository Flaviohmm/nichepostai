import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>Política de Privacidade - NichePost AI</title>
                <meta name="description" content="Política de privacidade do NichePost AI - Como protegemos seus dados." />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

                <main className="pt-24 pb-20">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                            Política de Privacidade
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-sm text-muted-foreground mb-8">
                                Última atualização: {new Date().toLocaleDateString('pt-BR')}
                            </p>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">1. Introdução</h2>
                                <p>
                                    O NichePost AI ("nós", "nosso" ou "nossos") está comprometido com a proteção
                                    da sua privacidade. Esta política explica como coletamos, usamos e protegemos
                                    suas informações pessoais.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
                                <p>Coletamos as seguintes informações:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Informações de conta:</strong> nome, email e senha</li>
                                    <li><strong>Dados de uso:</strong> conteúdo gerado, preferências e configurações</li>
                                    <li><strong>Informações de pagamento:</strong> processadas de forma segura pelo Stripe</li>
                                    <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, dispositivo</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">3. Como Usamos suas Informações</h2>
                                <p>Utilizamos suas informações para:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Fornecer e melhorar nossos serviços</li>
                                    <li>Processar pagamentos e gerenciar assinaturas</li>
                                    <li>Enviar comunicações sobre sua conta</li>
                                    <li>Personalizar sua experiência</li>
                                    <li>Analisar uso e melhorar a plataforma</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">4. Compartilhamento de Dados</h2>
                                <p>
                                    Não vendemos suas informações pessoais. Podemos compartilhar dados com:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Stripe:</strong> para processamento de pagamentos</li>
                                    <li><strong>OpenAI/Provedores de IA:</strong> para gerar conteúdo</li>
                                    <li><strong>Serviços de hospedagem:</strong> para armazenamento de dados</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">5. Segurança de Dados</h2>
                                <p>
                                    Implementamos medidas de segurança técnicas e organizacionais para proteger
                                    suas informações, incluindo criptografia, controle de acesso e monitoramento
                                    contínuo de segurança.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">6. Seus Direitos</h2>
                                <p>Você tem direito a:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Acessar seus dados pessoais</li>
                                    <li>Corrigir informações incorretas</li>
                                    <li>Excluir sua conta e dados</li>
                                    <li>Exportar seus dados</li>
                                    <li>Optar por não receber comunicações de marketing</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
                                <p>
                                    Usamos cookies essenciais para funcionamento do serviço e cookies analíticos
                                    para entender como você usa nossa plataforma. Você pode gerenciar preferências
                                    de cookies nas configurações do seu navegador.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">8. Retenção de Dados</h2>
                                <p>
                                    Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário
                                    para fornecer serviços. Após exclusão da conta, mantemos dados por 30 dias
                                    para fins de backup, depois são permanentemente excluídos.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">9. Alterações nesta Política</h2>
                                <p>
                                    Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças
                                    significativas por email ou através do serviço.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold text-foreground mb-4">10. Contato</h2>
                                <p>
                                    Para questões sobre privacidade ou seus dados, entre em contato:
                                    privacidade@nichepostai.com
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

export default Privacy;

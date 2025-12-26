import { Link } from "react-router-dom";
import { Sparkles, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl">
                                NichePost<span className="text-primary">AI</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-6">
                            A ferramenta de IA #1 para criar conteúdo Instagram de nutricionistas
                            e profissionais de saúde.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Produto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Funcionalidades
                                </a>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Preços
                                </Link>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Atualizações
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-muted/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-muted-foreground text-sm">
                            © 2024 NichePost AI. Todos os direitos reservados.
                        </p>
                        <p className="text-muted-foreground text-sm">
                            Feito com 💚 para nutricionistas
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

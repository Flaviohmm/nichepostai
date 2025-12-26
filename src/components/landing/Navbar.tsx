import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
                            <Sparkles className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-xl text-foreground">
                            NichePost<span className="text-primary">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                            Início
                        </Link>
                        <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                            Preços
                        </Link>
                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                            Funcionaliades
                        </a>
                        <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                            Depoimentos
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Link to="/login">
                            <Button variant="ghost" size="sm">
                                Entrar
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="hero" size="sm">
                                Começar Grátis
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-4">
                            <Link
                                to="/"
                                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Início
                            </Link>
                            <Link
                                to="/pricing"
                                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Preços
                            </Link>
                            <a
                                href="#features"
                                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Funcionalidades
                            </a>
                            <a
                                href="#testimonials"
                                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Depoimentos
                            </a>
                            <div className="flex flex-col gap-2 pt-4 border-t border-border">
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-muted-foreground">Tema</span>
                                    <ThemeToggle />
                                </div>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="outline" className="w-full">
                                        Entrar
                                    </Button>
                                </Link>
                                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="hero" className="w-full">
                                        Começar Grátis
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

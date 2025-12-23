import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Mail, Lock, User, ArrowRight, Chrome, Check } from "lucide-react";
import { toast } from "sonner";

const benefits = [
    "10 posts grátis por mês",
    "Legendas otimizadas para nutricionistas",
    "Hashtags estratégicas incluídas",
    "Sem cartão de crédito",
];

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Placeholder for authentication
        setTimeout(() => {
            toast.info("Para habilitar signup, conecte o Lovable Cloud.");
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <Helmet>
                <title>Criar Conta - NichePost AI</title>
                <meta name="description" content="Crie sua conta grátis no NichePost AI e comece a gerar posts incríveis para Instagram." />
            </Helmet>

            <div className="min-h-screen bg-gradient-hero flex">
                {/* Left side - Benefits */}
                <div className="hidden lg:flex lg:w-1/2 bg-foreground p-12 flex-col justify-center relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full" />
                        <div className="absolute bottom-40 right-20 w-60 h-60 border border-primary rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-md">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-2xl text-background">
                                NichePost<span className="text-primary">AI</span>
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-background mb-4">
                            Comece a criar conteúdo incrível hoje
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Junte-se a milhares de nutricionistas que já transformaram sua presença no Instagram.
                        </p>

                        {/* Benefits list */}
                        <ul className="space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-background/80">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
                    {/* Background decorations */}
                    <div className="absolute inset-0 overflow-hidden lg:hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                    </div>

                    <div className="w-full max-w-md relative z-10">
                        {/* Mobile Logo */}
                        <Link to="/" className="flex items-center justify-center gap-2 mb-8 lg:hidden">
                            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-2xl text-foreground">
                                NichePost<span className="text-primary">AI</span>
                            </span>
                        </Link>

                        {/* Card */}
                        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-foreground mb-2">
                                    Crie sua conta grátis
                                </h1>
                                <p className="text-muted-foreground">
                                    Comece a gerar posts incríveis em segundos
                                </p>
                            </div>

                            {/* Google Login */}
                            <Button
                                variant="outline"
                                className="w-full mb-6 h-12"
                                onClick={() => toast.info("Para habilitar Google signup, conecte o Lovable Cloud.")}
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Continuar com Google
                            </Button>

                            {/* Divider */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-card text-muted-foreground">ou</span>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome completo</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Seu nome"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="pl-10 h-12"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10 h-12"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Mínimo 8 caracteres"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-10 h-12"
                                            required
                                            minLength={8}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    className="w-full h-12"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        "Criando conta..."
                                    ) : (
                                        <>
                                            Criar Conta Grátis
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            {/* Terms */}
                            <p className="text-center text-muted-foreground text-xs mt-4">
                                Ao criar conta, você concorda com nossos{" "}
                                <Link to="/terms" className="text-primary hover:underline">
                                    Termos de Uso
                                </Link>{" "}
                                e{" "}
                                <Link to="/privacy" className="text-primary hover:underline">
                                    Política de Privacidade
                                </Link>
                            </p>

                            {/* Login link */}
                            <p className="text-center text-muted-foreground mt-6">
                                Já tem uma conta?{" "}
                                <Link to="/login" className="text-primary font-medium hover:underline">
                                    Entrar
                                </Link>
                            </p>
                        </div>

                        {/* Back to home */}
                        <p className="text-center mt-6">
                            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                ← Voltar para o início
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
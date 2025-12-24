import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Mail, Lock, ArrowRight, Chrome } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { signIn, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await signIn(email, password);

        if (error) {
            toast.error(error.message || "Erro ao fazer login. Verifique suas credenciais.");
        } else {
            toast.success("Login realizado com sucesso!");
            navigate("/dashboard");
        }

        setIsLoading(false);
    };

    return (
        <>
            <Helmet>
                <title>Entrar - NichePost AI</title>
                <meta name="description" content="Entre na sua conta NichePost AI e comece a criar conteúdo incrível para Instagram." />
            </Helmet>

            <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="w-full max-w-md relative z-10">
                    {/* Logo */}
                    <Link to="/" className="flex items-center justify-center gap-2 mb-8">
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
                                Bem-vindo de volta!
                            </h1>
                            <p className="text-muted-foreground">
                                Entre para continuar criando conteúdo incrível
                            </p>
                        </div>

                        {/* Google Login */}
                        <Button
                            variant="outline"
                            className="w-full mb-6 h-12"
                            onClick={() => toast.info("Para habilitar Google login, conecte o Lovable Cloud.")}
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
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Senha</Label>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 h-12"
                                        required
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
                                    "Entrando..."
                                ) : (
                                    <>
                                        Entrar
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>

                        {/* Sign up link */}
                        <p className="text-center text-muted-foreground mt-6">
                            Não tem uma conta?{" "}
                            <Link to="/signup" className="text-primary font-medium hover:underline">
                                Criar conta grátis
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
        </>
    );
};

export default Login;

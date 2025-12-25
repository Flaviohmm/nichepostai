import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Sparkles,
    Home,
    CreditCard,
    History,
    Settings,
    LogOut,
    Wand2,
    Copy,
    Download,
    Zap,
    User
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useCredits } from "@/hooks/useCredits";
import { useGenerations } from "@/hooks/useGenerations";

const Dashboard = () => {
    const { user, loading, signOut } = useAuth();
    const { credits, loading: creditsLoading, useCredit, hasCredits } = useCredits();
    const { saveGeneration } = useGenerations();
    const navigate = useNavigate();
    const [topic, setTopic] = useState("");
    const [tone, setTone] = useState("");
    const [audience, setAudience] = useState("");
    const [postCount, setPostCount] = useState("1");
    const [includeHashtags, setIncludeHashtags] = useState(true);
    const [includeEmojis, setIncludeEmojis] = useState(true);
    const [includeCTA, setIncludeCTA] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !user) {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    const handleLogout = async () => {
        await signOut();
        toast.success("Logout realizado com sucesso!");
        navigate("/");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-muted/30 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    const handleGenerate = async () => {
        if (!topic || !tone || !audience) {
            toast.error("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!hasCredits) {
            toast.error("Você não tem crédito suficientes. Faça upgrade do seu plano!");
            return;
        }

        setIsGenerating(true);

        // Use credit first
        const creditUser = await useCredit(1);
        if (!creditUser) {
            toast.error("Erro ao usar crédito. Tente novamente.");
            setIsGenerating(false);
            return;
        }

        // Placeholder for AI generation
        const content = `🥗 Você sabia que uma alimentação equilibrada pode transformar sua vida?

            Muitas pessoas acham que comer saudável é caro e complicado, mas a verdade é que pequenas mudanças fazem TODA a diferença! 

            ✨ Comece substituindo refrigerantes por água com limão
            ✨ Inclua uma porção de vegetais em cada refeição
            ✨ Planeje suas refeições no domingo

            Seu corpo vai agradecer! 💚

            Qual dessas dicas você vai colocar em prática hoje? Me conta nos comentários! 👇

            #nutrição #alimentaçãosaudável #vidasaudável #saúde #nutri #dicasdenutricao #emagrecimento #qualidadedevida`;

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Save generation to database
        await saveGeneration({
            topic,
            tone,
            audience,
            postCount: parseInt(postCount),
            includeHashtags,
            includeEmojis,
            includeCta: includeCTA,
            generatedContent: content
        });

        setGeneratedContent(content);
        setIsGenerating(false);
        toast.success("Conteúdo gerado com sucesso!");
    };

    const handleCopy = () => {
        if (generatedContent) {
            navigator.clipboard.writeText(generatedContent);
            toast.success("Copiado para a área de transferência!");
        }
    };

    return (
        <>
            <Helmet>
                <title>Dashboard - NichePost AI</title>
            </Helmet>

            <div className="min-h-screen bg-muted/30 flex">
                {/* Sidebar */}
                <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-border">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl text-foreground">
                                NichePost<span className="text-primary">AI</span>
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium"
                                >
                                    <Home className="w-5 h-5" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <History className="w-5 h-5" />
                                    Histórico
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/pricing"
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Planos
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <Settings className="w-5 h-5" />
                                    Configurações
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* User & Plan info */}
                    <div className="p-4 border-t border-border">
                        <div className="p-4 rounded-xl bg-accent mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-foreground">
                                    Plano {credits?.plan === 'free' ? 'Grátis' : credits?.plan === 'pro' ? 'Pro' : 'Premium'}
                                </span>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                                    {creditsLoading ? '...' : `${credits?.credits_used ?? 0}/${(credits?.credits_remaining ?? 0) + (credits?.credits_used ?? 0)} posts`}
                                </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mb-3">
                                <div 
                                    className="bg-primary h-2 rounded-full transition-all" 
                                    style={{ 
                                        width: credits ? `${(credits.credits_used / (credits.credits_remaining + credits.credits_used)) * 100}%` : '0%' 
                                    }}
                                />
                            </div>
                            <Link to="/pricing">
                                <Button variant="hero" size="sm" className="w-full">
                                    <Zap className="w-4 h-4" />
                                    Fazer Upgrade
                                </Button>
                            </Link>
                        </div>

                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-destructive transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            Sair
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    {/* Mobile Header */}
                    <header className="md:hidden bg-card border-b border-border p-4 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg text-foreground">
                                NichePost<span className="text-primary">AI</span>
                            </span>
                        </Link>
                        <button className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                            <User className="w-5 h-5 text-foreground" />
                        </button>
                    </header>

                    <div className="p-6 md:p-10">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                Gerar Conteúdo
                            </h1>
                            <p className="text-muted-foreground">
                                Preencha as informações abaixo para criar posts incríveis para seu Instagram.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Form */}
                            <div className="bg-card rounded-2xl border border-border p-6">
                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
                                    <div className="space-y-2">
                                        <Label htmlFor="topic">Tema do Post *</Label>
                                        <Textarea
                                            id="topic"
                                            placeholder="Ex: Dicas para café da manhã saudável, mitos sobre carboidratos, receita de smoothie proteico..."
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            className="min-h-[100px]"
                                            required
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="tone">Tom de Voz *</Label>
                                            <Select value={tone} onValueChange={setTone}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione o tom" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="motivacional">Motivacional</SelectItem>
                                                    <SelectItem value="educativo">Educativo</SelectItem>
                                                    <SelectItem value="divertido">Divertido</SelectItem>
                                                    <SelectItem value="cientifico">Científico</SelectItem>
                                                    <SelectItem value="inspirador">Inspirador</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="audience">Público-alvo *</Label>
                                            <Select value={audience} onValueChange={setAudience}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione o público" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="mulheres-30-45">Mulheres 30-45 anos</SelectItem>
                                                    <SelectItem value="iniciantes-academia">Iniciantes em academia</SelectItem>
                                                    <SelectItem value="atletas">Atletas</SelectItem>
                                                    <SelectItem value="gestantes">Gestantes</SelectItem>
                                                    <SelectItem value="idosos">Idosos</SelectItem>
                                                    <SelectItem value="geral">Público geral</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="postCount">Número de Posts</Label>
                                        <Select value={postCount} onValueChange={setPostCount}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                                    <SelectItem key={num} value={num.toString()}>
                                                        {num} {num === 1 ? "post" : "posts"}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-3">
                                        <Label>Opções adicionais</Label>
                                        <div className="flex flex-wrap gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <Checkbox
                                                    checked={includeHashtags}
                                                    onCheckedChange={(checked) => setIncludeHashtags(checked as boolean)}
                                                />
                                                <span className="text-sm text-foreground">Hashtags otimizadas</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <Checkbox
                                                    checked={includeEmojis}
                                                    onCheckedChange={(checked) => setIncludeEmojis(checked as boolean)}
                                                />
                                                <span className="text-sm text-foreground">Emojis</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <Checkbox
                                                    checked={includeCTA}
                                                    onCheckedChange={(checked) => setIncludeCTA(checked as boolean)}
                                                />
                                                <span className="text-sm text-foreground">Call-to-action</span>
                                            </label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="hero"
                                        size="lg"
                                        className="w-full"
                                        disabled={isGenerating}
                                    >
                                        {isGenerating ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                Gerando...
                                            </>
                                        ) : (
                                            <>
                                                <Wand2 className="w-5 h-5" />
                                                Gerar Conteúdo
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>

                            {/* Result */}
                            <div className="bg-card rounded-2xl border border-border p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                        Conteúdo Gerado
                                    </h2>
                                    {generatedContent && (
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" onClick={handleCopy}>
                                                <Copy className="w-4 h-4" />
                                                Copiar
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Download className="w-4 h-4" />
                                                Exportar
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {generatedContent ? (
                                    <div className="bg-accent/50 rounded-xl p-6 min-h-[300px]">
                                        <div className="prose prose-sm max-w-none">
                                            <pre className="whitespace-pre-wrap font-sans text-foreground text-sm leading-relaxed">
                                                {generatedContent}
                                            </pre>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-accent/50 rounded-xl p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                                            <Wand2 className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                        <p className="text-muted-foreground mb-2">
                                            Nenhum conteúdo gerado ainda
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Preencha o formulário e clique em "Gerar Conteúdo"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;

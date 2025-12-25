import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
    Sparkles,
    Home,
    CreditCard,
    History as HistoryIcon,
    Settings,
    LogOut,
    Copy,
    Trash2,
    RefreshCw,
    Zap,
    User,
    Calendar,
    Hash,
    Smile,
    MessageSquare
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useCredits } from "@/hooks/useCredits";
import { useGenerations, Generation } from "@/hooks/useGenerations";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const History = () => {
    const { user, loading, signOut } = useAuth();
    const { credits, loading: creditsLoading } = useCredits();
    const { generations, loading: generationsLoading, deleteGeneration } = useGenerations();
    const navigate = useNavigate();
    const [selectedGeneration, setSelectedGeneration] = useState<Generation | null>(null);

    if (loading) {
        return (
            <div className="min-h-screen bg-muted/30 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleLogout = async () => {
        await signOut();
        toast.success("Logout realizado com sucesso!");
        navigate("/");
    };

    const handleCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        toast.success("Copiado para a área de transferência!");
    };

    const handleDelete = async (id: string) => {
        const success = await deleteGeneration(id);
        if (success) {
            toast.success("Geração excluída com sucesso!");
            setSelectedGeneration(null);
        } else {
            toast.error("Erro ao excluir geração.");
        }
    };

    const handleReuse = (generation: Generation) => {
        navigate("/dashboard", {
            state: {
                topic: generation.topic,
                tone: generation.tone,
                audience: generation.audience
            }
        });
        toast.success("Configurações carregadas! Ajuste e gere um novo conteúdo.");
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const toneLabels: Record<string, string> = {
        motivacional: "Motivacional",
        educativo: "Educativo",
        divertido: "Divertido",
        cientifico: "Científico",
        inspirador: "Inspirador"
    };

    const audienceLabels: Record<string, string> = {
        "mulheres-30-45": "Mulheres 30-45",
        "iniciantes-academia": "Iniciantes",
        atletas: "Atletas",
        gestantes: "Gestantes",
        idosos: "Idosos",
        geral: "Geral"
    };

    return (
        <>
            <Helmet>
                <title>Histórico - NichePost AI</title>
                <meta name="description" content="Veja seu histórico de conteúdos gerados e reutilize suas melhores criações." />
            </Helmet>

            <div className="min-h-screen bg-muted/30 flex">
                {/* Sidebar */}
                <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
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

                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to={"/dashboard"}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <Home className="w-5 h-5" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/history"}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground font-medium"
                                >
                                    <HistoryIcon className="w-5 h-5" />
                                    Histórico
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/pricing"}
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
                            <Link to={"/pricing"}>
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
                    <header className="md:hidden bg-card border-b border-border p-4 flex items-center justify-between">
                        <Link to={"/"} className="flex items-center gap-2">
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
                        <div className="mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                Histórico de Gerações
                            </h1>
                            <p className="text-muted-foreground">
                                Veja, copie e reutilize todos os conteúdos que você já gerou.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl border border-border overflow-hidden">
                            {generationsLoading ? (
                                <div className="p-12 flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                </div>
                            ) : generations.length === 0 ? (
                                <div className="p-12 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                                        <HistoryIcon className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Você ainda não gerou nenhum conteúdo.
                                    </p>
                                    <Link to={"/dashboard"}>
                                        <Button variant="hero">
                                            <Sparkles className="w-4 h-4" />
                                            Gerar Primeiro Conteúdo
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Tema</TableHead>
                                            <TableHead className="hidden sm:table-cell">Tom</TableHead>
                                            <TableHead className="hidden md:table-cell">Público</TableHead>
                                            <TableHead className="hidden lg:table-cell">Data</TableHead>
                                            <TableHead className="text-right">Ações</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {generations.map((generation) => (
                                            <TableRow
                                                key={generation.id}
                                                className="cursor-pointer hover:bg-accent/50"
                                                onClick={() => setSelectedGeneration(generation)}
                                            >
                                                <TableCell className="font-medium max-w-[200px] truncate">
                                                    {generation.topic}
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge variant="secondary">
                                                        {toneLabels[generation.tone] || generation.tone}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    {audienceLabels[generation.audience] || generation.audience}
                                                </TableCell>
                                                <TableCell className="hidden lg:table-cell text-muted-foreground">
                                                    {formatDate(generation.created_at)}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleCopy(generation.generated_content);
                                                            }}
                                                            title="Copiar"
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleReuse(generation);
                                                            }}
                                                            title="Reutilizar"
                                                        >
                                                            <RefreshCw className="w-4 h-4" />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDelete(generation.id);
                                                            }}
                                                            title="Excluir"
                                                            className="hover:text-destructive"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {/* Detail Dialog */}
            <Dialog open={!!selectedGeneration} onOpenChange={() => setSelectedGeneration(null)}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Detalhes de Geração</DialogTitle>
                    </DialogHeader>

                    {selectedGeneration && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <span className="text-sm text-muted-foreground">Tema</span>
                                    <p className="font-medium text-foreground">{selectedGeneration.topic}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> Data
                                    </span>
                                    <p className="text-foreground">{formatDate(selectedGeneration.created_at)}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm text-muted-foreground">Tom</span>
                                    <Badge variant="secondary">
                                        {toneLabels[selectedGeneration.tone] || selectedGeneration.tone}
                                    </Badge>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm text-muted-foreground">Público</span>
                                    <p className="text-foreground">
                                        {audienceLabels[selectedGeneration.audience] || selectedGeneration.audience}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Hash className="w-4 h-4" />
                                    {selectedGeneration.include_hashtags ? "Com hashtags" : "Sem hashtags"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Smile className="w-4 h-4" />
                                    {selectedGeneration.include_emojis ? "Com emojis" : "Sem emojis"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    {selectedGeneration.include_cta ? "Com CTA" : "Sem CTA"}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <span className="text-sm text-muted-foreground">Conteúdo Gerado</span>
                                <div className="bg-accent/50 rounded-xl p-4">
                                    <pre className="whitespace-pre-wrap font-sans text-foreground text-sm leading-relaxed">
                                        {selectedGeneration.generated_content}
                                    </pre>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    variant="hero"
                                    onClick={() => handleCopy(selectedGeneration.generated_content)}
                                    className="flex-1"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copiar Conteúdo
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => handleReuse(selectedGeneration)}
                                    className="flex-1"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Reutilizar
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => handleDelete(selectedGeneration.id)}
                                    className="hover:text-destructive hover:border-destructive"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default History;

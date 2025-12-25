import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export interface Generation {
    id: string;
    user_id: string;
    topic: string;
    tone: string;
    audience: string;
    post_count: number;
    include_hashtags: boolean;
    include_emojis: boolean;
    include_cta: boolean;
    generated_content: string;
    credits_used: number;
    created_at: string;
}

interface GenerationInput {
    topic: string;
    tone: string;
    audience: string;
    postCount: number;
    includeHashtags: boolean;
    includeEmojis: boolean;
    includeCta: boolean;
    generatedContent: string;
}

export function useGenerations() {
    const { user } = useAuth();
    const [generations, setGenerations] = useState<Generation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchGenerations = async () => {
        if (!user) {
            setGenerations([]);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('generations')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setGenerations(data || []);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    const saveGeneration = async (input: GenerationInput): Promise<Generation | null> => {
        if (!user) return null;

        try {
            const { data, error } = await supabase
                .from('generations')
                .insert({
                    user_id: user.id,
                    topic: input.topic,
                    tone: input.tone,
                    audience: input.audience,
                    post_count: input.postCount,
                    include_hashtags: input.includeHashtags,
                    include_emojis: input.includeEmojis,
                    include_cta: input.includeCta,
                    generated_content: input.generatedContent,
                    credits_used: 1
                })
                .select()
                .single();

            if (error) throw error;

            setGenerations(prev => [data, ...prev]);
            return data;
        } catch (err) {
            setError(err as Error);
            return null;
        }
    };

    const deleteGeneration = async (id: string): Promise<boolean> => {
        try {
            const { error } = await supabase
                .from('generations')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setGenerations(prev => prev.filter(g => g.id !== id));
            return true;
        } catch (err) {
            setError(err as Error);
            return false;
        }
    };

    useEffect(() => {
        fetchGenerations();
    }, [user]);

    return {
        generations,
        loading,
        error,
        saveGeneration,
        deleteGeneration,
        refetchGenerations: fetchGenerations
    };
}

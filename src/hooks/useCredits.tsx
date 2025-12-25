import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

interface UserCredits {
    id: string;
    user_id: string;
    credits_remaining: number;
    credits_used: number;
    plan: string;
    created_at: string;
    updated_at: string;
}

export function useCredits() {
    const { user } = useAuth();
    const [credits, setCredits] = useState<UserCredits | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchCredits = async () => {
        if (!user) {
            setCredits(null);
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('user_credits')
                .select('*')
                .eq('user_id', user.id)
                .maybeSingle();

            if (error) throw error;
            setCredits(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    const useCredit = async (amount: number = 1): Promise<boolean> => {
        if (!user || !credits) return false;

        if (credits.credits_remaining < amount) {
            return false;
        }

        try {
            const { error } = await supabase
                .from('user_credits')
                .update({
                    credits_remaining: credits.credits_remaining - amount,
                    credits_used: credits.credits_used + amount,
                    updated_at: new Date().toISOString()
                })
                .eq('user_id', user.id);

            if (error) throw error;

            setCredits(prev => prev ? {
                ...prev,
                credits_remaining: prev.credits_remaining - amount,
                credits_used: prev.credits_used + amount
            } : null);

            return true;
        } catch (err) {
            setError(err as Error);
            return false;
        }
    };

    const refetchCredits = () => {
        fetchCredits();
    };

    useEffect(() => {
        fetchCredits();
    }, [user]);

    return {
        credits,
        loading,
        error,
        useCredit,
        refetchCredits,
        hasCredits: (credits?.credits_remaining ?? 0) > 0
    };
}

import { LucideIcon } from "lucide-react";

export interface EmptyStateProps {
    title: string;
    description: string;
    actionText?: string;
    onActionClick?: () => void;
    icon: LucideIcon;
}

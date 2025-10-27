import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export const KPICard = ({ title, value, subtitle, icon: Icon, children }: KPICardProps) => {
  return (
    <Card className="p-6 shadow-sm border-border">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </div>
      {children ? (
        children
      ) : (
        <div>
          <div className="text-4xl font-bold text-foreground mb-1">{value}</div>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      )}
    </Card>
  );
};

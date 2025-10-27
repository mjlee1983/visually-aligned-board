interface GaugeChartProps {
  value: number;
  max?: number;
  color?: string;
}

export const GaugeChart = ({ value, max = 100, color = "hsl(var(--primary))" }: GaugeChartProps) => {
  const percentage = (value / max) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Value arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
          className="transition-all duration-500"
        />
        {/* Center labels */}
        <text x="100" y="85" textAnchor="middle" className="text-2xl font-bold fill-foreground">
          {value}%
        </text>
        {/* Tick marks */}
        <text x="30" y="105" textAnchor="middle" className="text-xs fill-muted-foreground">
          0%
        </text>
        <text x="100" y="35" textAnchor="middle" className="text-xs fill-muted-foreground">
          50%
        </text>
        <text x="170" y="105" textAnchor="middle" className="text-xs fill-muted-foreground">
          100%
        </text>
      </svg>
      {/* Needle */}
      <div
        className="absolute top-[60%] left-1/2 w-1 h-16 origin-bottom transition-transform duration-500"
        style={{
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          background: `linear-gradient(to top, ${color}, transparent)`,
        }}
      />
    </div>
  );
};

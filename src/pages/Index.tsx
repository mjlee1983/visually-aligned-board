import { KPICard } from "@/components/dashboard/KPICard";
import { GaugeChart } from "@/components/dashboard/GaugeChart";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Menu, Info } from "lucide-react";

const complaintsReturnsData = [
  { month: "Jan", complaints: 3, returns: 2 },
  { month: "Feb", complaints: 1, returns: 0 },
  { month: "Mar", complaints: 5, returns: 3 },
  { month: "Apr", complaints: 2, returns: 0 },
  { month: "May", complaints: 5, returns: 4 },
  { month: "Jun", complaints: 4, returns: 2 },
  { month: "Jul", complaints: 7, returns: 8 },
  { month: "Aug", complaints: 3, returns: 1 },
  { month: "Sep", complaints: 2, returns: 0 },
  { month: "Oct", complaints: 7, returns: 6 },
  { month: "Nov", complaints: 4, returns: 0 },
  { month: "Dec", complaints: 5, returns: 4 },
];

const defectsData = [
  { month: "Jan", rework: 15, scrap: 10, defects: 8 },
  { month: "Feb", rework: 8, scrap: 12, defects: 6 },
  { month: "Mar", rework: 20, scrap: 12, defects: 8 },
  { month: "Apr", rework: 10, scrap: 8, defects: 6 },
  { month: "May", rework: 11, scrap: 9, defects: 9 },
  { month: "Jun", rework: 17, scrap: 7, defects: 7 },
  { month: "Jul", rework: 8, scrap: 8, defects: 9 },
  { month: "Aug", rework: 10, scrap: 10, defects: 10 },
  { month: "Sep", rework: 11, scrap: 6, defects: 11 },
  { month: "Oct", rework: 9, scrap: 7, defects: 9 },
  { month: "Nov", rework: 14, scrap: 12, defects: 9 },
  { month: "Dec", rework: 15, scrap: 16, defects: 8 },
];

const deliveriesData = [
  { month: "Jan", onTime: 100, late: 0 },
  { month: "Feb", onTime: 80, late: 1 },
  { month: "Mar", onTime: 120, late: 0 },
  { month: "Apr", onTime: 125, late: 2 },
  { month: "May", onTime: 130, late: 0 },
  { month: "Jun", onTime: 110, late: 1 },
  { month: "Jul", onTime: 120, late: 4 },
  { month: "Aug", onTime: 142, late: 0 },
  { month: "Sep", onTime: 132, late: 2 },
  { month: "Oct", onTime: 120, late: 4 },
  { month: "Nov", onTime: 110, late: 2 },
  { month: "Dec", onTime: 111, late: 1 },
];

const productionData = [
  { month: "Aug", value: 142 },
  { month: "Sep", value: 132 },
  { month: "May", value: 130 },
  { month: "Apr", value: 125 },
  { month: "Mar", value: 120 },
  { month: "Jul", value: 120 },
  { month: "Oct", value: 120 },
  { month: "Jun", value: 111 },
  { month: "Nov", value: 110 },
  { month: "Dec", value: 110 },
  { month: "Jan", value: 100 },
  { month: "Feb", value: 80 },
];

const productDefectsData = [
  { id: "1012", defects: 16, complaints: 5 },
  { id: "1009", defects: 11, complaints: 1 },
  { id: "1008", defects: 10, complaints: 1 },
  { id: "1011", defects: 9, complaints: 0 },
  { id: "1005", defects: 9, complaints: 4 },
  { id: "1003", defects: 8, complaints: 2 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="text-foreground">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-foreground">
              ⊕ My Factory
            </div>
            <span className="text-muted-foreground">Quality Dashboard</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Top Row - KPIs and Large Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-2">
            <KPICard title="First Pass Yield" value="91%" />
            <KPICard title="Defect Rate" value="7%" />
          </div>
          <div className="lg:col-span-2">
            <KPICard title="Customer Complaints Rate" value="">
              <GaugeChart value={2} color="hsl(var(--primary))" />
            </KPICard>
          </div>
          <div className="lg:col-span-6">
            <Card className="p-6 shadow-sm border-border h-full">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">
                  Customer Complaints VS Returns Over Time
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={complaintsReturnsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="returns"
                    stackId="1"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="complaints"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="complaints"
                    stroke="hsl(var(--secondary))"
                    fill="hsl(var(--secondary))"
                    fillOpacity={0.4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <KPICard title="Return Rate" value="">
              <GaugeChart value={3} color="hsl(var(--primary))" />
            </KPICard>
          </div>
        </div>

        {/* Third Row - Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-6">
            <Card className="p-6 shadow-sm border-border h-full">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">
                  Rework, Scrap, Defects Count
                </h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={defectsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="rework"
                    stackId="a"
                    fill="hsl(var(--primary))"
                    name="Rework Count"
                  />
                  <Bar
                    dataKey="scrap"
                    stackId="a"
                    fill="hsl(var(--secondary))"
                    name="Scrap Count"
                  />
                  <Bar
                    dataKey="defects"
                    stackId="a"
                    fill="hsl(var(--chart-4))"
                    name="Defect Count"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-sm border-border h-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                On-Time Delivery Rate
              </h3>
              <GaugeChart value={98.8} color="hsl(var(--primary))" />
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-sm border-border h-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Deliveries On-Time vs Late Deliveries
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={deliveriesData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="onTime"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="late"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <KPICard title="Corrective Action Request" value="4%" />
              <KPICard title="Customer Complaints" value="2%" />
            </div>
          </div>
          <div className="lg:col-span-4">
            <Card className="p-6 shadow-sm border-border h-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Total Produced
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={productionData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <KPICard title="Scrap Count" value="97" />
              <KPICard title="Supplier defect rate" value="2%" />
            </div>
          </div>
          <div className="lg:col-span-4">
            <Card className="p-6 shadow-sm border-border h-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                Defect Count & Complaints for each product
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-xs font-medium text-muted-foreground">
                        Product ID
                      </th>
                      <th className="text-left py-2 text-xs font-medium text-muted-foreground">
                        Defect Count
                      </th>
                      <th className="text-left py-2 text-xs font-medium text-muted-foreground">
                        Customer Complaints
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productDefectsData.map((product) => (
                      <tr key={product.id} className="border-b border-border">
                        <td className="py-3 text-sm text-foreground">
                          {product.id}
                        </td>
                        <td className="py-3 text-sm text-foreground">
                          {product.defects}
                        </td>
                        <td className="py-3 text-sm text-foreground">
                          {product.complaints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

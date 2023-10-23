import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart2, ChevronUp, TrendingUp, User } from "lucide-react";

type Props = {
  className?: string;
};

const SalesOverviewCard = ({ className }: Props) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription className="flex items-center gap-2">
          Total 42.5k Sales{" "}
          <span className="text-success-foreground flex items-center gap-[1px]">
            +14% <ChevronUp className="h-4 w-4" />
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="h-10 w-10 text-purple-600 bg-purple-600/10 p-2 rounded-lg" />
          <div>
            <p className="text-xl font-semibold">8,458</p>
            <p className="text-xs opacity-60">New Customers</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BarChart2 className="h-10 w-10 text-yellow-600 bg-yellow-600/10 p-2 rounded-lg" />
          <div>
            <p className="text-xl font-semibold">$28.5k</p>
            <p className="text-xs opacity-60">Total Profit</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp className="h-10 w-10 text-blue-600 bg-blue-600/10 p-2 rounded-lg" />
          <div>
            <p className="text-xl font-semibold">2,450k</p>
            <p className="text-xs opacity-60">New Transactions</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesOverviewCard;

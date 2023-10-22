import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronUp } from "lucide-react";

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
          <span className="text-success flex items-center gap-[1px]">
            +14% <ChevronUp className="h-4 w-4" />
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default SalesOverviewCard;

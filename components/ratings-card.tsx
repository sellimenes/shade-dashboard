import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const RatingsCard = ({ className }: Props) => {
  return (
    <Card className={cn("relative", className)}>
      <CardHeader>
        <CardTitle>Ratings</CardTitle>
        <CardDescription className="text-purple-500 bg-purple-700/20 py-1 px-2 rounded-2xl max-w-max text-xs">
          Last Year
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 relative">
        <p className="text-2xl">8.14k</p>
        <p className="text-xs text-success-foreground">+15.6%</p>
      </CardContent>
      <Image
        src={"/illustrations/card-ratings-illustration.png"}
        width={95}
        height={130}
        alt="session illustration"
        className="absolute right-6 bottom-0"
      />
    </Card>
  );
};

export default RatingsCard;

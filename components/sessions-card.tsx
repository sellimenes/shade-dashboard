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

const SessionsCard = ({ className }: Props) => {
  return (
    <Card className={cn("relative", className)}>
      <CardHeader>
        <CardTitle>Sessions</CardTitle>
        <CardDescription className="text-success-foreground bg-success py-1 px-2 rounded-2xl max-w-max text-xs">
          Last Month
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 relative">
        <p className="text-2xl">12.2k</p>
        <p className="text-xs text-red-600">-25.5%</p>
      </CardContent>
      <Image
        src={"/illustrations/card-session-illustration.png"}
        width={81}
        height={130}
        alt="session illustration"
        className="absolute right-6 bottom-0"
      />
    </Card>
  );
};

export default SessionsCard;

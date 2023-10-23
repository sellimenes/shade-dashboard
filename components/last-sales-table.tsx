import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

type Props = {};

const LastSalesTable = (props: Props) => {
  return (
    <div className="shadow-xl rounded-lg">
      <Table className="bg-card rounded-lg">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="">
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className="w-[100px]">Time</TableHead>
            <TableHead className="">Product</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>21.12.2023</TableCell>
            <TableCell>15:32</TableCell>
            <TableCell className="font-medium">
              iPhone 15 Pro Max (256 GB)
            </TableCell>
            <TableCell>Selim Enes Erdogan</TableCell>
            <TableCell>Duzce</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="ml-auto cursor-pointer hover:opacity-70 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Approve</DropdownMenuItem>
                  <DropdownMenuItem>Cancel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>21.12.2023</TableCell>
            <TableCell>15:32</TableCell>
            <TableCell className="font-medium">
              iPhone 15 Pro Max (256 GB)
            </TableCell>
            <TableCell>Selim Enes Erdogan</TableCell>
            <TableCell>Duzce</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="ml-auto cursor-pointer hover:opacity-70 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Approve</DropdownMenuItem>
                  <DropdownMenuItem>Cancel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>21.12.2023</TableCell>
            <TableCell>15:32</TableCell>
            <TableCell className="font-medium">
              iPhone 15 Pro Max (256 GB)
            </TableCell>
            <TableCell>Selim Enes Erdogan</TableCell>
            <TableCell>Duzce</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="ml-auto cursor-pointer hover:opacity-70 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Approve</DropdownMenuItem>
                  <DropdownMenuItem>Cancel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LastSalesTable;

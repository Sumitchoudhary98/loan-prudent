import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search, Edit, Eye } from "lucide-react";
import { Member } from "@/types";

const PreClosureReceiptPage = () => {
  const [receiptNumber, setReceiptNumber] = useState("");
  const [isEMIReceiptOpen, setIsEMIReceiptOpen] = useState(false);
  const [isAddEMIOpen, setIsAddEMIOpen] = useState(false);

  const handleEMIReceiptSubmit = () => {
    setIsEMIReceiptOpen(false);
    setIsAddEMIOpen(true);
  };

  const handleAddEMIClose = () => {
    setIsAddEMIOpen(false);
    setReceiptNumber("");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Pre-Closure Receipt
          </h1>
        </div>

        {/* EMI Receipt Dialog */}
        <Dialog open={isEMIReceiptOpen} onOpenChange={setIsEMIReceiptOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add EMI
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Pre-Closure Receipt</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Label htmlFor="Member" className="text-xs w-32 ">
                    Member Name:
                  </Label>
                  <Input
                    id="Member"
                    name="Member"
                    value={receiptNumber}
                    onChange={(e) => setReceiptNumber(e.target.value)}
                    className="h-6 text-xs flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="Member" className="text-xs w-32 ">
                    Loan ID:
                  </Label>
                  <Input
                    id="Member"
                    name="Member"
                    className="h-6 text-xs flex-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                onClick={handleEMIReceiptSubmit}
                disabled={!receiptNumber.trim()}
              >
                OK
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Add New EMI Dialog */}
        <Dialog open={isAddEMIOpen} onOpenChange={setIsAddEMIOpen}>
          <DialogContent className="max-w-[90%] max-h-[100vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Pre-Clouser Reciept</DialogTitle>
            </DialogHeader>
            <div className="row">
              <div className="col-11 border-r">
                <div className="space-y-1">
                  <div className="row border-b pb-5">
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="Member" className="text-xs w-32  ">
                          Member Name:
                        </Label>
                        <Input
                          id="Member"
                          name="Member"
                          placeholder="Member"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Loan ID:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Last Reciept date:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="date" className="text-xs w-32 ">
                          Date:
                        </Label>
                        <Input
                          type="date"
                          id="date"
                          name="date"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3 mt-1">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Cash/Banker Ledger:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 my-3">
                      <div className="py-2 bg-light text-center">
                        Outstanding
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Principle:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Prev Int:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Current Int:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="loanid" className="text-xs w-32 ">
                          Total:
                        </Label>
                        <Input
                          id="loanid"
                          name="loanid"
                          className="h-6 text-xs flex-1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Table className="border-t my-5">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Bill Amount</TableHead>
                      <TableHead>Adjusted Amount</TableHead>
                      <TableHead>Net Amount</TableHead>
                      <TableHead>EMI No</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024-01-20</TableCell>
                      <TableCell>Main Branch</TableCell>
                      <TableCell>Group A</TableCell>
                      <TableCell>APP</TableCell>
                      <TableCell>Happy</TableCell>
                      <TableCell>LOAN</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="row pb-3">
                  <div className="col-12 my-3">
                    <div className="py-2 bg-light text-center">Overdue</div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32  ">
                        Principle:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32  ">
                        Interest:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32  ">
                        Total:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 my-3">
                    <div className="py-2 bg-light text-center">
                      Final Amounts
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32  ">
                        Principle:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32  ">
                        Interest:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Prev Penalty:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Overdue Penalty:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Penalty (Prev+Overdue):
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3 mt-1">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Forclose Penalty:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3 mt-1">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Total:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="Member" className="text-xs w-32 ">
                        Narration:
                      </Label>
                      <Input
                        id="Member"
                        name="Member"
                        className="h-6 text-xs flex-1"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-5">
                  <Button variant="outline" onClick={handleAddEMIClose}>
                    Cancel
                  </Button>
                  <Button>Add</Button>
                </div>
              </div>
              <div className="col-1 bg-light">
                <div className="text-xs mt-2">Loan Info</div>
                <div className="text-xs mt-2">Detail Interest</div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute px-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search....." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Bill Amount</TableHead>
                <TableHead>Adjusted Amount</TableHead>
                <TableHead>Net Amount</TableHead>
                <TableHead>EMI No</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-01-20</TableCell>
                <TableCell>Main Branch</TableCell>
                <TableCell>Group A</TableCell>
                <TableCell>APP</TableCell>
                <TableCell>Happy</TableCell>
                <TableCell>Happy</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreClosureReceiptPage;

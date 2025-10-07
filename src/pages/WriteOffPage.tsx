import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const WriteOffPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    memberName: "",
    loanId: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setFormData({
      memberName: formData.get("memberName") as string,
      loanId: formData.get("loanId") as string,
    });

    setIsDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Write Off</h1>
          <p className="text-gray-600 mt-2">Manage loan write-off records</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Loan Write Off</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="memberName">Member Name</Label>
                <Input id="memberName" name="memberName" required />
              </div>
              <div>
                <Label htmlFor="loanId">Loan ID</Label>
                <Input id="loanId" name="loanId" required />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center">Loan Write Off</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="dialogMemberName"
                  className="text-xs w-32 text-right"
                >
                  Member Name:
                </Label>
                <Input
                  id="dialogMemberName"
                  name="dialogMemberName"
                  value={formData.memberName}
                  readOnly
                  className="h-6 text-xs flex-1"
                />
              </div>

              <div className="flex items-center gap-2">
                <Label htmlFor="memberId" className="text-xs w-32 text-right">
                  Member ID:
                </Label>
                <Input
                  id="memberId"
                  name="memberId"
                  placeholder="Member ID"
                  className="h-6 text-xs flex-1"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="dialogLoanId"
                  className="text-xs w-32 text-right"
                >
                  Loan ID:
                </Label>
                <Input
                  id="dialogLoanId"
                  name="dialogLoanId"
                  value={formData.loanId}
                  readOnly
                  className="h-6 text-xs flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="date" className="text-xs w-32 text-right">
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
              <div className="flex items-center gap-2">
                <Label htmlFor="principle" className="text-xs w-32 text-right">
                  Principle:
                </Label>
                <Input
                  id="principle"
                  name="principle"
                  placeholder="Principle"
                  className="h-6 text-xs flex-1"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="interest" className="text-xs w-32 text-right">
                  Interest:
                </Label>
                <Input
                  id="interest"
                  name="interest"
                  placeholder="Interest"
                  className="h-6 text-xs flex-1"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="penalty" className="text-xs w-32 text-right">
                  Penalty:
                </Label>
                <Input
                  id="penalty"
                  name="penalty"
                  placeholder="Penalty"
                  className="h-6 text-xs flex-1"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="total" className="text-xs w-32 text-right">
                  Total:
                </Label>
                <Input
                  id="total"
                  name="total"
                  placeholder="Total"
                  className="h-6 text-xs flex-1"
                  required
                />
              </div>
              <div className="flex items-start gap-2">
                <Label
                  htmlFor="narration"
                  className="text-xs w-32 text-right pt-1"
                >
                  Narration:
                </Label>
                <Textarea
                  id="narration"
                  name="narration"
                  className="text-xs flex-1 min-h-[80px]"
                  placeholder="Narration"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Submit Write Off</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WriteOffPage;

"use client";

import MyAlertDialog from "@/components/shadcn/MyAlertDialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteFrontendSkillMutation } from "@/redux/features/frontendSkill/frontendSkillApi";





interface DeleteSkillProps {
  skillId: string;
}

const DeleteFrontendSkill: React.FC<DeleteSkillProps> = ({ skillId }) => {
  const { toast } = useToast();
  const [deleteFrontendSkill, { isLoading }] =useDeleteFrontendSkillMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteFrontendSkill(skillId).unwrap();
      

      if (res.data) {
        toast({
          title: "Success",
          description: "Frontend skill deleted successfully",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
        });
      }
    } catch (error: any) {
      toast({
        variant:'destructive',
        title: "Error",
        description: error?.message,
        action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <MyAlertDialog
        title="Confirm Deletion"
        description="Are you sure you want to delete this item? This action cannot be undone."
        onConfirm={handleDelete}
      />
    </>
  );
};

export default DeleteFrontendSkill;
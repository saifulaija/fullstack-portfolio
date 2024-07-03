"use client";

import MyAlertDialog from "@/components/shadcn/MyAlertDialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteFrontendSkillMutation } from "@/redux/features/frontendSkill/frontendSkillApi";
import { useDeleteToolsSkillMutation } from "@/redux/features/toolsSkill/tollsSkillApi";





interface DeleteSkillProps {
  skillId: string;
}

const DeleteToolsSkill: React.FC<DeleteSkillProps> = ({ skillId }) => {
  const { toast } = useToast();
  const [deleteToolsSkill, { isLoading }] =useDeleteToolsSkillMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteToolsSkill(skillId).unwrap();
      

      if (res.data) {
        toast({
          title: "Success",
          description: "Tools skill deleted successfully",
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

export default DeleteToolsSkill;
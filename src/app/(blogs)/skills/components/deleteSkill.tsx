"use client";

import MyAlertDialog from "@/components/shadcn/MyAlertDialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";


import { useDeleteSkillMutation } from "@/redux/features/skill/skillApi";


interface DeleteSkillProps {
  skillId: string;
}

const DeleteSkill: React.FC<DeleteSkillProps> = ({ skillId }) => {
  const { toast } = useToast();
  const [deleteBlogger, { isLoading }] =useDeleteSkillMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteBlogger(skillId).unwrap();
      

      if (res.data) {
        toast({
          title: "Success",
          description: "Author deleted successfully",
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

export default DeleteSkill;
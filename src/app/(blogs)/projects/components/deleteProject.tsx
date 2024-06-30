"use client";

import MyAlertDialog from "@/components/shadcn/MyAlertDialog";
import { useToast } from "@/components/ui/use-toast";

import { useDeleteProjectsMutation } from "@/redux/features/project/projectApi";


interface DeleteFlatProps {
  projectId: string;
}

const DeleteProject: React.FC<DeleteFlatProps> = ({ projectId }) => {
  const { toast } = useToast();
  const [deleteBlogger, { isLoading }] =useDeleteProjectsMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteBlogger(projectId).unwrap();

      if (res.id) {
        toast({
          title: "Success",
          description: "Author deleted successfully",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
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

export default DeleteProject;
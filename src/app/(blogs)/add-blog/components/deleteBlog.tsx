"use client";


import MyAlertDialog from "@/components/shadcn/MyAlertDialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteBlogMutation } from "@/redux/features/blog/blogApi";
interface DeleteFlatProps {
  blogId: string;
}

const DeleteBlog: React.FC<DeleteFlatProps> = ({ blogId}) => {
  const { toast } = useToast();
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteBlog(blogId).unwrap();

      if (res.id) {
        toast({
            title:'Success',
            description:"Blog deleted successfully",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
      }
    } catch (error: any) {
        toast({
            title:'Failed',
            description:error?.message,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
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

export default DeleteBlog;
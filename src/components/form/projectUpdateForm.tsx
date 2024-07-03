// // import {
// //     Form,
// //     FormControl,
// //     FormField,
// //     FormItem,
// //     FormLabel,
// //     FormMessage,
// // } from "../ui/form";
// // import { Input } from "../ui/input";
// // import { Button } from "../ui/button";
// // import { useToast } from "../ui/use-toast";
// // import { useFieldArray, useForm } from "react-hook-form";
// // import { useEffect, useState } from "react";
// // import { useUpdateProjectMutation } from "@/redux/features/project/projectApi";
// // import { ChevronRight, Loader2 } from "lucide-react";
// // import { ToastAction } from "../ui/toast";

// // const ProjectUpdateForm = ({ data }:{data:any}) => {
// //     console.log(data)
// //     const { toast } = useToast();
// //     const [updateProfile, { isLoading: update }] = useUpdateProjectMutation();
// //     const [loading, setLoading] = useState(false);
// //     const [submitError, setSubmitError] = useState("");

// //     const form = useForm({
     
// //         defaultValues: {
// //             name: "",
// //             description: "",
// //             technologies: [],
// //             githubClientLink: "",
// //             githubServerLink: "",
// //             liveLink: "",
// //         },
// //     });

// //     useEffect(() => {
// //         if (data) {
// //             form.reset({
// //                 name: data.name || "",
// //                 description: data.description || "",
// //                 technologies: data.technologies || "",
// //                 githubClientLink: data.githubClientLink || "",
// //                 githubServerLink: data. githubServerLink || "",
// //                 liveLink: data.liveLink || "",
               
// //             });
// //         }
// //     }, [data, form]);
// //     const { fields, append, remove } = useFieldArray({
// //         control: form.control,
// //         name: "technologies",
// //     });
// //     const onSubmit = async (values: any) => {
// //         const updatedData = {

// //           id:data?.id,
          
// //         };
// //         setLoading(true);
// //         try {
// //             const res = await updateProfile({body:values,id:data?._id}).unwrap();

// //             if (res?.data) {
// //                 toast({
// //                     title: "Flat Request",
// //                     description: "Project updated  successfully",
// //                     action: (
// //                         <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
// //                     ),
// //                 });
// //             }
// //         } catch (err: any) {
// //             setSubmitError("Something went wrong. Please try again."); // Set submit error message
// //             toast({
// //                 title: "Error",
// //                 description: "Something went wrong",
// //                 action: (
// //                     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
// //                 ),
// //             });
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <Form {...form}>
// //             <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
// //                 <div className="w-full space-y-4 md:px-4 py-6">
                 
// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
// //                         <FormField
// //                             control={form.control}
// //                             name="name"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Name</FormLabel>
// //                                     <FormControl>
// //                                         <Input type="text" placeholder="Enter project name" {...field} />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />
// //                         <FormField
// //                             control={form.control}
// //                             name="description"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Description</FormLabel>
// //                                     <FormControl>
// //                                         <Input
// //                                             type="text"
// //                                             placeholder="Enter project description"
// //                                             {...field}
// //                                         />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />
// //                         <FormField
// //                             control={form.control}
// //                             name="githubClientLink"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Github Client Link</FormLabel>
// //                                     <FormControl>
// //                                         <Input
// //                                             type="text"
// //                                             placeholder="Enter your githubClientLink"
// //                                             {...field}
// //                                         />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

// //                         <FormField
// //                             control={form.control}
// //                             name="githubServerLink"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Github Server Link</FormLabel>
// //                                     <FormControl>
// //                                         <Input
// //                                             type="text"
// //                                             placeholder="Enter your githubServerLink"
// //                                             {...field}
// //                                         />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />
// //                         <FormField
// //                             control={form.control}
// //                             name="liveLink"
// //                             render={({ field }) => (
// //                                 <FormItem>
// //                                     <FormLabel>Project Live Link</FormLabel>
// //                                     <FormControl>
// //                                         <Input
// //                                             type="text"
// //                                             placeholder="Enter your project liveLink"
// //                                             {...field}
// //                                         />
// //                                     </FormControl>
// //                                     <FormMessage />
// //                                 </FormItem>
// //                             )}
// //                         />

                      
// //                     </div>

// //                     <div className="space-y-4 space-x-2">
// //                         <FormLabel>Technologies</FormLabel>
// //                         {fields.map((field, index) => (
// //                             <div key={field.id} className="flex items-center gap-4">
// //                                 <FormControl>
// //                                     <Input
// //                                         {...form.register(`technologies.${index}` as const)}
// //                                         placeholder="Enter a technology"
// //                                         className="w-full"
// //                                     />
// //                                 </FormControl>
// //                                 <Button
// //                                     type="button"
// //                                     variant="destructive"
// //                                     onClick={() => remove(index)}
// //                                 >
// //                                     Remove
// //                                 </Button>
// //                             </div>
// //                         ))}
// //                         <Button
// //                             type="button"
// //                             variant="outline"
// //                             onClick={() => append("")}
// //                         >
// //                             Add Technology
// //                         </Button>
// //                     </div>

// //                     <Button type="submit" disabled={update} className="w-full mt-4">
// //                         Update Now
// //                         <ChevronRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
// //                         {update && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
// //                     </Button>
// //                 </div>
// //             </form>
// //         </Form>
// //     );
// // };

// // export default ProjectUpdateForm;



import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUpdateProjectMutation } from "@/redux/features/project/projectApi";
import { ChevronRight, Loader2 } from "lucide-react";
import { ToastAction } from "../ui/toast";

const ProjectUpdateForm = ({ data }: { data: any }) => {
    const { toast } = useToast();
    const [updateProfile, { isLoading: update }] = useUpdateProjectMutation();
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
          
            githubClientLink: "",
            githubServerLink: "",
            liveLink: "",
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                name: data.name || "",
                description: data.description || "",
             
                githubClientLink: data.githubClientLink || "",
                githubServerLink: data.githubServerLink || "",
                liveLink: data.liveLink || "",
            });
        }
    }, [data, form]);

   

    const onSubmit = async (values: any) => {
        setLoading(true);
        try {
            const res = await updateProfile({ body: values, id: data?._id }).unwrap();

            if (res?.data) {
                toast({
                    title: "Flat Request",
                    description: "Project updated successfully",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });
            }
        } catch (err: any) {
            setSubmitError("Something went wrong. Please try again."); 
            toast({
                title: "Error",
                description: "Something went wrong",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full space-y-4 md:px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter project name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter project description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="githubClientLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github Client Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your github client link"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="githubServerLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github Server Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your github server link"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="liveLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Live Link</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your project live link"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                   

                    <Button type="submit" disabled={update} className="w-full mt-4">
                        Update Now
                        <ChevronRight className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                        {update && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default ProjectUpdateForm;




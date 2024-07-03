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
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Loader2,ChevronRight } from "lucide-react";

import { useUpdateFrontendSkillMutation } from "@/redux/features/frontendSkill/frontendSkillApi";
import {IFrontendSkillUpdateProps } from "@/types/frontendSkill.type";
import { ToastAction } from "../ui/toast";
import { useUpdateBackendSkillMutation } from "@/redux/features/backendSkill/backendSkillApi";
const BackendSkillUpdateForm = ({ data }: IFrontendSkillUpdateProps) => {
    const { toast } = useToast();
    const [updateFrontendSkill, { isLoading: update }] = useUpdateBackendSkillMutation();
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const form = useForm({
        defaultValues: {
            name: "",
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                name: data.name || "",
            });
        }
    }, [data, form]);

    const onSubmit = async (values: any) => {
        const updatedData = {
            id: data?._id,
            body: values,
        };
        setLoading(true);
        try {
            const res = await updateFrontendSkill(updatedData).unwrap();

            if (res?.data) {
                toast({
                    title: "Success",
                    description: "Backend skill updated  successfully",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });

            }
        } catch (err: any) {
            setSubmitError("Something went wrong. Please try again."); // Set submit error message
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

                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter frontend skill name" {...field} />
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

export default BackendSkillUpdateForm;

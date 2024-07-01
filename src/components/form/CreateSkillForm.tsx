"use client";

import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateSkillMutation } from "@/redux/features/skill/skillApi";
import { toast, useToast } from "../ui/use-toast";
import {
    Form,
    FormControl,
    FormLabel,
} from "../ui/form";
import { Loader2 } from "lucide-react";
import { ToastAction } from "@radix-ui/react-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";  // Ensure the correct import

const formSchema = z.object({
    frontendSkills: z.array(z.string()).min(1, {
        message: "Enter at least one technology",
    }),
    backendSkills: z.array(z.string()).min(1, {
        message: "Enter at least one technology",
    }),
    toolsSkills: z.array(z.string()).min(1, {
        message: "Enter at least one technology",
    }),
});

const CreateSkillForm = () => {
    const [createProject, { isLoading }] = useCreateSkillMutation();
    const {toast} = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            frontendSkills: [],
            backendSkills: [],
            toolsSkills: [],
        },
    });

    const {
        fields: frontendFields,
        append: appendFrontend,
        remove: removeFrontend
    } = useFieldArray({
        control: form.control,
        name: "frontendSkills",
    });

    const {
        fields: backendFields,
        append: appendBackend,
        remove: removeBackend
    } = useFieldArray({
        control: form.control,
        name: "backendSkills",
    });

    const {
        fields: toolsFields,
        append: appendTools,
        remove: removeTools
    } = useFieldArray({
        control: form.control,
        name: "toolsSkills",
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await createProject(values);
            console.log(res, "values.........");

            if (res?.data) {
                toast({
                    title: "Success!",
                    description: `Project created successfully`,
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });
            } else {
                toast({
                    title: 'Failed',
                    description: "An unexpected error occurred.",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                });
            }
        } catch (err: any) {
            toast({
                title: 'Failed',
                description: err?.message || "An unexpected error occurred.",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max:w-md">
                <div className="w-full space-y-4 md:px-4 py-6">
                    <div className="space-y-4 space-x-10">
                        <FormLabel>Frontend Skills</FormLabel>
                        {frontendFields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-4">
                                <FormControl>
                                    <Input
                                        {...form.register(`frontendSkills.${index}` as const)}
                                        placeholder="Enter a frontend skill"
                                        className="w-full"
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => removeFrontend(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => appendFrontend("")}
                        >
                            Add Frontend Skill
                        </Button>
                    </div>
                    <div className="space-y-4 space-x-2">
                        <FormLabel>Backend Skills</FormLabel>
                        {backendFields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-4">
                                <FormControl>
                                    <Input
                                        {...form.register(`backendSkills.${index}` as const)}
                                        placeholder="Enter a backend skill"
                                        className="w-full"
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => removeBackend(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => appendBackend("")}
                        >
                            Add Backend Skill
                        </Button>
                    </div>
                    <div className="space-y-4 space-x-2">
                        <FormLabel>Tools Skills</FormLabel>
                        {toolsFields.map((field, index) => (
                            <div key={field.id} className="flex items-center gap-4">
                                <FormControl>
                                    <Input
                                        {...form.register(`toolsSkills.${index}` as const)}
                                        placeholder="Enter a tool skill"
                                        className="w-full"
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => removeTools(index)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => appendTools("")}
                        >
                            Add Tool Skill
                        </Button>
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full mt-4">
                        Create Project
                        {isLoading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CreateSkillForm;

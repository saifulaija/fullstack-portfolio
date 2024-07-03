

"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import MyDialog from "@/components/shadcn/MyDialog";
import ProjectUpdateForm from "@/components/form/projectUpdateForm";
import { IFrontendSkill} from "@/types/frontendSkill.type";
import { Badge } from "@/components/ui/badge";
import DeleteFrontendSkill from "./deleteFrontendSkill";
import { format } from "date-fns";
import FrontendSkillUpdateForm from "@/components/form/FrontendSkillUpdateForm";
export const frontendSkillColumn: ColumnDef<IFrontendSkill>[] = [
  {
    accessorKey: "name",
    header: "Frontend Skill",
    cell: ({ row }) => <Badge variant="outline">{row.original.name}</Badge>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return <div>{format(new Date(createdAt), 'yyyy-MM-dd')}</div>;
    },
  },
  {
    id: "statusActions",
    header: "Actions",
    cell: ({ row }) => {
      const skill = row.original;
      return <DeleteFrontendSkill skillId={skill._id} />;
    },
  },
  {
    id: "editActions",
    header: "Edit",
    cell: ({ row }) => {
      const skill = row.original;
      return (
        <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
          <FrontendSkillUpdateForm data={skill} />
        </MyDialog>
      );
    },
  },
];

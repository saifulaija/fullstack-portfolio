

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
import { IToolsSkill } from "@/types/toolsSkill.type";

import DeleteToolsSkill from "./deleteToolsSkill";
import ToolsSkillUpdateForm from "@/components/form/ToolsSkillUpdateForm";
export const toolsSkillColumn: ColumnDef<IToolsSkill>[] = [
  {
    accessorKey: "name",
    header: "Tools Skill",
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
      return <DeleteToolsSkill skillId={skill._id} />;
    },
  },
  {
    id: "editActions",
    header: "Edit",
    cell: ({ row }) => {
      const skill = row.original;
      return (
        <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
          <ToolsSkillUpdateForm data={skill} />
        </MyDialog>
      );
    },
  },
];

// "use client";
// import { ColumnDef } from "@tanstack/react-table";
// import { Button } from "@/components/ui/button";
// import { formateDate, formateMoney } from "@/utils/common";
// import MyDialog from "@/components/shadcn/MyDialog";
// import ProjectUpdateForm from "@/components/form/projectUpdateForm";
// import { ISkills } from "@/types/skill.type";
// import { Badge } from "@/components/ui/badge";
// import DeleteSkill from "./deleteSkill";
// export const skillColumn: ColumnDef<ISkills>[] = [
//   {
//     accessorKey: "frontendSkills",
//     header: "Frontend Skills",
//     cell: ({ row }) => {
//       const name = row.original.frontendSkills;
//       return <div>{name?.slice(0,3).map((item,index)=>(
//         <Badge variant='outline'>
//           item
//         </Badge>
//       ))}</div>;
//     },
//   },
//   {
//     accessorKey: "backendSkills",
//     header: "Backend Skills",
//     cell: ({ row }) => {
//         const name = row.original.backendSkills;
//       return <div>{name?.slice(0,3).map((item,index)=>(
//         <Badge variant='outline'>
//           item
//         </Badge>
//       ))}</div>;
//     },
//   },
//   {
//     accessorKey: "toolsSkills",
//     header: "Tools Skills",
//     cell: ({ row }) => {
//       const name = row.original.toolsSkills;
//       const name1 = row.original;
    
//       return <div>{name?.slice(0,3).map((item,index)=>(
//         <Badge variant='outline'>
//           item
//         </Badge>
//       ))}</div>;
//     },
//   },
//   {
//     accessorKey: "createdAt",
//     header:"Created At",
//     cell: ({ row }) => {
//       const lastSeen = row.original.createdAt;
//       return <div>{formateDate(lastSeen)}</div>;
//     },
//   },

//   {
//     id: "statusActions",
//     header: "Action",
//     cell: ({ row }) => {
//       const skill = row.original;
//       return <DeleteSkill skillId={skill._id} />;
//     },
//   },

//   {
//     id: "editActions",
//     header: "Action",
//     cell: ({ row }) => {
//       const project = row.original;
//       return (
//         <div>
//           <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
//             <ProjectUpdateForm data={project} />
//           </MyDialog>
//         </div>
//       );
//     },
//   },
// ];


"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import MyDialog from "@/components/shadcn/MyDialog";
import ProjectUpdateForm from "@/components/form/projectUpdateForm";
import { ISkills } from "@/types/skill.type";
import { Badge } from "@/components/ui/badge";
import DeleteSkill from "./deleteSkill";
import { formatDate } from "date-fns";
import { formateDate } from "@/utils/common";

export const skillColumn: ColumnDef<ISkills>[] = [
  {
    accessorKey: "frontendSkills",
    header: "Frontend Skills",
    cell: ({ row }) => {
      const frontendSkills = row.original.frontendSkills;
      return (
        <div>
          {frontendSkills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "backendSkills",
    header: "Backend Skills",
    cell: ({ row }) => {
      const backendSkills = row.original.backendSkills;
      return (
        <div>
          {backendSkills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "toolsSkills",
    header: "Tools Skills",
    cell: ({ row }) => {
      const toolsSkills = row.original.toolsSkills;
      return (
        <div>
          {toolsSkills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return <div>{formateDate(createdAt)}</div>;
    },
  },
  {
    id: "statusActions",
    header: "Action",
    cell: ({ row }) => {
      const skill = row.original;
      return <DeleteSkill skillId={skill._id} />;
    },
  },
  {
    id: "editActions",
    header: "Action",
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div>
          <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
            <ProjectUpdateForm data={project} />
          </MyDialog>
        </div>
      );
    },
  },
];

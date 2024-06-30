"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";


import { Button } from "@/components/ui/button";

import { formateDate, formateMoney } from "@/utils/common";
import MyDialog from "@/components/shadcn/MyDialog";






import { TProject } from "@/types/project.type";
import DeleteProject from "./deleteProject";
import ProjectUpdateForm from "@/components/form/projectUpdateForm";

export type TAuthor = {
  id: string;
  name: string;
 
  email: string;
  contactNumber:string;
  gender:"MALE" | "FEMALE";
 profilePhoto:string;
createdAt: Date;
};

export const projectColumn: ColumnDef<TProject>[] = [
  {
    accessorKey: "profilePhoto",
    header: "Image",
    cell: ({ row }) => {
      const image = row.original.imageUrl;
    
      return (
        <Image
          src={image || '/http'}
          width={40}
          height={40}
          alt="flat image"
          className="self-center rounded-md"
        />
      );
    },
  },
 
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.name;
      return <div>{name}</div>;
    },
  },
  {
    accessorKey: "liveLink",
    header: "Live Link",
    cell: ({ row }) => {
      const liveLink = row.original.liveLink;
  

      return <div><p>{liveLink}</p></div>;
    },
  },

//   {
//     accessorKey: "gender",
//     header: "Gender",
//     cell: ({ row }) => {
//       const gender= row.original.gender;
//       return <div><p>{gender}</p></div>;
//     },
//   },
//   {
//     accessorKey: "contactNumber",
//     header: "ContactNumber",
//     cell: ({ row }) => {
//       const contactNumber = row.original.contactNumber;
//       return <div><p>{contactNumber}</p></div>;
//     },
//   },


  // {
  //   accessorKey: "advanceAmount",
  //   header: "Advance Amount",
  //   cell: ({ row }) => {
  //     const advanceAmount = row.original.advanceAmount;
  //     return <div>{formateMoney(advanceAmount)}</div>;
  //   },
  // },
 
  // {
  //   accessorKey: "space",
  //   header:"Space",
  //   cell: ({ row }) => {
  //     const space = row.original.space;
  //     return <div>{space} sq ft</div>;
  //   },
  // },
  {
    accessorKey: "createdAt",
    header:"Created At",
    cell: ({ row }) => {
      const lastSeen = row.original.createdAt;
      return <div>{formateDate(lastSeen)}</div>;
    },
  },

  {
    id: "statusActions",
    header: "Action",
    cell: ({ row }) => {
      const project = row.original;
      return <DeleteProject projectId={project._id} />;
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
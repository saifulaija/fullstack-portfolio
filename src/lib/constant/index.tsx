// import { useAppSelector } from "@/hooks/hooks";
// import { useCurrentUser } from "@/redux/features/auth/authSlice";

// export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'BlogPlex'
// export const APP_DESCRIPTION =
//   process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
//   'An BlogPlex built with Next.js, Postgres, Shadcn'
//   const user =useAppSelector(useCurrentUser)

//   export const links = [
//     {
//       name: "Home",
//       hash: "#home",
//     },
//     {
//       name: "About",
//       hash: "#about",
//     },
//     {
//       name: "Projects",
//       hash: "#projects",
//     },
//     {
//       name: "Skills",
//       hash: "#skills",
//     },
//     {
//       name: "Service",
//       hash: "#service",
//     },
//     {
//       name: "Blogs",
//       hash: "/blogs"
//     },
//     {
//       name: "Education",
//       hash: "#education"
//     },
//     {
//       name: "Contact",
//       hash: "#contact",
//     },
//     {
//       name: "Dashboard",
//       hash: "/dashboard/super_admin",
//     },
  
//   ] as const;



import { useAppSelector } from '@/hooks/hooks';
import { useCurrentUser } from '@/redux/features/auth/authSlice';

// Define the type for each link object
type Link = {
  name: string;
  hash: string;
};

const useLinks = () => {
  // Fetch user using Redux selector
  const user = useAppSelector(useCurrentUser);

  // Initial links array
  const initialLinks: Link[] = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Service",
      hash: "#service",
    },
    {
      name: "Blogs",
      hash: "/blogs",
    },
    {
      name: "Education",
      hash: "#education",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ];

  // Conditionally add Dashboard link if user exists
  if (user) {
    initialLinks.push({
      name: "Dashboard",
      hash: "/dashboard/super_admin",
    });
  }

  return initialLinks;
};

export default useLinks;
export type { Link };

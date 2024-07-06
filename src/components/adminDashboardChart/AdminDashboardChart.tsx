"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import SectionHeading from "../home/section-heading"
import { Separator } from "../ui/separator"
import { useGetMetaDataQuery } from "@/redux/features/meta/metaApi"

export const description = "An interactive bar chart"

const chartConfig:any = {
  projects: {
    label: "Projects",
    color: "hsl(var(--chart-1))",
  },
  blogs: {
    label: "Blogs",
    color: "hsl(var(--chart-2))",
  },
  frontendSkills: {
    label: "Frontend Skills",
    color: "hsl(var(--chart-3))",
  },
  backendSkills: {
    label: "Backend Skills",
    color: "hsl(var(--chart-4))",
  },
  toolsSkills: {
    label: "Tools Skills",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function AdminDashboardChart() {
  const { data, isLoading } = useGetMetaDataQuery({})
  console.log(data)

  const chartData = React.useMemo(() => {
    if (!data || isLoading) return []

    return [
      { name: "Projects", value: data.data.projects },
      { name: "Blogs", value: data.data.blogs },
      { name: "Frontend Skills", value: data.data.frontendSkills },
      { name: "Backend Skills", value: data.data.backendSkills },
      { name: "Tools Skills", value: data.data.toolsSkills },
    ]
  }, [data, isLoading])

  return (
    <Card>
        <div className="p-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-20 sm:space-y-0 ">
            <div className="flex flex-col items-center border p-4  rounded-md">
              <p className="text-sm font-semibold">Total Projects</p>
              <span className="text-lg font-bold">{data?.data?.projects}</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md">
              <p className="text-sm font-semibold">Total Blogs</p>
              <span className="text-lg font-bold">{data?.data?.blogs}</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md">
              <p className="text-sm font-semibold">Total Frontend Skills</p>
              <span className="text-lg font-bold">{data?.data?.frontendSkills}</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md">
              <p className="text-sm font-semibold">Total Backend Skills</p>
              <span className="text-lg font-bold">{data?.data?.backendSkills}</span>
            </div>
            <div className="flex flex-col items-center border p-4 rounded-md">
              <p className="text-md font-semibold">Total Tools Skills</p>
              <span className="text-lg font-bold">{data?.data?.toolsSkills}</span>
            </div>
          </div>
        </div>
     <Separator/>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="name"
                  labelFormatter={(value) => value}
                />
              }
            />
            {Object.keys(chartConfig).map((key) => (
              <Bar
                key={key}
                dataKey="value"
                fill={chartConfig[key].color as any}
                label={{ position: "top", formatter: (value:any) => value }}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}





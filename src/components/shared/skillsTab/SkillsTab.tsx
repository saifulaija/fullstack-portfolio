import AddBackendSkillForm from "@/components/form/AddBackendSkillForm"
import AddFrontendSkillForm from "@/components/form/AddFrontendSkill"
import AddToolsSkillForm from "@/components/form/AddToolsSkillsForm"

import {
    Card,

} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function SkillsTab() {
    return (
        <Tabs defaultValue="" className="w-[600px]">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="frontend">Frontend Skill Add</TabsTrigger>
                <TabsTrigger value="backend">Backend Skill Add</TabsTrigger>
                <TabsTrigger value="tools">Tools Skill Add</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
                <Card className="p-4">
                    <h3 className="text-center font-semibold text-xl">Add Frontend Skills</h3>
                    <AddFrontendSkillForm />
                </Card>
            </TabsContent>
            <TabsContent value="backend">
                <Card className="p-4">
                    <h3 className="text-center font-semibold text-xl">Add Backend Skills</h3>
                    <AddBackendSkillForm />
                </Card>
            </TabsContent>
            <TabsContent value="tools">
                <Card className="p-4">
                    <h3 className="text-center font-semibold text-xl">Add Tools Skills</h3>
                    <AddToolsSkillForm />
                </Card>
            </TabsContent>

        </Tabs>
    )
}

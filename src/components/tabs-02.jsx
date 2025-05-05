import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// max-w-2xl
export default function TabsUnderlinedDemo({ tabs }) {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full gap-0">
      <TabsList className="p-0 bg-transparent rounded-none container">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-none bg-transparent h-full data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary"
          >
            <p className="text-base p-5">{tab.name}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="bg-dark">
          <div className="container py-10">{tab.component}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

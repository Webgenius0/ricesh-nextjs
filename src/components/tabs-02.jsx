import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsUnderlinedDemo({ tabs }) {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full gap-0">
      <div className="container">
        <TabsList className="p-0 bg-transparent rounded-none h-auto">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none bg-transparent h-full data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary py-3 px-6"
            >
              <p className="text-base">{tab.name}</p>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="bg-dark">
          <div className="container py-10">{tab.component}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

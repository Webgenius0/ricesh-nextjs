import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsUnderlined({
  tabs,
  containerClassName,
  tabsTriggerClassName,
}) {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full gap-0">
      <div className={containerClassName}>
        <div className="container px-5 md:px-8">
          <TabsList className="p-0 bg-transparent rounded-none h-auto flex md:block overflow-x-scroll md:overflow-x-visible justify-start">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`rounded-none bg-transparent h-full data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary py-3 md:px-6 font-normal ${tabsTriggerClassName}`}
              >
                <p className="text-sm md:text-base">{tab.name}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="bg-dark">
          <div className="container px-5 md:px-8">{tab.component}</div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

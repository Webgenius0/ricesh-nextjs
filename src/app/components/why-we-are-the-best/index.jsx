import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck } from 'lucide-react';

export default function WhyWeAreTheBest() {
   const problems = [
     {
       id: 1,
       label:
         'Supervisors and supervisees report high levels of stressful situations',
     },
     {
       id: 2,
       label:
         'Clinicians have limited guiding principles for successfully, efficiently implementing AI',
     },
     {
       id: 3,
       label: 'Career burnout is at an all time high',
     },
     {
       id: 4,
       label:
         'State & national licensure & certification renewals can be confusing',
     },
     {
       id: 5,
       label:
         'Continuing education courses not designed for neurodivergent access',
     },
   ];

   const solutions = [
     {
       id: 1,
       label:
         'Comprehensive supervision certification gives you confidence for any situation',
     },
     {
       id: 2,
       label:
         'Ethical, integrated AI training by both a veteran SLP and business professional',
     },
     {
       id: 3,
       label:
         'Proven burnout training by someone who has successfully recovered from burnout',
     },
     {
       id: 4,
       label:
         'Custom clinician-driven platform helps you easily stay on track with renewals',
     },
     {
       id: 5,
       label:
         'All courses provided in our proprietary neurodivergent-friendly, trauma-informed format',
     },
   ];
  const bestDetails = [
    {
      total: 10,
      title: 'Lorem ipsum dummy',
    },
    {
      total: 350,
      title: 'Lorem ipsum dummy',
    },
    {
      total: 500,
      title: 'Lorem ipsum dummy',
    },
    {
      total: 200,
      title: 'Reviews',
    },
  ];
  return (
    <section>
      <div className="container flex flex-col gap-8">
        <div className="w-[90%] sm:max-w-[70%]">
          <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold sm:leading-[72px] text-outfit text-foreground">
            Why are we the best?
          </h1>
          <p className="text-sm sm:text-base leading-[24px] text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            sed voluptas delectus qui architecto iure quibusdam omnis optio
            aspernatur adipisci.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 items-center  gap-4 lg:gap-6 w-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-outfit">
                Problem
              </CardTitle>
            </CardHeader>
            <div className="w-full h-[1px] bg-[#00C2C74D] shrink-0"></div>
            <CardContent className="px-6 flex flex-col gap-2">
              {problems.map((problem) => (
                <div key={problem.id} className="flex gap-2">
                  <CircleCheck className="w-4 h-4 text-[#000080] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base leading-[24px] text-muted-foreground">
                    {problem.label}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="w-full h-full bg-dark">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-outfit text-background">
                Solution
              </CardTitle>
            </CardHeader>
            <div className="w-full h-[1px] bg-[#00C2C74D] shrink-0"></div>
            <CardContent className="px-6 flex flex-col gap-2">
              {solutions.map((solution) => (
                <div key={solution.id} className="flex gap-2">
                  <CircleCheck className="w-4 h-4 text-dark-foreground shrink-0 mt-1" />
                  <p className="text-dark-foreground text-sm sm:text-base leading-[24px]">
                    {solution.label}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestDetails.map((detail) => (
            <Card className="px-6 py-4 bg-muted">
              <CardContent className={`flex flex-col items-center gap-3`}>
                <h1 className="text-primary text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] leading-[60px] font-semibold text-outfit">
                  {detail.total}+
                </h1>
                <p className="text-base csm:text-lg lg:text-xl leading-[34px] text-primary text-center">
                  {detail.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

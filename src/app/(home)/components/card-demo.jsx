import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-[350px]" data-aos="fade-up">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card subtitle</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  );
}

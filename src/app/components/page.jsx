import { Button } from '@/components/ui/button';
import { CardDemo } from './card-demo';

export default function Components() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-20">
      <div>
        <p>This Text is written in Inter font</p>
        <p className="font-outfit">This Text is written in Outfit font</p>
        <div className="py-6 flex gap-3 items-center">
          <Button className="">Primary Default</Button>
          <Button size="sm">Primary Small</Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="secondary">
            Secondary Default
          </Button>
          <Button size="sm" variant="secondary">
            Secondary Small
          </Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="outline">
            Outline Default
          </Button>
          <Button size="sm" variant="outline">
            Outline Small
          </Button>
        </div>
        <CardDemo />
      </div>
      <div>
        <p>This Text is written in Inter font</p>
        <p className="font-outfit">This Text is written in Outfit font</p>
        <div className="py-6 flex gap-3 items-center">
          <Button className="">Primary Default</Button>
          <Button size="sm">Primary Small</Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="secondary">
            Secondary Default
          </Button>
          <Button size="sm" variant="secondary">
            Secondary Small
          </Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="outline">
            Outline Default
          </Button>
          <Button size="sm" variant="outline">
            Outline Small
          </Button>
        </div>
        <CardDemo />
      </div>
      <div>
        <p>This Text is written in Inter font</p>
        <p className="font-outfit">This Text is written in Outfit font</p>
        <div className="py-6 flex gap-3 items-center">
          <Button className="">Primary Default</Button>
          <Button size="sm">Primary Small</Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="secondary">
            Secondary Default
          </Button>
          <Button size="sm" variant="secondary">
            Secondary Small
          </Button>
        </div>
        <div className="py-6 flex gap-3 items-center">
          <Button className="" variant="outline">
            Outline Default
          </Button>
          <Button size="sm" variant="outline">
            Outline Small
          </Button>
        </div>
        <CardDemo />
      </div>
    </div>
  );
}

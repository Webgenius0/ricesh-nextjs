import { Button } from '@/components/ui/button';
import { CardDemo } from './card-demo';

export default function Components() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-20 py-20" data-aos="fade-up">
      <div>
        <div>
          <h1>Colors</h1>
          <div className="space-y-4 my-8">
            <div>
              <h2>Primary</h2>
              <div className="h-10 bg-primary"></div>
            </div>
            <div>
              <h2>Secondary</h2>
              <div className="h-10 bg-secondary"></div>
            </div>
            <div>
              <h2>Dark #1A1E2E</h2>
              <div className="h-10 bg-dark"></div>
            </div>
            <div>
              <h2>Dark Foreground</h2>
              <div className="h-10 bg-dark-foreground"></div>
            </div>
            <div>
              <h2>Background</h2>
              <div className="h-10 bg-background border"></div>
            </div>
            <div>
              <h2>Foreground #121826</h2>
              <div className="h-10 bg-foreground"></div>
            </div>
            <div>
              <h2>Destructive</h2>
              <div className="h-10 bg-destructive"></div>
            </div>
            <div>
              <h2>Muted</h2>
              <div className="h-10 bg-muted border"></div>
            </div>
            <div>
              <h2>Muted Foreground</h2>
              <div className="h-10 bg-muted-foreground"></div>
            </div>
            <div>
              <h2>Warning</h2>
              <div className="h-10 bg-warning"></div>
            </div>
            <div>
              <h2>Success</h2>
              <div className="h-10 bg-success"></div>
            </div>
            <div>
              <h2>Info</h2>
              <div className="h-10 bg-info"></div>
            </div>
          </div>
        </div>

        <p>This Text is written in Inter font</p>
        <p className="font-outfit">This Text is written in Outfit font</p>
        <p className="font-poppins">This Text is written in Poppins font</p>

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

import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card";
import Input from "@/app/components/Input";
import Select from "@/app/components/Select";
import Textarea from "@/app/components/Textarea";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="neo-container py-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Steimer IQ</span>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="neo-container py-16">
        <div className="neo-card bg-neo-yellow">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">NEOBRUTALISM</h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl">
            Bold. Bright. Beautiful. A design system with hard shadows, thick
            borders, and vibrant colors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Buttons Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Buttons</span>
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="yellow">Yellow</Button>
              <Button variant="pink">Pink</Button>
              <Button variant="blue">Blue</Button>
              <Button variant="green">Green</Button>
              <Button variant="orange">Orange</Button>
              <Button variant="purple">Purple</Button>
              <Button variant="red">Red</Button>
              <Button variant="mint">Mint</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="yellow" size="sm">
                Small
              </Button>
              <Button variant="yellow" size="md">
                Medium
              </Button>
              <Button variant="yellow" size="lg">
                Large
              </Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Cards Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Cards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is a basic card with a clean white background and the
                signature neobrutalist border and shadow.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">
                Action
              </Button>
            </CardFooter>
          </Card>

          <Card variant="yellow" hover>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Hover over me! This card has interactive shadow effects that
                respond to your cursor.
              </p>
            </CardContent>
          </Card>

          <Card variant="pink">
            <CardHeader>
              <Badge variant="purple" size="sm">
                Featured
              </Badge>
              <CardTitle className="mt-2">Pink Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Cards can have any color from the neobrutalism palette.</p>
            </CardContent>
          </Card>

          <Card variant="blue">
            <CardHeader>
              <CardTitle>Blue Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bright cyan blue that pops off the screen.</p>
            </CardContent>
          </Card>

          <Card variant="mint">
            <CardHeader>
              <CardTitle>Mint Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Fresh mint green for a cool, modern look.</p>
            </CardContent>
          </Card>

          <Card variant="orange">
            <CardHeader>
              <CardTitle>Orange Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Warm orange that demands attention.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Badges Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Badges</span>
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="yellow">Yellow</Badge>
              <Badge variant="pink">Pink</Badge>
              <Badge variant="blue">Blue</Badge>
              <Badge variant="green">Green</Badge>
              <Badge variant="orange">Orange</Badge>
              <Badge variant="purple">Purple</Badge>
              <Badge variant="red">Red</Badge>
              <Badge variant="mint">Mint</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="pink" size="sm">
                Small
              </Badge>
              <Badge variant="pink" size="md">
                Medium
              </Badge>
              <Badge variant="pink" size="lg">
                Large
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Form Elements Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Form Elements</span>
        </h2>

        <div className="max-w-xl space-y-6">
          <Input label="Your Name" placeholder="Enter your name..." />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            label="With Error"
            placeholder="Something went wrong..."
            error="This field is required"
          />

          <Select
            label="Choose an Option"
            options={[
              { value: "", label: "Select one..." },
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />

          <Textarea label="Message" placeholder="Write your message here..." />

          <div className="flex items-center gap-3">
            <input type="checkbox" className="neo-checkbox" id="terms" />
            <label htmlFor="terms" className="font-medium">
              I agree to the terms and conditions
            </label>
          </div>

          <Button variant="yellow" fullWidth>
            Submit Form
          </Button>
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Color Palette Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Color Palette</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "Yellow", class: "bg-neo-yellow" },
            { name: "Pink", class: "bg-neo-pink" },
            { name: "Blue", class: "bg-neo-blue" },
            { name: "Green", class: "bg-neo-green" },
            { name: "Orange", class: "bg-neo-orange" },
            { name: "Purple", class: "bg-neo-purple" },
            { name: "Red", class: "bg-neo-red" },
            { name: "Mint", class: "bg-neo-mint" },
            { name: "Black", class: "bg-neo-black text-neo-white" },
            { name: "White", class: "bg-neo-white" },
          ].map((color) => (
            <div
              key={color.name}
              className={`neo-border neo-shadow p-6 text-center font-bold ${color.class}`}
            >
              {color.name}
            </div>
          ))}
        </div>
      </section>

      <hr className="neo-divider neo-container" />

      {/* Typography Section */}
      <section className="neo-container py-12">
        <h2 className="text-3xl font-bold mb-8">
          <span className="neo-heading">Typography</span>
        </h2>

        <Card className="max-w-2xl">
          <CardContent className="space-y-4">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <h4 className="text-2xl font-bold">Heading 4</h4>
            <h5 className="text-xl font-bold">Heading 5</h5>
            <h6 className="text-lg font-bold">Heading 6</h6>
            <p className="text-base">
              Regular paragraph text with{" "}
              <a href="#" className="neo-link">
                a neobrutalist link
              </a>{" "}
              styled with a thick underline.
            </p>
            <p className="text-sm text-gray-600">
              Small text for captions and helper text.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

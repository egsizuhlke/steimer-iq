import Button from "@/app/components/Button";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-background">
      <header className="neo-container py-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Steimer IQ</span>
          <ThemeToggle />
        </div>
      </header>

      <section className="neo-container py-16">
        <div className="neo-card bg-neo-yellow">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neo-black">
            Steimer IQ
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl">
            <a href="https://helvetiq.com/ch_de/swissiq-plus-das-spiel?srsltid=AfmBOoozh7hjwZyvDMV21-erwJWOLt-FyWriVCN3iwdhWrpnfQpQIMic">
              {"SwissIQ "}
            </a>
            but online 🇨🇭
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Login
            </Button>
            <Button variant="secondary" size="lg">
              Play as guest
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

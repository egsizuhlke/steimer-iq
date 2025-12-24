import Card from "@/app/components/Card";

export default function Footer() {
  return (
    <footer className="neo-container py-12">
      <Card variant="default" className="text-center">
        <p className="font-bold text-lg mb-2">Steimer IQ</p>
        <p className="text-gray-600 dark:text-gray-400">
          Built with Neobrutalism Design System
        </p>
      </Card>
    </footer>
  );
}

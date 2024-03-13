import ServiceForm from "@/components/ServiceForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="flex flex-col items-center w-full">
        <h3 className="text-2xl">Welcome to Rica</h3>
        <h5 className="text-xl">Import and export</h5>
        <ServiceForm />
      </div>
    </main>
  );
}

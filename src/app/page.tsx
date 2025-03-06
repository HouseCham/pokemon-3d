import dynamic from "next/dynamic";
const HomeComponent = dynamic(() => import("@/internal/infrastructure/ui/Home/HomeComponent"));

export default function Home() {
  return (
    <HomeComponent />
  );
}

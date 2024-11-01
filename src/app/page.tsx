import Clients from "@/components/Clients";
import Customize from "@/components/Customize";
import FavoriteApp from "@/components/FavoriteApp";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Sponsors from "@/components/Sponsors";
import Try from "@/components/Try";
import UseIt from "@/components/UseIt";
import WorkTogether from "@/components/WorkTogether";
import YourData from "@/components/YourData";
import YourWork from "@/components/YourWork";

export default function Home() {
  return (
    <div>
    <Hero />    
    <WorkTogether />    
    <UseIt />
    <Customize />
    <Plan />
    <YourWork />
    <YourData />
    <Sponsors />
    <FavoriteApp />
    <Clients />
    <Try />
    </div>
  );
}

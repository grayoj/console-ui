import { PageFooter } from "@suburban/components/PageFooter";
import CongratulationsSection from "@suburban/components/WelcomeSection";
import { PageVerticalNavigation } from "@suburban/components/vms/PageVerticalNavigation";

export default function Home() {
  return (
    <>
      <PageVerticalNavigation />
      <CongratulationsSection />
      <PageFooter />
    </>
  );
}

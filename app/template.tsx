import { HashScrollBridge } from "@/components/providers/HashScrollBridge";

export default function Template({ children }: LayoutProps<"/">) {
  return (
    <>
      <HashScrollBridge />
      {children}
    </>
  );
}

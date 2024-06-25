import data from "../../data/app-data.json"
import { appType } from "@/app/types//All.types"
import { GoogleAnalytics } from "@next/third-parties/google";

export function generateMetadata({ params }: { params: { id: number } }) {
  const appData: appType | any = data["app"].find(d => d.id == params.id)

  return {
    title: `${appData.name} | スイスアーミーアプリ`,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GoogleAnalytics gaId={process.env.NEXT_APP_GOOGLE_ANALYTICS_PASS ?? ""} />
    </>
  );
}
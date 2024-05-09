import DashboardSkeleton from "@/app/ui/skeletons";


//* loading.tsx ファイルを作成すると page.tsx の読み込みが完了するまでこちらのコンポーネントが表示される
export default function Loading() {
  return <DashboardSkeleton />;
}
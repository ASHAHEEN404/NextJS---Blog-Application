import { useRouter } from "next/router";
import Home from "./src/app/page"; // import the Home component

export default function CatchAll() {
  const router = useRouter();
  const { params = [] } = router.query;

  return <Home params={params} />;
}

import { useRouter } from "next/router";
import Link from "next/link";

export default function BeritaItem() {

  const {
    query: { item },
  } = useRouter();

  console.log(item)
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
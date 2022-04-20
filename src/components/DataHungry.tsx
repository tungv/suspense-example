import { PropsWithChildren } from "react";
import useSWR from "swr";
import Spinner from "./Spinner";

interface DataHungerProps {
  duration: string;
  suspense?: boolean;
  tag: string;
}

export default function DataHunger(props: PropsWithChildren<DataHungerProps>) {
  const { data } = useSWR(
    `/api/data/${props.duration}?tag=${props.tag}`,
    (url) => fetch(url),
    {
      suspense: props.suspense,
    },
  );
  if (!data) {
    return (
      <div className="flex flex-row items-center gap-1">
        <span className="text-slate-600">Loading…</span>
        <Spinner />
      </div>
    );
  }
  return <div>{props.children}</div>;
}

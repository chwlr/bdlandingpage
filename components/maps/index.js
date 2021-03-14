import dynamic from 'next/dynamic'

const LeafletMaps = dynamic(() => import("./Maps"), { ssr: false });

export default function MapsComponent() {

  return (
    <div id="peta">
      <LeafletMaps />
    </div>
  );
}

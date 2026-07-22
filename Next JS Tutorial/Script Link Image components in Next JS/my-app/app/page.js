import Image from "next/image";

export default function Home() {
  return (
    <div className="container  size-50 bg-red-300 relative">
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/3840px-Facebook_f_logo_%282021%29.svg.png"
        alt="Example"
        width={100}
        height={100}
        placeholder="empty"
        loading="eager"
        // fill={true}
      />
    </div>
  );
}
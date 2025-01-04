import Image from "next/image";

const AcceptedView = () => (
  <>
    <Image
      src="/bear-kiss.gif"
      alt="bear-kiss"
      height={400}
      width={400}
    />
    <span className="font-semibold text-pink-700">
      Thank you for accepting my request! I will cherish you forever!
    </span>
  </>
);

export default AcceptedView;
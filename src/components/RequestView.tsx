import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

interface RequestViewProps {
  scale: number;
  reqIndex: number;
  onAccept: () => void;
  onDecline: () => void;
  requestArr: string[];
}

const RequestView = ({ scale, reqIndex, onAccept, onDecline, requestArr }: RequestViewProps) => (
  <div className="flex items-center justify-center flex-col">
    <Image
      src="/bear-happy.gif"
      alt="bear-happy"
      height={200}
      width={200}
    />
    <motion.span
      animate={{ scale: 1.0 + scale * 0.3 }}
      className="text-center w-full text-pink-700"
    >
      Will You Be My Valentine?
    </motion.span>
    <div className="flex flex-row items-center">
      <Button
        color="green"
        text="Yes"
        scale={scale}
        onClick={onAccept}
        className="bg-pink-500 hover:bg-pink-700"
      />
      <Button
        text={requestArr[reqIndex]}
        color="red"
        scale={Math.max(1 / (scale * 0.95), 0.8)}
        onClick={onDecline}
        className="bg-red-500 hover:bg-red-700"
      />
    </div>
  </div>
);

export default RequestView;
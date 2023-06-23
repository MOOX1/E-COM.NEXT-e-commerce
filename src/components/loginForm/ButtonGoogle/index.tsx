import Image from 'next/image';
import googleIcon from '@/assets/googleIcon.svg';

interface IButtonGoogleProps {
  onClick: () => void;
}

function ButtonGoogle({ onClick }: IButtonGoogleProps) {
  return (
    <div
      onClick={onClick}
      aria-label="buttom-google"
      className="mt-7 flex h-auto min-w-[230px] cursor-pointer items-center rounded-3xl bg-mainBlue p-1"
    >
      <Image src={googleIcon} width={40} height={41} alt="" />
      <p className="w-full pr-5 text-center font-sans text-xs font-normal text-black">
        login com google
      </p>
    </div>
  );
}
export default ButtonGoogle;

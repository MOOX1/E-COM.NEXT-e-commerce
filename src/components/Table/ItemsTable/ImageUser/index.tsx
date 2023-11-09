import Image from 'next/image';
import { User } from 'lucide-react';

interface IImageUserProps {
  image?: string;
  keyValue: string;
}

export default function ImageUser({ keyValue, image }: IImageUserProps) {
  return (
    <div className="pr-4" key={keyValue}>
      {image && (
        <Image
          src={image}
          width={36}
          height={36}
          className="rounded-full"
          alt="image user"
        />
      )}
      {!image && (
        <div
          className={
            'relative flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white '
          }
        >
          <User className="h-6 w-6 text-mainBlue" />
        </div>
      )}
    </div>
  );
}

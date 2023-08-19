import Image from 'next/image';
import { User } from 'lucide-react';

interface IImageUserProps {
  index: string | number;
  image?: string;
  item: string;
}

export default function ImageUser({ index, image, item }: IImageUserProps) {
  return (
    <div className="pr-4" key={index}>
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
          key={item}
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

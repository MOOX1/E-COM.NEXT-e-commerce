import Image from 'next/image';
import { User } from 'lucide-react';
7;

interface ImageAdminProps {
  image?: string;
}

export default function ImageAdmin({ image }: ImageAdminProps) {
  return (
    <div className="flex  w-2/5 items-center justify-center border-r border-mainBlue/20 pr-5 ">
      {image ? (
        <Image
          src={image}
          className="h-28 w-28 rounded-full"
          width={100}
          height={100}
          alt="imagem do admin"
        />
      ) : (
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white">
          <User className="h-full w-2/4 text-mediaBlue" />
        </div>
      )}
    </div>
  );
}

import Image from 'next/image';
import { FileImage } from 'lucide-react';

interface IImageProductsProps {
  index: string | number;
  image?: string;
}

export default function ImageProducts({ index, image }: IImageProductsProps) {
  return (
    <div key={index}>
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
          <FileImage className="h-6 w-6 text-mainBlue" />
        </div>
      )}
    </div>
  );
}

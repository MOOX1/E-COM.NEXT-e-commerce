import Input from '@/components/atoms/Input';
import { SearchIcon } from 'lucide-react';

export default function InputSearch() {
  return (
    <div className="w-80">
      <Input
        type="text"
        styleOffButton="secund"
        ariaLabel="input-search"
        icon={<SearchIcon className="text-mainBlue opacity-80" />}
      />
    </div>
  );
}

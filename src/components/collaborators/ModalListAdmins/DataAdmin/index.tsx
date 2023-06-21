interface DataAdminProps {
  email?: string;
  levelAccess?: string;
  name?: string;
}

export default function DataAdmin({
  email,
  levelAccess,
  name
}: DataAdminProps) {
  return (
    <div className="w-3/5 ">
      <div className="flex flex-col items-baseline gap-1 pl-5 text-left font-alt text-white">
        <p className="font-alt text-lg font-semibold uppercase">
          {levelAccess}
        </p>
        <p className="w-min whitespace-nowrap rounded bg-mediaBlue px-2 py-1 text-base font-semibold text-white">
          {name}
        </p>
        <p className="overflow-hidden text-ellipsis text-base text-mainBlue underline opacity-80">
          {email}
        </p>
      </div>
    </div>
  );
}

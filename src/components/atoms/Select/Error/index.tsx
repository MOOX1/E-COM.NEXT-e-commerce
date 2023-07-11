interface IErrorProps {
  error?: string;
}

export default function Error({ error }: IErrorProps) {
  return (
    <>
      {error && (
        <p className="w-full py-1 text-left font-sans text-xs text-red-500">
          {error}
        </p>
      )}
    </>
  );
}

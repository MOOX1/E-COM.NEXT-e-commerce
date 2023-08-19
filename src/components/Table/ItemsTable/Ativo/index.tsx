interface IAtivoProps {
  active: boolean;
}

export default function Ativo({ active }: IAtivoProps) {
  return (
    <div className="flex w-24 flex-1 items-center justify-center gap-2">
      <p className={!active ? 'text-red-400' : ' text-green-400'}>
        {active ? 'Ativo' : 'Inativo'}
      </p>
    </div>
  );
}

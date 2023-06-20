import { Crown, Eye, Gem } from 'lucide-react';
import Div from '../../Div';
import { ReactNode } from 'react';

interface LevelAccessProps {
  icon: ReactNode;
  title: string;
  description: string;
  subDescription: string;
  seeMore?: string;
}

const LevelAccessItems: LevelAccessProps[] = [
  {
    icon: <Crown className="h-auto w-8 text-mediaBlue " />,
    title: 'Admin Super',
    description: 'O admin super tem direito de fazer qualquer mundaça no site',
    subDescription: 'não recomendamos dar esse acesso para muitas pessoas'
  },
  {
    icon: <Gem className="h-auto w-8 text-mediaBlue " />,
    title: 'Admin Simple',
    description:
      'O admin Simple tem direito de editar e cadastrar produtos e tudo relacionado a eles',
    subDescription: 'Recomendado para a maioria dos admins',
    seeMore: 'Saiba mais...'
  },
  {
    icon: <Eye className="h-auto w-8 text-mediaBlue " />,
    title: 'Admin Viewer',
    description:
      'O admin Simple serve para observação de dados e emissão de relatórios',
    subDescription: 'Recomendado para pessoas que manipulam apenas dados'
  }
];

export default function LevelAccess() {
  return (
    <div className="flex h-full w-full p-3 text-base text-mainBlue ">
      {LevelAccessItems.map((item) => (
        <Div
          key={item.description}
          initial={{ x: -50, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.5 }}
          className="flex w-2/6 flex-col items-center justify-evenly text-center"
        >
          <div className=" flex flex-col items-center justify-center">
            {item.icon}
            <p className=" text-mediaBlue">{item.title}</p>
          </div>
          <div className="w-5/6 text-sm">
            {item.description}
            <br />
            {item.seeMore && <p className="underline">{item.seeMore}</p>}
          </div>
          <p className=" w-3/4 text-xs  text-white/60">{item.subDescription}</p>
        </Div>
      ))}
    </div>
  );
}

import { Crown, Eye, Gem } from 'lucide-react';
import Div from '../motion/Div';

export default function LevelAccess() {
  return (
    <div className="w-full h-full p-3 flex text-mainBlue text-base ">
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ease: 'easeInOut', duration: 0.5 }}
        className="w-2/6 text-center flex items-center justify-evenly flex-col"
      >
        <div className=" flex flex-col items-center justify-center">
          <Crown className="text-mediaBlue w-8 h-auto " />
          <p className=" text-mediaBlue">Admin Super</p>
        </div>
        <p className="text-sm  w-3/4 ">
          O admin super tem direito de fazer qualquer mundaça no site
        </p>
        <p className=" text-xs w-3/4  text-white/60">
          não recomendamos dar esse acesso para muitas pessoas
        </p>
      </Div>
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.5 }}
        className="w-2/6 text-center flex items-center justify-evenly flex-col"
      >
        <div className=" flex flex-col items-center justify-center">
          <Gem className="text-mediaBlue w-8 h-auto " />
          <p className=" text-mediaBlue">Admin Simple</p>
        </div>
        <div className="text-sm w-5/6">
          O admin Simple tem direito de editar e cadastrar produtos e tudo
          relacionado a eles
          <br />
          <p className="underline">Saiba mais...</p>
        </div>
        <p className=" text-xs w-3/4  text-white/60">
          Recomendado para a maioria dos admins
        </p>
      </Div>
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.5 }}
        className="w-2/6 text-center flex items-center justify-evenly flex-col"
      >
        <div className=" flex flex-col items-center justify-center">
          <Eye className="text-mediaBlue w-8 h-auto " />
          <p className=" text-mediaBlue">Admin Viewer</p>
        </div>
        <p className="text-sm w-3/4 ">
          O admin Simple serve para observação de dados e emissão de relatórios
        </p>
        <p className=" text-xs w-3/4  text-white/60">
          Recomendado para pessoas que manipulam apenas dados
        </p>
      </Div>
    </div>
  );
}

import { Crown, Eye, Gem } from 'lucide-react';
import Div from '../motion/Div';

export default function LevelAccess() {
  return (
    <div className="flex h-full w-full p-3 text-base text-mainBlue ">
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ease: 'easeInOut', duration: 0.5 }}
        className="flex w-2/6 flex-col items-center justify-evenly text-center"
      >
        <div className=" flex flex-col items-center justify-center">
          <Crown className="h-auto w-8 text-mediaBlue " />
          <p className=" text-mediaBlue">Admin Super</p>
        </div>
        <p className="w-3/4  text-sm ">
          O admin super tem direito de fazer qualquer mundaça no site
        </p>
        <p className=" w-3/4 text-xs  text-white/60">
          não recomendamos dar esse acesso para muitas pessoas
        </p>
      </Div>
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, ease: 'easeInOut', duration: 0.5 }}
        className="flex w-2/6 flex-col items-center justify-evenly text-center"
      >
        <div className=" flex flex-col items-center justify-center">
          <Gem className="h-auto w-8 text-mediaBlue " />
          <p className=" text-mediaBlue">Admin Simple</p>
        </div>
        <div className="w-5/6 text-sm">
          O admin Simple tem direito de editar e cadastrar produtos e tudo
          relacionado a eles
          <br />
          <p className="underline">Saiba mais...</p>
        </div>
        <p className=" w-3/4 text-xs  text-white/60">
          Recomendado para a maioria dos admins
        </p>
      </Div>
      <Div
        initial={{ x: -50, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.5 }}
        className="flex w-2/6 flex-col items-center justify-evenly text-center"
      >
        <div className=" flex flex-col items-center justify-center">
          <Eye className="h-auto w-8 text-mediaBlue " />
          <p className=" text-mediaBlue">Admin Viewer</p>
        </div>
        <p className="w-3/4 text-sm ">
          O admin Simple serve para observação de dados e emissão de relatórios
        </p>
        <p className=" w-3/4 text-xs  text-white/60">
          Recomendado para pessoas que manipulam apenas dados
        </p>
      </Div>
    </div>
  );
}

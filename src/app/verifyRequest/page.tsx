export default function VerifyRequest() {
  return (
    <div className="flex h-screen w-screen  items-center justify-center bg-[url(../assets/backVerify.svg)] bg-cover bg-center">
      <div className="flex h-[250px] w-[350px] flex-col items-center justify-center gap-3 rounded-3xl bg-strongBlue p-5">
        <p className="w-3/4 text-center font-alt text-lg text-mediaBlue">
          Enviamos o link de acesso da sua conta
        </p>
        <p className="rounded-lg bg-mediaBlue px-5 py-2 font-alt font-bold">
          VERIFIQUE SEU E-MAIL
        </p>
      </div>
    </div>
  );
}

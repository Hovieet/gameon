import GameButton2 from "./GameButton2";

function JoinCards() {
  return (
    <section
      className="
      bg-[#F6F2FF]
      w-full
      max-w-[700px]
      px-6 sm:px-10 lg:px-16
      py-8 sm:py-10
      outline-2
      flex items-center
      shadow-[0px_4px_10px_12px_rgba(0,_0,_0,_0.1)]
    "
    >
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl font-semibold">Jak se zúčastním?</h2>

        <div>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg font-inter font-light">
            Pro účast na jednom z našich volejbalových eventů je potřeba vybrat
            termín a přihlásit se prostřednictvím našeho webu nebo aplikace
            Banana Sport.
          </p>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg font-inter font-light">
            Platbu je možné provést bankovním převodem ihned po registraci nebo
            hotově na místě před začátkem akce.
          </p>

          {/* Footer */}
          <div
            className="
            flex flex-col sm:flex-row
            items-center
            justify-between
            gap-6 sm:gap-10
            mt-10 sm:mt-14
          "
          >
            <div className="text-sm sm:text-base">BananaSport</div>

            <div className="lg:bg-black">
              <GameButton2>Přihlásit se</GameButton2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCards;

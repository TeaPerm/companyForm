## Dokumentáció

Ebben a projektben a React Hook Form könyvtárral hoztam létre a vállalati és dolgozói adatok űrlapját, valamint a hozzájuk tartozó validálást.

- A package-ek letöltése után, "npm run dev" paranccsal indítható a terminálban a projekt. 

- A vállalati adatok szakaszt egy űrlap segítségével hoztam létre, ahol a vállalat nevét, e-mail címét, dolgozók számát, majd a dolgozók adatait és egy opcionális leírást lehet megadni.

- A dolgozói adatokat dinamikusan jelenítettem meg, ahol a felhasználó a vállalati adatokban megadott dolgozók számával határozhatja meg, hány dolgozói adatlapot kell megjeleníteni. Minden adatlapon a dolgozó nevét, e-mail címét, munkakörét, életkorát és önéletrajzát lehet megadni.

- A React Hook Form segítségével valósítottam meg a validációt az összes szükséges mezőre.

- Amikor a felhasználó a vállalati űrlapra kattint a "Save" gombra, és minden mező érvényes, az adatok JSON formátumban kerülnek elküldésre a nem létező myendpoint.com/api/companySubmit endpoint felé, illetve megjelenik egy összesítés melyet egy modal segítségével valósitottam meg. A dolgozókra kattintva lehet megtekinteni a beküldött CV-t.

Összességében a projekt bemutatja a vállalati és dolgozói adatok űrlapját, amelyeket dinamikusan generál a felhasználói bevitel alapján, és biztosítja a szükséges érvényesítést, beleértve az e-mail címek, az életkor és az önéletrajz formátum validálását.

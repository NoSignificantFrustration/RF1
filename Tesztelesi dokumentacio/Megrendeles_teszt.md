# Tesztjegyzőkönyv - Megrendelés funkció

Az alábbi tesztdokumentum a Webshop projekthez tartozó 8.3.14 funkcióihoz készült. Felelőse: Szilágyi Zsolt


## 1. Teszteljárások (TP)

#### 1.1 Megrendelés leadása

1. lépés: Nyissuk meg a megfelelő weblapunkat.
2. lépés: Keressük meg a kívánt terméket.
3. lépés: Kattintsunk az adott termékre.
4. lépés: Kattintsunk a "Add to cart" gombra.
5. lépés: Válasszuk ki a kívánt mennyiséget.
6. lépés: Ellenőrizzük a megrendelési összegét és a termékek listáját.
7. lépés: Nyomjunk a "Order" gombra, majd a megjelenő alertben az "Ok"-ra.


## 2. Teszesetek (TC)

### 2.1. Termék oldal megjelenítése

#### 2.1.1. TC-01
- 2.1 Megrendelés leadása
- 2.1.1. TC-01
- TP: TP-01
- Leírás: A vásárló egy adott termék oldalán kiválasztja a kívánt mennyiséget és leadja a megrendelését.
- Bemenet: Kattintás a "Add to cart", "Order", "Ok" gombokra.
- Művelet: A rendszer rögzíti a megrendelést.
- Elvárt kimenet: A vásárló megkapja a megrendelés visszaigazolását.

## 3. Tesztriportok (TR)

### 3.1. Termék oldal megjelenítése

#### 3.1.1. TR-01 (TC-01)
Customer felhasználó, tud rendelni
- TP: TP-01
  1. lépés: Megnyitottam a deployolt weboldalt.
  2. lépés: Kiválasztottam egy adott terméket.
  3. lépés: rákattintottam a termékre
  4. lépés: átkerültem a termék oldalra
  5. lépés: Rányomtam a "Add to cart" gombra
  6. lépés: Átkerültem a kosár oldalra
  7. lépés: Ellenőriztem, hogy a kosár oldal tartalmazza-e a kiválasztott termék részleteit.
  8. lépés: Rá kattintottam a "Order" gombra.
  9. lépés: Véglegesítettem a rendelést az "Ok" gombra kattintva. 
 10. lépés: Ellenőriztem, hogy kaptam e visszaigazolást.

 #### 3.1.1. TR-02 (TC-01)
 Nem Customer felhasználó, nem tud rendelni
- TP: TP-01
  1. lépés: Megnyitottam a deployolt weboldalt.
  2. lépés: Kiválasztottam egy adott terméket.
  3. lépés: rákattintottam a termékre
  4. lépés: átkerültem a termék oldalra
  5. lépés: Rányomtam a "Add to cart" gombra
  6. lépés: Átkerültem a kosár oldalra
  7. lépés: Ellenőriztem, hogy a kosár oldal tartalmazza-e a kiválasztott termék részleteit.
  8. lépés: Rá kattintottam a "Order" gombra.
  9. lépés: Kaptam egy alertet, hogy customer kell legyek a rendeléshez.








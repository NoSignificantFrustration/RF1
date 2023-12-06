# Tesztjegyzőkönyv - Termék funkciók

Az alábbi tesztdokumentum a Webshop projekthez tartozó 8.3.17 Termék: Kommentek megvalósítása funkcióihoz készült. Felelőse: Varga András Bendegúz


## 1. Teszteljárások (TP)

#### 1.1 Termék oldal megjelenítése

  1. lépés: Nyissuk meg a megfelelő weblapunkat
  2. lépés: Keressük meg a kivánt terméket
  3. lépés: Kattinsunk az adott termékre
  4. lépés: Megjelenik a termék adatai, képe, vélemyényei

#### 1.2 Komment hozzáadása
  
   0. lépés: Egy adott termék oldalán vagyunk már
   1. lépés: Kattintsunk az értékelés beviteli mezőre majd írjuk be egy 1-5 ig terjedő értéket
   2. lépés: Ezután egy rövid megjegyzés után kattintsunk az `Értékelés` gombra


## 2. Teszesetek (TC)

### 2.1. Termék oldal megjelenítése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Ha a főoldalon egy termék információ jobban érdekelnek, vagy a kosárba szeretnénk helyezni akkor meg kell nyissuk a termék oldalt.
- Bemenet: kattintás
- Művelet: nyomjunk az adott termékre gombot 
- Elvárt kimenet: másik oldalra kerülünk ahol csak az az egy termék látható több adattal.


### 2.2. Komment hozzáadása

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: A kivánt terméket értékelni szeretnénk az értélés mezők helyes kitöltése után az `Értékelés` gombra kattintunk.
- Bemenet: kattintás
- Művelet: nyomjunk a `Értékel`gombra
- Elvárt kimenet: A kommentünk hozzáadódik a komment listához.

#### 2.2.2. TC-01
- TP: TP-02
- Leírás: A kivánt terméket értékelni szeretnénk az értélés mezők helytelen kitöltése után az `Értékelés` gombra kattintunk.
- Bemenet: kattintás
- Művelet: nyomjunk a `Értékel`gombra
- Elvárt kimenet: Hibát jelez.

## 3. Tesztriportok (TR)

### 3.1. Termék oldal megjelenítése

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
  1. lépés: megnyitottam a deployolt weboldalt
  2. lépés: kiválasztottam egy adott terméket
  3. lépés: rákattintottam a termékre
  4. lépés: átkerültem a termék oldalra
  5. lépés: ellenőriztem jó termékoldalra dobott-e be


### 3.2. Komment hozzáadása

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
  0. lépés: kiválasztottam egy adott terméket
  1. lépés: termék oldalra kerültem a termékre kattintással
  2. lépés: kommentet írtam
  3. lépés: megnéztem a termék alatt megjelent a comment

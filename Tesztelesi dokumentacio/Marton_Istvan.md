# Tesztjegyzőkönyv - Termék funkciók

Az alábbi tesztdokumentum a Webshop projekthez tartozó 8.3.15 funkcióihoz készült. Felelőse: Szilágyi Martin


## 1. Teszteljárások (TP)

#### 1.1 Termék oldal megjelenítése

  1. lépés: Nyissuk meg a megfelelő weblapunkat
  2. lépés: Keressük meg a kivánt terméket
  3. lépés: Kattinsunk az adott termékre
  4. lépés: Megjelenik a termék adatai, képe, vélemyényei

#### 1.2 Termék kosárba helyezése
  
   0. lépés: Egy adott termék oldalán vagyunk már
   1. lépés: Kattintsunk a kosárba gombra
   2. lépés: Ha sikerült akkor a kosár oldalon a termék a kosárba került


## 2. Teszesetek (TC)

### 2.1. Termék oldal megjelenítése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Ha a főoldalon egy termék információ jöobban érdekelnek, vagy a kosárba szeretnénk helyezni akkor meg kell nyissuk a termék oldalt.
- Bemenet: kattintás
- Művelet: nyomjunk az adott termékre gombot 
- Elvárt kimenet: másik oldalra kerülünk ahol csak az az egy termék látható több adattal.


### 2.2. Termék kosárba helyezése

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: A kivánt terméket a termék oldal megnézése után meg szeretnénk vásárolni így kosárba kell helyezzük.
- Bemenet: kattintás
- Művelet: nyomjunk a kosárba gombra
- Elvárt kimenet: Megkapjuk a vásárló kosarát és abban a terméket

## 3. Tesztriportok (TR)

### 3.1. Termék oldal megjelenítése

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
  1. lépés: megnyitottam a deployolt weboldalt
  2. lépés: kiválasztottam egy adott terméket
  3. lépés: rákattintottam a termékre
  4. lépés: átkerültem a termék oldalra
  5. lépés: ellenőriztem jó termékoldalra dobott-e be


### 3.2. Termék kosárba helyezése

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
  0. lépés: kiválasztottam egy adott terméket
  1. lépés: termék oldalra kerültem a termékre kattintással
  2. lépés: rákatintottam a kosárba gombra
  3. lépés: megnéztem a kosár oldalon tényleg az a termék került-e bele
  

    

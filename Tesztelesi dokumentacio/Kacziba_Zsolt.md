# Tesztjegyzőkönyv - Navigációs Bár
Az alábbi tesztdokumentum a Webshop projekthez tartozó 8.3.3 funkcióihoz készült. Felelőse: Fekete István


## 1. Teszteljárások (TP)

#### 1.1 Login oldalra irányitás 

  1. lépés: Nyissuk meg a megfelelő weblapunkat
  2. lépés: Keressük meg fent a navigációs bárt
  3. lépés: Kattintsunk az adott menü pontra
  4. lépés: Átirányit a login oldalra 

#### 1.2 Kosárba irányitás
  
   0. lépés: Nyissuk meg a megfelelő weblapunkat
   1. lépés: Keressük meg fent a navigációs bárt
   2. lépés: Kattintsunk a kosárba gombra
   3. lépés: Ha sikerült akkor a kosár oldalon a termék a kosárba került

#### 1.3 Admin Felhasználó oldalára iránytás
  
   0. lépés: Lépjünk be az admin fiokba
   1. lépés: Kattintsunk az admin gombra 
   2. lépés: Átkerülünk az admin oldalára

## 2. Tesztesetek (TC)

### 2.1. Login oldalra irányitás 

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Ha beakarunk lépni akkor rákatintunk a belépés gombra akkor a belépés oldalra navigál
- Bemenet: kattintás
- Művelet: nyomjunk az adott belépés gombot 
- Elvárt kimenet: másik oldalra kerülünk, ahol csak az az egy login oldal látható.


### 2.2. Kosárba irányitás

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Ha bekarunk lépni a kosárba és rendelés leadni akkor a kosár oldalra navigál
- Bemenet: kattintás
- Művelet: nyomjunk a kosárba gombra
- Elvárt kimenet: Megkapjuk a vásárló kosarát és abban a terméket

### 2.3. Admin Felhasználó oldalára iránytás

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: Ha módosítani vagy törölni szeretnénk a terméket akkor ezen az oldalon lesz lehetőségünk rá és admin gombra kattintva oda navigál
- Bemenet: kattintás
- Művelet: nyomjunk a módosítás gombra
- Elvárt kimenet: Megkapjuk a termékeket és a felhasználókat is kilistázva 

## 3. Tesztriportok (TR)

### 3.1. Login oldalra irányitás 

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
  1. lépés: megnyitottam a weboldalt
  2. lépés: kiválasztom a login menü pontot
  3. lépés: rákattintottam a menü pontra
  4. lépés: átkerültem a login oldalra
  5. lépés: ellenőriztem, hogy a login oldalra dobot


### 3.2. Kosárba irányitás

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
  1. lépés: megnyitottam a weboldalt
  2. lépés: kiválasztom a kosár menü pontot
  3. lépés: rákattintottam a menü pontra
  4. lépés: átkerültem a kosár oldalra
  5. lépés: ellenőriztem, hogy a kosár oldalra dobot
  
### 3.2. Admin Felhasználó oldalára iránytás

#### 3.2.1. TR-01 (TC-01)
- TP: TP-03
  1. lépés: Bejelentkeztem admin felhasználóval
  2. lépés: A megjelent az admin ikont kiválasztom
  3. lépés: rákattintottam a menü pontra
  4. lépés: átkerültem az admin oldalra
  5. lépés: ellenőriztem, hogy az admin oldalra dobot
    

# Tesztjegyzőkönyv - Deployment

Az alábbi tesztdokumentum a Webshop projekthez tartozó 8.3.21 Termék funkcióihoz készült. Felelőse: Varga András Bendegúz

## 1. Teszteljárások (TP)

#### 1.1 Oldal megjelenítése
1. lépés: Csatlakoztam a hálózatra
2. lépés: Megnyitunk egy tetszőleges böngészőt
3. lépés: Beírjuk a keresőbe az alábbi linket: webshop-rf1-ib153.firebaseapp.com
4. lépés: Betöltjük az oldalt

## 2. Teszesetek (TC)

### 2.1. Elérjük az alkalmazást

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Ha kapcsolódtunk az internethez, akkor a böbgészőben elérjük az alkalmazást
- Bemenet: webshop-rf1-ib153.firebaseapp.com
- Művelet: enter gomb lenyomása vagy újratöltés ikonra kattintás
- Elvárt kimenet: a főoldalt látjuk ahol az összes termék ki van listázva, illetve a fejlécben további funkciók elérhetőek

### 2.2. Nem érjük el az alkalmazást

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Ha nem kapcsolódtunk az internethez, akkor a böbgészőben nem elérjük az alkalmazást
- Bemenet: webshop-rf1-ib153.firebaseapp.com
- Művelet: enter gomb lenyomása vagy újratöltés ikonra kattintás
- Elvárt kimenet: Nem érjük el az oldalt, a böngésző hálózati hibával tér vissza "Nincs internet"/ "Hiba a hálózati kapcsolat során"

## 3. Tesztriportok (TR)

### 3.1. Elérjük az alkalmazást

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: csatlakoztam a hálózatra
    2. lépés: megnyitottam egy tetszőleges böngészőt
    3. lépés: beírtam a keresőbe az alábbi linket: webshop-rf1-ib153.firebaseapp.com
    4. lépés: betöltöttem az oldalt
    5. lépés: elértem a főoldalt, ahol az összes termék ki lett listázva, illetve a fejlécben további funkciók elérhetőek


### 3.2. Nem érjük el az alkalmazást

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: nem csatlakoztam a hálózatra
    2. lépés: megnyitottam egy tetszőleges böngészőt
    3. lépés: beírtam a keresőbe az alábbi linket: webshop-rf1-ib153.firebaseapp.com
    4. lépés: betöltöttem az oldalt
    5. lépés: nem értem el az oldalt, a böngésző hálózati hibával tért vissza "Nincs internet"/ "Hiba a hálózati kapcsolat során"

  


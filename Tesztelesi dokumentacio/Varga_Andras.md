# Tesztjegyzőkönyv-`Termék hozzáadása`

Az alábbi tesztdokumentum a `2023_ib153i-11_b Webshop` projekthez tartozó `8.3.19 Admin: Listázások (Felhasználó/Termék/Tag) (R)` és  `8.3.20 Admin: Táblák backend (CRUD)`  funkcióihoz készült. Felelőse: `Varga András Bendegúz` 

## 1. Teszteljárások (TP)

### 1.1. Termék hozzáadása funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Termék hozzáadása funkció tesztelése
    0. lépés: Nyissuk meg az oldalt, lépjünk be admin felhasználóként, navigáljunk az admin oldalra, és válasszuk ki a `termék hozzáadása` funkciót
    1. lépés: A `Product name` szövegbeviteli mezőbe írjunk be a termék nevét
    2. lépés: A `Price` beviteli mezőbe írjunk be a termék árát
    3. lépés: A `Desription` szövegbeviteli mezőbe írjunk be a termék leírását
    4. lépés: A `ImageURL` szövegbeviteli mezőbe írjunk be a termék képének elérési útját
    5. lépés: Nyomjuk meg a `Submit`


## 2. Tesztesetek (TC)

### 2.1. Termék hozzáadása tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Termék hozzáadása funkció tesztelése
- Bemenet: `Product name` = Kirakati telefon ; `Price` = 100 ; `Desription` = Egy kirakati telefon, ami úgy néz ki, mintha igazi lenne ; `ImageURL` = products_image/zflip5.jpg
- Művelet: nyomjuk meg a `Submit` gombot 
- Elvárt kimenet: a termék megjelenik a termék listában


## 3. Tesztriportok (TR)

### 3.1. Termék hozzáadása tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Kirakati telefon-t beírtam
    2. lépés: 100-t beírtam 
    3. lépés: Egy kirakati telefon, ami úgy néz ki, mintha igazi lenne-t beírtam
    4. lépés: products_image/zflip5.jpg-t beírtam
    5. lépés: `Submit` gombot megnyomtam, az oldalon megjelent a temék, minden az elvártak szerint működött
    



function Telefon(marka, cena, kolor) {
	this.marka = marka;
    this.cena = cena;
    this.kolor= kolor;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", cena to " + this.cena + ", a kolor to " + this.kolor + ".");
}

var galaxyS8 = new Telefon('Galaxy S8', 2000, 'biały');
var iPhone6S = new Telefon('iPhone 6S', 3000, 'srebrny');
var OnePlusOne = new Telefon('OnePlus', 1000, 'czarny');

galaxyS8.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
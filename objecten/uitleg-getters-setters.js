
/*Getters kunnen data formatteren voordat deze wordt teruggegeven.
Setters kunnen invoer valideren.
Bijvoorbeeld:
Stel dat je prijzen met btw wil tonen zonder de originele prijs te wijzigen:*/
// Getter voor prijs inclusief 21% BTW

/*get prijsmetBTW(){
 return this.price * 1.21;
}
//een setter zorgt voor validatie. In dit geval test hij of de prijs groter is dan 0 vooraleer
// de getter zijn werk kan doen.

set updatePrice(newPrice){
 if (newPrice > 0) {
  this.price = newPrice;
 } else{
  console.error('Prijs moet positief zijn!');
 }
}*/

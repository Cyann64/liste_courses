export class Article {

  nom: string;
  quantite: number;
  prix: number;

  constructor(nom, quantite, prix) {
    this.nom = nom;
    this.quantite = quantite;
    this.prix = prix;
  }

  get getNom (): string {
    return this.nom;
  }

  get getQuantite (): number {
    return this.quantite;
  }

  get getPrix (): number {
    return this.prix;
  }
}

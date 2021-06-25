// Utilizando o Polimorfismo


class ContaCorrente extends Conta
{
   TrocaTaxa(valor: number)
   {
       if (this.Saldo > 50000) { valor = 0; }
       else { valor += 10.00; }
       this.Saldo =+ valor;
   }
}
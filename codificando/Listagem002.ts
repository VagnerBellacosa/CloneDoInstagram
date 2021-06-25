//  Abstração com TypeScript por meio de interfaces

export module BancoDevmedia
{
   export interface Taxa { MudarTaxa(valor: number); }
   export class ContaCorrente implements Taxa {
       MudarTaxa(valor: number) { }
   }
}
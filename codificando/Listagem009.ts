// Utilização de Módulos

module Validacoes {
 class ValidacaoCEP {
     ehValido(s: string) {
         return s.length === 8 && numberRegexp.test(s);
     }
 }
}
export { ValidacaoCEP };




/// Para usar o Modulo 
import { ValidacaoCEP } from "./ValidacaoCEP";
  let validaCEP = new ValidacaoCEP();
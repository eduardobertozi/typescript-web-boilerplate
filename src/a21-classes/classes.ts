export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adiconaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
empresa1.adiconaColaborador(new Colaborador('Eduardo', 'Bertozi'));
empresa1.adiconaColaborador(new Colaborador('Thalyta', 'Bertozi'));
empresa1.adiconaColaborador(new Colaborador('Mirella', 'Bertozi'));

empresa1.mostraColaboradores();

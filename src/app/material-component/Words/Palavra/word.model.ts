
export class Palavra {
    check: boolean = true;
    kibundo: string = '';
    kikongo: string = '';
    portugues: string = '';

    public  DividirKikongo()
    {
      return this.kikongo.split(",")
          
    }

    public  Dividirkibundo()
    {
      return this.kibundo.split(",")
          
    }

    public AumentarKikongo(NovaPlavra:String)
    {
        this.kikongo=NovaPlavra+","+this.kikongo;
        return this.kikongo;
    }

    public RetirarKikongo(NovaPlavra:String)
    {
         let valores=this.DividirKikongo();
          let NovoValor= valores.filter(function(item){
            if(item!=NovaPlavra)return  item;  //retorna o item original elevado ao quadrado
            else return '' ;
            });

            return NovoValor;
    }

    public Aumentarkibundo(NovaPlavra:String)
    {
        this.kibundo=NovaPlavra+","+this.kibundo;
        return this.kibundo;
    }

    public Retirarkibundo(NovaPlavra:String)
    {
         let valores=this.Dividirkibundo();
          let NovoValor= valores.filter(function(item){
            if(item!=NovaPlavra)return  item;  //retorna o item original elevado ao quadrado
            else return '' ;
            });

            return NovoValor;
    }

    public ConfirmarPlavra()
    {
        this.check=true;
    }
  }

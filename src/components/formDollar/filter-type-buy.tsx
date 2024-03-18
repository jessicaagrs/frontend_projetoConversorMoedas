interface FilterTypeBuy {

};

type FilterTypeBuyProps = {

};

export default function FilterTypeBuy() {
    return (
        <div>
           <span>Tipo de Compra</span> 
           <input type="radio" name="radioMoney" />
           <label htmlFor="radioMoney">Dinheiro</label>
           <input type="radio" name="radioCard" />
           <label htmlFor="radioCard">Cartão</label>
        </div>
    )
};
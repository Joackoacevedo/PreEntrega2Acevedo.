import './ItemListContainer.css'


export const ItemListContainer = ( {saludo} ) => {

    return (
        <div className="list__container">
            <h2>LAS MEJORES ZAPATILLAS</h2>
            <hr />
            <p>{saludo}</p>
        </div>
    )
}
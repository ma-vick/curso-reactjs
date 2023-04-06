import Item from './Item';

function List() {
    return (
        <>  {/* fragment */}
            <h1>minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Mercedes Benz"/>
                <Item marca="Porsche"/>
            </ul>
        </>
    );
}

export default List;
import Item from './Item';

function List() {
    return (
        <>  {/* fragment */}
            <h1>minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Mercedes Benz" ano_lancamento={1964}/>
                <Item marca="Porsche"/>
            </ul>
        </>
    );
}

export default List;
const Pagination = ({nbParPage, total}) => {
    const pageNb = [];

    for(let i = 1; i <= Math.ceil(total /nbParPage); i++){
        pageNb.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNb.map(nb => (
                    <li></li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
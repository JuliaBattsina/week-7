function Dogs ({ dogsList}) {
    return (
        <div>
            { dogsList.map( dogsList => {
                const {id, image} = dogsList;
                return (
                    <div key = {id}>
                        <p>{id}</p>
                        <img src={image}/>
                    </div>
                )
            }
                )}
        </div>
    )
}
export default Dogs;
function Dogs ({apple}) {
    return (
        <div>
            {apple.map(apple => {
                const {id, image} = apple;
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


export const CharacterInfo = ({image, name, status}) => {
    return(
        <>
                <img src={image} width={200} height={200}></img>
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{name}</p>
                    <footer className="blockquote-footer"> {status} </footer>
                </blockquote>
        </>
    )
}
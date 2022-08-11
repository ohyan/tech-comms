const TagContainer = (props: { tags: string[] }) => {
    return (
        <div>
        {
            props.tags.map((tag) => (
                <span className= 'tag' > { tag } </span>
            ))
        }
        </div>
    )
}

export default TagContainer

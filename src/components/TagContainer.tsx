type Props = {
    tags: string[];
    onTagClick: (tag: string) => void;
}

const TagContainer = (props: Props) => {
    return (
        <div>
        {
            props.tags.map((tag) => (
                <button onClick={() => props.onTagClick(tag)} className='button tag' > { tag } </button>
            ))
        }
        </div>
    )
}

export default TagContainer

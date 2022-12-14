import TagContainer from './TagContainer'

type CommunityProps = {
    name: string,
    tags: string[],
    description: string,
    link: string
    onTagClick: (tag: string) => void
}

const  Community = (props: CommunityProps) => {
    return (
        <div>
            <div className='color-block'>
                {TagContainer({ tags: props.tags, onTagClick: props.onTagClick })}
                <div className='comm-name-row'>
                    <a href={props.link} className='comm-name'> {props.name}</a>
                </div>
                <div> {props.description} </div>
            </div>
        </div>
    )
}

export default Community
export type { CommunityProps }

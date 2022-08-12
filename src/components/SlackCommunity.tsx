import TagContainer from './TagContainer'

type CommunityProps = {
    name: string,
    tags: string[],
    description: string,
    homepage?: string
    slackLink?: string,
    onTagClick: (tag: string) => void
}

const  SlackCommunity = (props: CommunityProps) => {
    console.log(props)
    return (
        <div>
            <div className='card'>
                {props.name}
                <div>
                    {TagContainer({ tags: props.tags, onTagClick: props.onTagClick })}
                    <div>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlackCommunity
export type { CommunityProps }

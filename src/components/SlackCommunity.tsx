import TagContainer from './TagContainer'

type CommunityProps = {
    name: string,
    tags: string[],
    description: string,
    homepage?: string
    slackLink?: string,
}

const SlackCommunity = (props: CommunityProps) => {
    return (
        <div>
            <div className='card'>
                {props.name}
                <div>
                    {TagContainer({ tags: props.tags })}
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

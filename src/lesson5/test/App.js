import { Fetch } from "./Fetch"
import UserRepo from "./UserRepo"

function UserDetail({ data }) {
    return (
        <div>
            <img src={data.avatar_url} alt={data.login} style={{ width: 200 }}></img>
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
            <UserRepo
                userName={data.login}
                onSelect={repoName => console.log(`${repoName} selected`)}
            />
        </div>
    )
}

function GithubUser({ userName, test }) {
    return (<Fetch url={`https://api.github.com/users/${userName} `} renderSuccess={UserDetail} />)
}


export default function App() {
    return (<GithubUser userName="moonhighway" test="bb" />)
}
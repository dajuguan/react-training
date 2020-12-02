export const InputLable = () => {
    return (
        <div>
            <label >{"My hacker Stories"}</label>
            <input
            />
        </div>
    )
}
export const Item = ({ item, onRemoveItem }) => {
    console.log("....", item)
    return <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span> {item.num_comments}</span>
        <span>{item.points}</span>
        <span>
            <button type="button" onClick={onRemoveItem}>
                Dismiss
            </button>
        </span>
    </div>
}


// module.exports = {
//     InputLable,
//     Item
// }


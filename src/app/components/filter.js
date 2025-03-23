
export default function Filter({ filter, setFilter }) {
    return (
        <div>
            <label htmlFor="category-filter">Filter by category:</label>
            <select id="category-filter" name="category-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="laptop">Laptops</option>
                <option value="accessory">Accessories</option>
            </select>
        </div>
    )
}
const SortingBlock = ({ unsortedArray, bubbleSort, selectionSort, sortedArray }) => {
    return (
        <div>
            <div>
                <p>Original array:</p>
                <p>[ {unsortedArray.join(", ")} ]</p>
                <button onClick={() => bubbleSort(unsortedArray)}>Bubble sort</button>
                <button onClick={() => selectionSort(unsortedArray)}>Selection sort</button>
            </div>
            <div>
                <p>Sorted array:</p>
                <p>[ {sortedArray.join(", ")} ]</p>
            </div>
        </div>
    )
}

export default SortingBlock;
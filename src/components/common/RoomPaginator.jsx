import React from 'react'

const RoomPaginator = ({currentPage, totalPages, onPageChange}) => {
    const pageNumbers = Array.from({length : totalPages}, (_, i) => i+1)
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumbers.map((pageNumber) => (
         <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
            <button
	className='page-link'
	onClick={() => onPageChange(pageNumber)}
	style={{
		backgroundColor: currentPage === pageNumber ? "#000" : "#fff",
		color: currentPage === pageNumber ? "#fff" : "#000",
		border: "1px solid #000"
	}}
>
	{pageNumber}
</button>

    </li>
  ))}
</ul>

    </nav>
  )
}

export default RoomPaginator

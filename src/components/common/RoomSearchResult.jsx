import React, { useState } from "react"
import RoomCard from "../room/RoomCard"
import { Button, Row } from "react-bootstrap"
import RoomPaginator from "./RoomPaginator"

const RoomSearchResults = ({ results, onClearSearch }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const resultsPerPage = 3
	const totalResults = results.length
	const totalPages = Math.ceil(totalResults / resultsPerPage)

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const startIndex = (currentPage - 1) * resultsPerPage
	const endIndex = startIndex + resultsPerPage
	const paginatedResults = results.slice(startIndex, endIndex)

	return (
		<>
			{results.length > 0 ? (
				<>
					<h5 className="text-center mt-5">
						Search Results ({totalResults} room{totalResults !== 1 ? 's' : ''} found)
					</h5>
					<Row>
						{paginatedResults.map((room) => (
							<RoomCard key={room.id} room={room} />
						))}
					</Row>
					<Row className="mt-3">
						{totalResults > resultsPerPage && (
							<div className="col-md-6">
								<RoomPaginator
									currentPage={currentPage}
									totalPages={totalPages}
									onPageChange={handlePageChange}
								/>
							</div>
						)}
						<div className="col-md-6 text-end">
							<Button variant="secondary" onClick={onClearSearch}>
								Clear Search
							</Button>
						</div>
					</Row>
				</>
			) : (
				<div className="text-center mt-4">
					<p>No rooms found matching your criteria.</p>
				</div>
			)}
		</>
	)
}

export default RoomSearchResults
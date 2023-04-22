import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react"

const StaffList = () => {
	const tableFields = ["NAME", "EMAIL", "PHONE NUMBER", "POSITION", "GENDER"]
	return (
		<TableContainer>
			<Table>
				<Thead>
					<Tr>
						{tableFields.map((e, i) => (
							<Th key={i}>
								{e}
							</Th>
						))}
					</Tr>
				</Thead>
			</Table>
		</TableContainer>
	)
}

export default StaffList
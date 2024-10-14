import React from "react";
import { Table } from "@mantine/core";

export default function GenerateTable({ body }) {
	return (
		<Table>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Specification</Table.Th>
					<Table.Th>Details</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{body}</Table.Tbody>
		</Table>
	);
}

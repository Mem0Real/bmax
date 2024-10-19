import React from "react";
import { Table } from "@mantine/core";

import { raj } from "@/app/ui/fonts";

export default function GenerateTable({ body }) {
	return (
		<Table>
			<Table.Thead>
				<Table.Tr className={`w-fit px-40 ${raj.className}`}>
					<Table.Th>Specification</Table.Th>
					<Table.Th>Details</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{body}</Table.Tbody>
		</Table>
	);
}

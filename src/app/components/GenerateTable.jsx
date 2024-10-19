import React from "react";
import { Table } from "@mantine/core";

import { Rajdhani, Raleway } from "next/font/google";

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const raj = Rajdhani({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function GenerateTable({ body }) {
	return (
		<Table>
			<Table.Thead>
				<Table.Tr className={raj.className}>
					<Table.Th>Specification</Table.Th>
					<Table.Th>Details</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody className={raleway.className}>{body}</Table.Tbody>
		</Table>
	);
}

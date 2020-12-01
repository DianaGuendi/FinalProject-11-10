import React, { useState } from "react";
import PropTypes from "prop-types";
import { QuoteCard } from "./QuoteCard";

export function QuotesList() {
	const [quotes, setQuotes] = useState([
		{
			Length: 48,
			Width: 40,
			Height: 50,
			Weight: 500,
			Address: "8621 NW 15th St",
			City: "Pembroke Pines",
			state: "Florida",
			zipcode: 33024
		},
		{
			Length: 48,
			Width: 40,
			Height: 60,
			Weight: 800,
			Address: "13022 SW 88th terr",
			City: "Miami",
			state: "Florida",
			zipcode: 33186
		},
		{
			Length: 48,
			Width: 40,
			Height: 46,
			Weight: 300,
			Address: "12015 Main street ",
			City: "Greenville ",
			state: "South Carolina",
			zipcode: 29614
		}
	]);
	return (
		<div>
			<div className="row">
				{quotes.map((quote, index) => (
					<QuoteCard
						key={index}
						index={index}
						Length={quote.Length}
						Width={quote.Width}
						Height={quote.Height}
						Weight={quote.Weight}
						Address={quote.Address}
						City={quote.City}
						state={quote.state}
						zipcode={quote.zipcode}
					/>
				))}
			</div>
		</div>
	);
}

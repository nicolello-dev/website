import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method == "POST") {
		
		const { id, data } = req.body;
		
		const jsonDirectory = path.join(process.cwd(), 'data');
		const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

		const json = JSON.parse(fileContents)
		json["people"][id] = data

		await fs.writeFile(jsonDirectory + '/data.json', JSON.stringify(json, null, 4))
		
		res.status(200).json({"success": true});
		
	} else {
		
		res.status(405).json("Method not allowed!");
		
	}
}
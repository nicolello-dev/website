import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method == "GET") {
		
		const name: string | string[] | undefined = req.query.name;

		if(name == undefined || typeof(name) != "string") {
			res.status(400).json("Bad request! name is undefined.")
		}
		
		const jsonDirectory = path.join(process.cwd(), 'data');
		const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
		
		const json = JSON.parse(fileContents).people
		
		res.status(200).json(json[name as string]);
		
	} else {
		
		res.status(405).json("Method not allowed!");
		
	}
}
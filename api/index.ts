import { server } from '../src/server/Server';

export default function handler(req: any, res: any) {
	return server(req, res);
}



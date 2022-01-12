import { opine, Router } from "opine";

const app = opine();
const router = Router();
const PORT = 3000;
const BASE_PATH = "/api/v1";

router.get("/", (_, res) => {
	res.setStatus(200).json({ ok: true });
});
app.use(BASE_PATH, router);

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}${BASE_PATH}`);
});

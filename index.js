import express from "express"
import cors from "cors"

const server = express()
server.use(cors())
server.use(express.json())

const userInfos = []

const tweets = [
	{
		username: "erick",
		avatar: "https://s.gravatar.com/avatar/e08dfbb9cbab6ec22af90299c400036b?s=200",
		tweet: "olárrr"
	},
	{
		username: "patrick",
		avatar: "https://upload.wikimedia.org/wikipedia/pt/b/b1/Patrick_Estrela.png",
		tweet: "eu odeio o hub"
	},
	{
		username: "sandybochechas",
		avatar: "https://assets.papelpop.com/wp-content/uploads/2021/05/sandy-bob-esponja.png",
		tweet: "quem ta afim de caçar agua-vivas?"
	},
	{
		username: "lulamolusco",
		avatar: "https://cf.shopee.com.br/file/c5f7cf93461037798997592a698e7fea",
		tweet: "eu quero tocar flauta e reclamar da vida"
	},
	{
		username: "sirigueijo",
		avatar: "https://i.pinimg.com/550x/c4/8b/1b/c48b1bedcef71689757ef0e0f19fcfdd.jpg",
		tweet: "eu amo dinheiro"
	},
	{
		username: "plankton",
		avatar: "http://pm1.narvii.com/6738/0d700e090c890c04e2a14019cb356609d190c68av2_00.jpg",
		tweet: "alguem sabe a formula do hamburguer de siri?"
	},
	{
		username: "larrylagosta",
		avatar: "https://t.ctcdn.com.br/HUV06WevURQNovPIV7H0It4q79c=/700x394/smart/filters:format(webp)/i445916.jpeg",
		tweet: "eu amo fazer exercicios"
	},
	{
		username: "perola",
		avatar: "http://pm1.narvii.com/6382/43062c5065d0e1fc4065047e44ddd8708bec6d8f_00.jpg",
		tweet: "eu amo ver o larry fazer exercicio <3"
	},
	{
		username: "srapuff",
		avatar: "https://pm1.narvii.com/6350/dda5a981d12aeb5ecb8c70105194dd7f27b973c9_hq.jpg",
		tweet: "esses meus alunos um dia vão me matar"
	},
	{
		username: "holandesvoador",
		avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE2omP_cEI-j4dYmcNqvwdKBreIM5NSwTACkJ0HnvdFQIo-Gml7dGIUJOif-7SOtJFBI&usqp=CAU",
		tweet: "o sinistro holandes voador"
	},
]

server.get("/tweets", (req, res) => {
	res.send(tweets)
})

server.get("/tweets/:username", (req, res) => {
	const username = req.params.username
	const userTweets = tweets.filter(object => object.username === username)
	res.send(userTweets)
})

server.post("/sign-up", (req, res) => {

	const { username, avatar } = req.body
	userInfos.push({ username, avatar })

	if (!username || !avatar) {
		res.status(422).send("Todos os campos são obrigatórios!")
		return
	}
	res.status(201).send("OK")
})

// só funciona para o front-end 2 (Bônus) 
server.post("/tweets", (req, res) => {

	const { tweet } = req.body
	const username = req.headers.user
	const userInfo = userInfos.find(info => info.username === username)
	const avatar = userInfo.avatar
	tweets.unshift({ username, tweet, avatar })
	res.status(201).send("OK")
})

server.listen(5000, () => {
	console.log("You're connected in port 5000!")
})
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const secretKey = 'mysecretkey';
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );  

    if (userFromBd) {
        const token = jwt.sign({ id: userFromBd.id, username: userFromBd.username }, secretKey, {
            expiresIn: '1h', 
        });
  
        res.json({user: { id: userFromBd.id, username: userFromBd.username }, token });
    } else {
        res.status(401).json({ message: 'user not found' });
    }
});

server.get('/user', authenticateToken, (req, res) => {
    const user = req.user;
    res.json({ id: user.id, username: user.username });
});
  
function authenticateToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, secretKey, (err, user) => {
        console.log(token, user)
        
        if (err) return res.sendStatus(403);
  
        req.user = user;
        next();
    });
}

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});

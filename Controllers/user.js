const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`hashed password ${hashedPassword}`);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User is created: ${user}`);

    if (user) {
        return res.status(201).json(
            { created: "user is created" });
        // { _id: user.id, email: user.email });
    } else {
        return res.status(400).json({ error: "User is not valid" });
    }
};


const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "all field are require" });
    }

    const user = await User.findOne({ email });

    // compare with hashpassword
    if (user && (await bcrypt.compare(password, user.password))) {

        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    }

    else {
        return res.status(401).json({ error: " Credential are wrong" })
    }

    // res.status(200).json({ _id: user.id, email: user.email });
};

module.exports = { register, login }
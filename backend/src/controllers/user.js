const User = require('../models/User')

exports.login = (req, res, next) => {
  User.findOne({ email })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({ error }))
}

//TODO Ajout de la vérification du mot de passe avec Bcrypt puis renvoie d'un JWT

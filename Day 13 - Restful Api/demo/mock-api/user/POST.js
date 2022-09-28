module.exports = (req, res) => {
  const userId = req.body.id;
  if (userId === 1) {
    return res.sendStatus(409);
}
    return res.status(201).send({
      id: req.body.id,
      name: req.body.name,
      birthday: req.body.birthday
    });
  }
module.exports = function(request, response) {
    let users = require("../../user/GET.json");
  
    let user = users.find(user => user.id == request.params.user_id);
    const userId = request.body.id;
    if (userId === 1) {
        return response.sendStatus(409);
    }
    response.json({
      id: user.id
    });
  };
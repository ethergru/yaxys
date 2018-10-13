module.exports = {
  schema: {
    properties: {
      id: {
        type: "integer"
      },
      email: {
        title: "E-mail",
        type: "string",
        format: "email"
      },
      passwordHash: {
        title: "Password",
        type: "string",
        password: true
      }
    },
    required: ["email", "passwordHash"]
  },
  
  api: {
    "operator/:id": [
      PolicyService.removePasswordsFromResponse("operator"),
      RestService.findOne("operator")
    ],
    "operator": [
      PolicyService.removePasswordsFromResponse("operator"),
      RestService.find("operator")
    ],
    "put operator/:id": [
      PolicyService.encodePasswords("operator"),
      PolicyService.removePasswordsFromResponse("operator"),
      RestService.update("operator")
    ],
    "post operator": [
      PolicyService.debugRandomWaiter,
      PolicyService.encodePasswords("operator"),
      PolicyService.removePasswordsFromResponse("operator"),
      RestService.create("operator")
    ]
  }
};

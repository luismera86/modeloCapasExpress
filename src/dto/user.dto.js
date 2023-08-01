// Creamos un dto para el modelo de usuario


const userDTO = (user) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export { userDTO };